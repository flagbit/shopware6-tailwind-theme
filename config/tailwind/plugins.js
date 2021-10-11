const plugin = require("tailwindcss/plugin");

module.exports = {
    config: [
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
