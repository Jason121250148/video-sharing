import bodyParser from 'body-parser';
import config from 'config';
import express from 'express';
import path from "path";

const app = express();

// Initialize app settings.
app.set('assets url prefix', config.get('web.assets.urlPrefix'));

// Set Pug as the default view engine.
app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, './views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false }));

app.getAssetUrl = function getAssetUrl(relPath) {
  const prefix = app.get('assets url prefix');
  return `${prefix}${relPath}`;
};

app.use('/', require('./routes').default);

export default app;
