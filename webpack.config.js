const Encore = require('@symfony/webpack-encore');

// @see https://symfony.com/doc/current/frontend/encore/faq.html#how-do-i-integrate-my-encore-configuration-with-my-ide
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

const path = require('path');

// Default tailwindcss build process
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
        options.postcssOptions = {
            config: path.join(__dirname, 'postcss-default.config.js'),
        };
    })
;

if (Encore.isProduction()) {
    const PurgeCssPlugin = require('purgecss-webpack-plugin');
    const glob = require('glob-all');

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

const defaultConfig = Encore.getWebpackConfig();
defaultConfig.name = 'defaultConfig';

Encore.reset();

// Tailwindcss JIT compiler
Encore
    .setOutputPath('src/Resources/public/tailwindcss/')
    .setPublicPath('/tailwindcss')
    .addEntry('js/app', './assets/js/app.js')
    .addStyleEntry('css/app', './assets/css/jit.css')
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild([
        '**/*',
        '!.gitkeep',
    ])
    .enableSourceMaps(!Encore.isProduction())
    .enablePostCssLoader(options => {
        options.postcssOptions = {
            config: path.join(__dirname, 'postcss-jit.config.js'),
        };
    })
;

const jitConfig = Encore.getWebpackConfig();
jitConfig.name = 'jitConfig';

module.exports = [defaultConfig, jitConfig];
