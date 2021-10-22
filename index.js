const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const PORT = 8080;
const app = express();

const URL = "https://en.wikipedia.org/wiki/dyson_sphere";

axios(URL).then((res) => {
  const html = res.data;
  const $ = cheerio.load(html)
  const articles = []
  $('.mw-parser-output', html).each(function() {
      const title = $(this).text()
      const url = $(this).find('a').attr('href')
      articles.push({
          title, url
      })
  })
  console.log(articles)
}).catch(err=>console.log(err)) ;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
