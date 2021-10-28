let path = require('path');
let fs = require('fs');
let request = require('request');
//let rp = require('request-promise');

let redditPath =  path.join(__dirname, './popular-articles.json');

/*rp('https://reddit.com/r/popular.json')
    .then(data => {
        let articles = JSON.parse(data).children;
        console.log(articles);

}).catch(err => console.log(err));*/

request('https://reddit.com/r/popular.json', (err, res, body) => {
    
    if (err) console.log(err);

    let articles = [];
    JSON.parse(body).data.children.forEach(item => {
        let newArticle = {title: item.data.title, author: item.data.author, url: item.data.url};
        articles.push(newArticle);
    });
    
    JSON.stringify(articles);
    
    fs.writeFileSync(redditPath, JSON.stringify(articles));
});
