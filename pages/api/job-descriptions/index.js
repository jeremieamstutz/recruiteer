const axios = require('axios');
const cheerio = require('cheerio');
const { find } = require('domutils');
const base_url = 'https://www.linkedin.com/jobs/view/'
const regex=  /(JobId=)\d{10}/g;
const user_url = 'https://www.linkedin.com/jobs/view/3370792247/?alternateChannel=search&refId=wg0KaNvco%2F02S2iF7aEzZQ%3D%3D&trackingId=Z%2FV4qhfPwiRH5NQlNLPgXA%3D%3D'

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
// const company = $('span').text().trim()
const job_details = $("div.show-more-less-html__markup.show-more-less-html__markup--clamp-after-5")
let description = ''
job_details.children().each((index, element) => {
    description += ($(element).text().trim() + '\n')
});
console.log(description)
})