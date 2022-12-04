import puppeteer from 'puppeteer'

const LINKEDIN_BASE_URL = 'https://www.linkedin.com/jobs/view/'

export async function scrapeJobDescription(url) {
	let jobId = ''
	if (url.match('currentJobId')) {
		jobId = new URLSearchParams(new URL(url).search).get('currentJobId')
	}

	let FINAL_URL = LINKEDIN_BASE_URL + jobId

	const browser = await puppeteer.launch()
	const page = await browser.newPage()

	await page.goto(FINAL_URL)

	await page.waitForNetworkIdle({ waitUnitl: 'networkidle2' })

	const jobInfo = await page.evaluate(() => {
		const job = document
			.querySelector('.top-card-layout__title')
			.innerText.trim()
		const company = document
			.querySelector('.topcard__org-name-link')
			.innerText.trim()
		const description = document
			.querySelector('.show-more-less-html__markup')
			.innerText.trim()
			.replace(/\n\s*\n/g, '\n\n')
		return {
			job,
			company,
			description,
		}
	})
	browser.close()

	return jobInfo
}
