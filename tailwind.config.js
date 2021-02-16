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
                '6xs': '6rem',
                '5xs': '9rem',
                '4xs': '12rem',
                '3xs': '15rem',
                'xxs': '18rem'
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
        }),
        plugin(function ({ addComponents, theme }) {
            const customSelect = {
                '.custom-select': {
                    display: "inline-block",
                    padding: `${theme('spacing.1')} ${theme('spacing.3')}`,
                    color: theme('colors.sw-text'),
                    verticalAlign: `middle`,
                    background: `url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3e%3cpath fill=\'%234a545b\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3e%3c/svg%3e") no-repeat right .5625rem center/8px 10px;`,
                    backgroundColor: theme('colors.white'),
                    border: `1px solid ${theme('colors.gray.200')}`,
                    borderRadius: theme('borderRadius.md'),
                    "-moz-appearance": `none`,
                    "-webkit-appearance": `none`,
                    appearance: `none`
                }
            }

            addComponents(customSelect)
        })
    ]
}

