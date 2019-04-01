const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, 'views', 'index.html'));
  res.render('index', { title: 'Authentication' });
});

app.listen(port, () => {
  debug(`Listening on port' ${chalk.green(port)}`);
});
