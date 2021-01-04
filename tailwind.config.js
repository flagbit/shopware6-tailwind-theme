const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
    darkMode: 'media',
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
        },
        extend: {
            maxWidth: {
                '3xs': '6rem',
                'xxs': '12rem'
            },
            minWidth: {
                '0': '0',
                '25': '25%',
                '50': '50%',
                '75': '75%',
                'full': '100%',
                '150': '10rem',
                '300': '20rem'
            }
        },
    },
    variants: {},
    plugins: [
        plugin(function ({ addComponents, theme }) {
            const filter = {
                '.filter-active': {
                    padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
                    marginRight: `${theme('spacing.2')}`,
                    borderRadius: theme('borderRadius.md'),
                    fontWeight: theme('fontWeight.600'),
                    backgroundColor: theme('colors.sw-border'),
                    color: theme('colors.white'),
                    '&:hover': {
                        backgroundColor: theme('colors.sw-border')
                    }
                }
            }

            addComponents(filter)
        })
    ]
}

