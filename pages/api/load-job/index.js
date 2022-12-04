import { scrapeJobDescription } from 'utils/scraper'

import statusCodes from 'utils/statusCodes'

export default async function handler(req, res) {
	const { method, body } = req

	switch (method) {
		case 'POST': {
			const { url } = body
			// console.log(url)
			const jobInfo = await scrapeJobDescription(url)
			// console.log(jobInfo)
			return res.status(statusCodes.ok).json(jobInfo)
		}
		default:
			res.status(statusCodes.methodNotAllowed).end()
			break
	}
}
