const http = require('http');
const fs = require('fs');

let content;
let lastModified;
const dirPath = '/Users/danieldavidyan/Documents/ofek/server/simple-server/';
const contentPath = dirPath + 'content.txt';
const packageJsonPath = dirPath + 'package.json';

fs.readFile(contentPath, 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }
    content = data.toUpperCase();
})

fs.stat(packageJsonPath, (err, stats) => {
    if (err) {
        console.log(err);
    }
    lastModified = stats.mtime.toString();
})

http.createServer(function (req, res) {
    let postUrl = req.url;
    if (postUrl === '/content') {
        res.write(content);
    }
    if (postUrl === '/updateTime') {
        res.write(lastModified);
    }
    res.end();
}).listen(8080);

