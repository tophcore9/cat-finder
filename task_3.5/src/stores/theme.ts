import { defineStore } from 'pinia';

const Theme = {
    light: 'light',
    dark: 'dark',
} as const;

/* TODO: MAKE CONSTANT OBJECTS OF THEMES */

export type Theme = (typeof Theme)[keyof typeof Theme];

export const useThemeStore = defineStore('theme', {
    state: () => {
        return {
            currentTheme: Theme.light as Theme,
            logoUrl: '/src/assets/icons/logo-light_theme.svg',
            settingsIconUrl: '/src/assets/icons/settings-light_theme.svg',
            searchIconUrl: '/src/assets/icons/search-light_theme.svg',
            themeIconUrl: '/src/assets/icons/theme_picker-light_theme.svg',
            headerColor: 'white',
            bodyColor: '#F2F5F7',
            elementColor: '#FFFFFF',
            borderColor: '#DEDFE5',
        };
    },
    actions: {
        toggleTheme() {
            if (this.currentTheme === Theme.light) {
                this.currentTheme = Theme.dark;

                this.logoUrl = '/src/assets/icons/logo-dark_theme.svg';
                this.settingsIconUrl = '/src/assets/icons/settings-dark_theme.svg',
                this.themeIconUrl = '/src/assets/icons/theme_picker-dark_theme.svg';
                this.searchIconUrl = '/src/assets/icons/search-dark_theme.svg',
                this.headerColor = '#313131';
                this.bodyColor = '#222222';
                this.elementColor = '#454545';
                this.borderColor = '#646464';
            } else if (this.currentTheme === Theme.dark) {
                this.currentTheme = Theme.light;

                this.logoUrl = '/src/assets/icons/logo-light_theme.svg';
                this.settingsIconUrl = '/src/assets/icons/settings-light_theme.svg',
                this.themeIconUrl = '/src/assets/icons/theme_picker-light_theme.svg';
                this.searchIconUrl = '/src/assets/icons/search-light_theme.svg',
                this.headerColor = 'white';
                this.bodyColor = '#F2F5F7';
                this.elementColor = '#FFFFFF';
                this.borderColor = '#DEDFE5';
            }
        },
    },
});
