const axios = require('axios');
const cheerio = require('cheerio');

let url = 'https://www.linkedin.com/jobs/view/senior-software-engineer-linux-distribution-at-cysec-3111676795/?originalSubdomain=ch'
axios(url)
.then (response => {
const html = response.data;
const $ = cheerio.load(html);
const text = $('div.show-more-less-html__markup.show-more-less-html__markup--clamp-after-5')
let Text = ''
text.each((index, element) => {
    Text += $(element).find('p').text().trim()
});
console.log(Text)
})