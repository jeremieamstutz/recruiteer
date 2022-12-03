const axios = require('axios');
const cheerio = require('cheerio');
const ObjectsToCsv = require('objects-to-csv');

linkedinJobs = [];


var input = {
    keyword: "Computer Vision Engineer",
    location: "london"
};

/*prefix and postfix*/
let prefix = "https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search?";
let postfix = "&trk=public_jobs_jobs-search-bar_search-submit&redirect=false&position=1&pageNum=0";

url = prefix + new URLSearchParams(input).toString() + postfix

/*replace the character "+" by "%2B" in the url */
base_url = url.replace(/\+/g, "%2B");

/*output the url in the console*/
console.log(url);


for (let pageNumber = 0; pageNumber < 500; pageNumber += 25) {
    
    let url = base_url + pageNumber;
    axios(url)
    .then (response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const jobs = $('li')
    jobs.each((index, element) => {
        const jobTitle = $(element).find('h3.base-search-card__title').text().trim()
        const company = $(element).find('h4.base-search-card__subtitle').text().trim()
        const location = $(element).find('span.job-search-card__location').text().trim()
        const link = $(element).find('a.base-card__full-link').attr('href')
        linkedinJobs.push({
            'Title': jobTitle,
            'Company': company,
            'Location': location,
            'Link': link,
        })
    });
    const csv = new ObjectsToCsv(linkedinJobs)
    csv.toDisk('./linkedInJobs.csv', { append: true })
    })
    .catch(console.error);
}







