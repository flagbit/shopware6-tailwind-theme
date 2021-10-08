const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: [
        './src/Resources/views/**/*.html.twig',
    ],
    theme: {
        colors: {
            gray: colors.gray,
            white: colors.white,
            'sw-background': 'var(--background-color)',
            'sw-border': 'var(--border-color)',
            'sw-buy-button': 'var(--color-buy-button)',
            'sw-buy-button-text': 'var(--color-buy-button-text)',
            'sw-danger': 'var(--color-danger)',
            'sw-info': 'var(--color-info)',
            'sw-price': 'var(--color-price)',
            'sw-primary': 'var(--color-primary)',
            'sw-secondary': 'var(--color-secondary)',
            'sw-success': 'var(--color-success)',
            'sw-warning': 'var(--color-warning)',
            'sw-headline': 'var(--headline-color)',
            'sw-navigation-active': 'var(--navigation-active-color)',
            'sw-navigation-hover': 'var(--navigation-hover-color)',
            'sw-text': 'var(--text-color)',
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

