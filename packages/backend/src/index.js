import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import router from './router';
import {connectDb} from './lib/db';

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app
    .use(router.routes())
    .use(router.allowedMethods());

const startServer = () => {
    app.listen(5000, async () => {
        console.log(`Server listening on port 5000`);
    });
};

connectDb()
    .on('error', console.error)
    .on('disconnected', connectDb)
    .on('open', startServer);