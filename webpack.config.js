const Encore = require('@symfony/webpack-encore');
const fs = require('fs');
const path = require('path');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('backoffice', './app.js')
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .enableSassLoader()
    .enableVueLoader()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .configureBabel((config) => {
        config.plugins.push('@babel/plugin-proposal-class-properties');
    })
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })
;

const prod = Encore.getWebpackConfig();
prod.name = 'prod';

Encore.reset();

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('backoffice', './assets/app.js')
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .enableSassLoader()
    .enableVueLoader()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .configureBabel((config) => {
        config.plugins.push('@babel/plugin-proposal-class-properties');
    })
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })
;

const dev = Encore.getWebpackConfig();

dev.name = 'dev';
dev.resolve.modules = [path.resolve(__dirname, 'node_modules')];

module.exports = [prod, dev];
