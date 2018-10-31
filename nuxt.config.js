const pkg = require('./package');
// const baseUrl = '/supervisor';
const nodeExternals = require('webpack-node-externals');

module.exports = {
    // mode: 'universal',
    progress: true,

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
            },
            {
                hid: 'keywords',
                name: 'keywords',
                content: pkg.keywords
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }]
    },

    loading: {
        color: '#46a0fc',
        height: '3px'
    },

    css: [
        'normalize.css/normalize.css',
        'element-ui/lib/theme-chalk/index.css',
        '~css/common.css'
    ],

    plugins: [
        {src: '@/plugins/element-ui'},
        {src: '@/plugins/echarts'}
    ],
    pugPlain: {},

    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios'
    ],

    axios: {
        // See https://github.com/nuxt-community/axios-module#options
        proxy: true,
        prefix: '/api',
        port: process.env.NODE_ENV === 'development' ? 8801 : 8801
    },

    // proxy: {
    //     '/api/': 'http://localhost:8801'
    // },

    build: {
        styleResources: {
            less: './css/variable/*.less'
        },

        // vendor: [
        //     'element-ui',
        //     'echarts'
        // ],

        babel: {
            plugins: [
                [
                    'component', {
                        libraryName: 'element-ui',
                        styleLibraryName: 'theme-chalk'
                    }
                ],
                // [
                //     'component', {
                //         libraryName: 'echarts',
                //         // libDir: 'lib',
                //         style: false
                //     },
                //     'echarts'
                // ]
            ]
        },
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            if (ctx.isServer) {
                config.externals = [
                    nodeExternals({
                        // whitelist: [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i]
                        whitelist: [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i, /^echarts/]
                    })
                ];
            }
        }
    },

    // dev: {
    //     proxyTable: {
    //         '/api': {
    //             target: 'http://localhost:3000',
    //             secure: false
    //         }
    //     }
    // },

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
