const plugins = require('./config/tailwind/plugins.js')
const theme = require('./config/tailwind/theme.js')
const variants = require('./config/tailwind/variants.js')

module.exports = {
    darkMode: 'media',
    theme: theme.config,
    variants: variants.config,
    plugins: plugins.config
}

