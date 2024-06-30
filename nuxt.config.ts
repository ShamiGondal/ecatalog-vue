// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    router: {
        middleware: ['router'],
   },
    postcss: {
        plugins: {
        tailwindcss: {},
        autoprefixer: {},
        },
    },
    vite: {
        server: {
            proxy: {
                '/ecatalog': {
                    target: 'https://admin.ecatalog.cloud/api/',
                    // target: 'http://127.0.0.1:8000/api',
                    changeOrigin: true,
                    secure: false,
                    ws: true,
                    rewrite: (path) => path.replace(/^\/ecatalog/, ''),
                }
            }
        }
    },
    modules: ["vue3-carousel-nuxt", '@pinia/nuxt',],
    
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://phplaravel-996806-4363314.cloudwaysapps.com/assets/img/illustrations/pos_logo2.png' },
            ],
        }
    }
})