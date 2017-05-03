import http from 'http';

import app from './src/server/app';

const httpServer = http.createServer(app);

const port = process.env.PORT ? parseInt(process.env.PORT, 0) : 8081;
httpServer.listen(port, () => {
    console.log(`The video sharing server is now running at HTTP ${port}.`);
});
