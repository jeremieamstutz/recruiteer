const axios = require('axios');
const cheerio = require('cheerio');
const { find } = require('domutils');
const base_url = 'https://www.linkedin.com/jobs/view/'
const regex=  /(JobId=)\d{10}/g;
const user_url = 'https://ch.linkedin.com/jobs/view/senior-business-development-leader%E2%80%93-bms-europe-at-honeywell-3283781893?refId=BZaNgXaxA8Z6C5WTjHsyVw%3D%3D&trackingId=03MeAm6gi6h7IFw%2F8QIjTQ%3D%3D&position=1&pageNum=0&trk=public_jobs_jserp-result_search-card'
let JobIdString = ''
if (regex.test(user_url)){
    JobIdString = user_url.match(regex).match(/\d{10}/g)[0];
}
else{
    JobIdString = user_url.match(/\d{10}/g)[0];

}
let final_url =(base_url+JobIdString)

axios(final_url)
.then (response => {
const html = response.data;
const $ = cheerio.load(html);
const job_title=$('h1').text().trim()
const company = $('span.topcard__flavor').text().trim()
const job_details = $("div.show-more-less-html__markup.show-more-less-html__markup--clamp-after-5")
let description = ''
job_details.children().each((index, element) => {
    description += ($(element).text().trim() + '\n')
});
console.log(company)
})