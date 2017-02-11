import bodyParser from 'body-parser';
import express from 'express';

const app = server();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false }));

app.use('/', require('./routes').default);

export default app;
