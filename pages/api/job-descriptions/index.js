const axios = require('axios');
const cheerio = require('cheerio');
const { find } = require('domutils');
const base_url = 'https://www.linkedin.com/jobs/view/'
const regex=  /(JobId=)\d{10}/g;
const user_url = 'https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3334551559'
let JobId = user_url.match(regex)[0].match(/\d{10}/g)[0];
let final_url = (base_url+JobId)

axios(final_url)
.then (response => {
const html = response.data;
const $ = cheerio.load(html);
const job_title=$('h1').text().trim()
// const company = $('span').text().trim()
const job_details = $("div.show-more-less-html__markup.show-more-less-html__markup--clamp-after-5")
let description = ''
job_details.children().each((index, element) => {
    description += ($(element).text().trim() + '\n')
});
console.log(description)
})