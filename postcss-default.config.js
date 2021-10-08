// postcss.config.js
module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss')('./tailwind-default.config.js'),
        require('autoprefixer'),
    ],
};
