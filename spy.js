var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

//web scraping básico dos Top 100 filmes do IMDB, gerando arquivo TXT com resultado.

request('https://www.imdb.com/chart/moviemeter/', function(err, res, body) {
  if (err) console.log('Erro: ' + err);

  var $ = cheerio.load(body);

  $('.lister-list tr').each(function() {
    var title = $(this).find('.titleColumn a').text().trim();
    var rating = $(this).find('.imdbRating strong').text().trim();

    console.log('Titulo: ' + title);
    

    fs.appendFile('imdb.txt', title + ' ' + rating + '\n', function (err) {
      if (err) throw err;
      console.log('Arquivo salvo com sucesso!');
  });

  })
});