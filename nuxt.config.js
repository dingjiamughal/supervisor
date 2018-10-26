const pkg = require('./package');
// const baseUrl = '/supervisor';
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'universal',
    progress: true,

    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: pkg.description
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#46a0fc',
        height: '3px'
    },

    /*
     ** Global CSS
     */
    css: [
        'normalize.css/normalize.css',
        'element-ui/lib/theme-chalk/index.css',
        '~css/common.css'
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        {src: '@/plugins/element-ui'},
        {src: '@/plugins/vue-echarts'}
    ],
    pugPlain: {

    },

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios'
    ],
    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
     ** Build configuration
     */
    build: {
        styleResources: {
            less: './css/variable/*.less'
        },
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            if (ctx.isServer) {
                config.externals = [
                    nodeExternals({
                        // whitelist: [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i]
                        whitelist: [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i, /^vue-echarts/]
                    })
                ];
            }
        }
    },

    router: {
        // base: baseUrl,
        extendRoutes(routes, resolve) {
            routes.push({
                name: 'custom',
                path: '*',
                component: resolve(__dirname, 'pages/404.vue')
            });
        }
    }
};
