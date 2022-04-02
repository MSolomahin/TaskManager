// const express = require('express');
const path = require('path');
const fs = require("fs"); 
// //const { getPostById } = require('./stub/posts');
// const app = express();

// const PORT = process.env.PORT || 3000;
const indexPath  = path.resolve(__dirname, '..', 'build', 'index.html');

// app.use(express.static(
//     path.resolve(__dirname, '..', 'build'),
//     { maxAge: '30d' },
// ));

// app.get('/report/*', (req, res, next) => {
//     fs.readFile(indexPath, 'utf8', (err, htmlData) => {
//         if (err) {
//             console.error('Error during file reading', err);
//             return res.status(404).end()
//         }
        
//         htmlData = htmlData.replace(
//             "<title>React App</title>",
//             `<title>Личный кабинет на сайте компании</title>`
//         )
//         .replace('__META_OG_TITLE__', "Личный кабинет на сайте компании")
//         .replace('__META_OG_DESCRIPTION__', "Личный кабинет на сайте компании. На нашем сайте вы узнаете сколько стоит реклама в телеграмме и как купить рекламу в ТГ, платформа для владельцев каналов и рекламодателей, начните работу на нашем сайте, чтобы получить желаемый результат!")
//         .replace('__META_DESCRIPTION__', "Личный кабинет на сайте компании. На нашем сайте вы узнаете сколько стоит реклама в телеграмме и как купить рекламу в ТГ, платформа для владельцев каналов и рекламодателей, начните работу на нашем сайте, чтобы получить желаемый результат!")

//         return res.send(htmlData);
//     });
// });
// //listening...
// app.listen(PORT, (error) => {
//     if (error) {
//         return console.log('Error during app startup', error);
//     }
//     console.log("listening on " + PORT + "...");
// });

var express = require('express');
var app = express();

app.get('/', function(req, res) {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
        
        htmlData = htmlData.replace(
            "<title></title>",
            `<title>Личный кабинет на сайте компании</title>`
        )
        .replace('__META_OG_TITLE__', "Личный кабинет на сайте компании")
        .replace('__META_OG_DESCRIPTION__', "Личный кабинет на сайте компании. На нашем сайте вы узнаете сколько стоит реклама в телеграмме и как купить рекламу в ТГ, платформа для владельцев каналов и рекламодателей, начните работу на нашем сайте, чтобы получить желаемый результат!")
        .replace('__META_DESCRIPTION__', "Личный кабинет на сайте компании. На нашем сайте вы узнаете сколько стоит реклама в телеграмме и как купить рекламу в ТГ, платформа для владельцев каналов и рекламодателей, начните работу на нашем сайте, чтобы получить желаемый результат!")

        return res.send(htmlData);
    });
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

// const express = require('express'); //Line 1
// const app = express(); //Line 2
// const port = process.env.PORT || 3000; //Line 3

// // This displays message that the server running and listening to specified port
// app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// // create a GET route
// app.get('/express_backend', (req, res) => { //Line 9
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
// }); //Line 11