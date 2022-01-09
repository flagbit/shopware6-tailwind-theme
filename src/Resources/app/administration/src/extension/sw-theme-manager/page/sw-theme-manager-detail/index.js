import template from './sw-theme-manager-detail.html.twig';
import { TECHNICAL_NAME } from '../../../../helper/constant';

const { Component } = Shopware;

Component.override('sw-theme-manager-detail', {
    template,

    computed: {
        isTailwind() {
            return this.theme && (this.theme.technicalName === TECHNICAL_NAME ||
                    (this.parentTheme !== null && this.parentTheme.technicalName === TECHNICAL_NAME));
        },
    },
});
