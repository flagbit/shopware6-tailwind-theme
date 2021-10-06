const Encore = require('@symfony/webpack-encore');

// @see https://symfony.com/doc/current/frontend/encore/faq.html#how-do-i-integrate-my-encore-configuration-with-my-ide
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

Encore
    .setOutputPath('src/Resources/public/tailwindcss/')
    .setPublicPath('/tailwindcss')
    .addEntry('js/app', './assets/js/app.js')
    .addStyleEntry('css/app', './assets/css/app.scss')
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild([
        '**/*',
        '!.gitkeep',
    ])
    .enableSourceMaps(!Encore.isProduction())
    .configureBabel(() => {
    }, {
        useBuiltIns: 'usage',
        corejs: 3
    })
    .enableSassLoader(sassOptions => {
    }, {
        resolveUrlLoader: false
    })
    .enablePostCssLoader(options => {
        postCssOptions = [
            tailwindcss('./tailwind.config.js'),
            autoprefixer,
        ];
    })
;

if (Encore.isProduction()) {
    const PurgeCssPlugin = require('purgecss-webpack-plugin');
    const glob = require('glob-all');
    const path = require('path');

    Encore.addPlugin(new PurgeCssPlugin({
        paths: glob.sync([
            path.join(__dirname, 'src/Resources/views/**/*.html.twig')
        ]),
        content: ["**/*.twig"],
        defaultExtractor: (content) => {
            return content.match(/[\w-/:]+(?<!:)/g) || [];
        }
    }))
}

module.exports = Encore.getWebpackConfig();
