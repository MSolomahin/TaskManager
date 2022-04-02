const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const config = require('../webpack.dev');

const compiler = webpack(config);

const PORT = process.env.PORT || 3000;
const indexPath = path.resolve(__dirname, '..', 'public', 'index.html');

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }),
);

 app.use(express.static(path.resolve(__dirname, '..', 'public', 'index.html')));

app.get('/about', (req, res) => {
  fs.readFile(indexPath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('Error during file reading', err);
      return res.status(404).end();
    }

    htmlData = htmlData.replace(
      `<title>React App</title>`,
      `<title>О компании</title>`,
    );

    return res.send(htmlData);
  });
});

app.get('/*', (req, res) => {
  fs.readFile(indexPath, 'utf8', (err, htmlData) => {
    return res.send(htmlData);
  });
});

// listening...
app.listen(PORT, error => {
  if (error) {
    return console.log('Error during app startup', error);
  }
  console.log('listening on ' + PORT + '...');
});
