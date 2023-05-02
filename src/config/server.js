const express = require('express');

const app = express();

// settings
app.set(app.set('port'), process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.joint(__dirname, '../app/views'));
