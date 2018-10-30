/* eslint-disable fecs-no-require */
const Koa = require('koa');
const KoaRouter = require('koa-router');
const consola = require('consola');
const {
    Nuxt,
    Builder
} = require('nuxt');

const app = new Koa();
const router = new KoaRouter();
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8801;

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js');
config.dev = !(app.env === 'production');

if (config.dev) {
    router.get('/api/test', async (ctx, next) => {
        ctx.body = {
            errno: 0,
            data: 'hahaha'
        };
    });

    app.use(router.routes(), router.allowedMethods());
}

async function start() {
    // Instantiate nuxt.js
    const nuxt = new Nuxt(config);

    // Build in development
    if (config.dev) {
        const builder = new Builder(nuxt);
        await builder.build();
    }

    app.use(ctx => {
        ctx.status = 200; // koa defaults to 404 when it sees that status is unset

        return new Promise((resolve, reject) => {
            ctx.res.on('close', resolve);
            ctx.res.on('finish', resolve);
            nuxt.render(ctx.req, ctx.res, promise => {
                // nuxt.render passes a rejected promise into callback on error.
                promise.then(resolve).catch(reject);
            });
        });
    });

    app.listen(port, host);
    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    });
}

start();
