import bodyParser from 'body-parser';
import express from 'express';
import path from "path";

const app = express();

// Set Pug as the default view engine.
app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, './views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false }));

app.use('/', require('./routes').default);

export default app;
