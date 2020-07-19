// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const project ='panda'
module.exports = function (ctx) {
  let a = 123;
  console.log('ppppppppppppp=111'+JSON.stringify(ctx)); 
  return {
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://quasar.dev/quasar-cli/cli-documentation/boot-files
    boot: [
      `i18n`,
      `axios`,
      'tt',
      // 'webpack-bundle-analyzer'
    ],

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
    css: [
      `${project}/app.sass`
    ],
    
    sourceFiles: {
      rootComponent: `src/project/${project}/App.vue`,
      router: `src/project/${project}/router`,
      store: `src/project/${project}/store`,
      indexHtmlTemplate: `src/project/${project}/index.template.html`,
      // boot: `src/${project}/boot`
      // public: `src/public`,
    },

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      // 'ionicons-v4',
      // 'mdi-v4',
      // 'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!
      // 'webpack-bundle-analyzer',
      'roboto-font', // optional, you are not bound to it
      'material-icons' // optional, you are not bound to it
    ],

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
    framework: {
      // iconSet: 'ionicons-v4', // Quasar icon set
      // lang: 'de', // Quasar language pack

      // Possible values for "all":
      // * 'auto' - Auto-import needed Quasar components & directives
      //            (slightly higher compile time; next to minimum bundle size; most convenient)
      // * false  - Manually specify what to import
      //            (fastest compile time; minimum bundle size; most tedious)
      // * true   - Import everything from Quasar
      //            (not treeshaking Quasar; biggest bundle size; convenient)
      all: 'auto',

      components: [],
      directives: [],

      // Quasar plugins
      plugins: [
        // 'webpack-bundle-analyzer',
        // new BundleAnalyzerPlugin()
      ]
    },
    plugins: [
      new BundleAnalyzerPlugin()
    ],

    // https://quasar.dev/quasar-cli/cli-documentation/supporting-ie
    supportIE: true,

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
    build: {
      scopeHoisting: true,
      // vueRouterMode: 'history',
      // showProgress: false,
      gzip: true,
      analyze: true,
      // preloadChunks: false,
      // extractCSS: false,
      sourceMap:false,

      // https://quasar.dev/quasar-cli/cli-documentation/handling-webpack
      extendWebpack (cfg) {
        console.log('AAAAAAAAAAAAAAAAAAAAAA')
        // cfg.plugins[6].cfg.css= [ { path: 'src/${project}/css/app.sass' } ],
        // cfg.plugins[6].cfg.boot=
        //  [ { path: 'src/${project}/boot/i18n' }, { path: 'src/${project}/boot/axios' } ],

        console.log(JSON.stringify(cfg))
        

        cfg.resolve.alias = {
          ...cfg.resolve.alias, // This adds the existing alias
          src: path.resolve(__dirname, './src'),
          // app: path.resolve(__dirname, './src/pandan'),
          components: path.resolve(__dirname, './src/project/${project}/components'),//'C:\\vue\\caipiao2\\src\\components',
          layouts: path.resolve(__dirname, './src/project/${project}/layouts'),//'C:\\vue\\caipiao2\\src\\layouts',
          pages: path.resolve(__dirname, './src/project/${project}/pages'),//'C:\\vue\\caipiao2\\src\\pages',
          assets: path.resolve(__dirname, './src/project/${project}/assets'),//'C:\\vue\\caipiao2\\src\\assets',
          // boot: path.resolve(__dirname, './src/${project}/boot'),//'C:\\vue\\caipiao2\\src\\boot' },

          }
      }
    },

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
    devServer: {
      // https: true,
      // port: 8080,
      open: true // opens browser window automatically
    },

    // animations: 'all', // --- includes all animations
    // https://quasar.dev/options/animations
    animations: [],

    // https://quasar.dev/quasar-cli/developing-ssr/configuring-ssr
    ssr: {
      pwa: false
    },

    // https://quasar.dev/quasar-cli/developing-pwa/configuring-pwa
    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {}, // only for NON InjectManifest
      manifest: {
        // name: 'success',
        // short_name: 'success',
        // description: 'success',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': '/statics/${project}/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/${project}/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/${project}/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/${project}/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/${project}/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },

    // https://quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova
    cordova: {
      // id: 'org.cordova.quasar.app',
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    // https://quasar.dev/quasar-cli/developing-electron-apps/configuring-electron
    electron: {
      // bundler: 'builder', // or 'packager'

      extendWebpack (cfg) {

      },

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'success'
      }
    }
  }
}
