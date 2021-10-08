// postcss.config.js
module.exports = {
    plugins: [
        require('tailwindcss')('./tailwind-jit.config.js'),
        require('autoprefixer')
    ],
};
