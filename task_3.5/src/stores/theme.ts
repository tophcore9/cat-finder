import { defineStore } from 'pinia';

const Theme = {
    light: 'light',
    dark: 'dark',
} as const;
type Theme = (typeof Theme)[keyof typeof Theme];

/* DARK THEME */
const darkTheme = {
    currentTheme: Theme.dark,

    logoUrl: '/src/assets/icons/logo-dark_theme.svg',
    settingsIconUrl: '/src/assets/icons/settings-dark_theme.svg',
    settingsActiveIconUrl: '/src/assets/icons/settings-dark_theme.svg',
    themeIconUrl: '/src/assets/icons/theme_picker-dark_theme.svg',
    searchIconUrl: '/src/assets/icons/search-dark_theme.svg',
    favoritesIconUrl: '/src/assets/icons/favorites-dark_theme.svg',
    favoritesActiveIconUrl: '/src/assets/icons/favorites-clicked.svg',
    favoritesCheckedIconUrl: '/src/assets/icons/favorites-dark_theme-checked.svg',

    textColor: '#FFFFFF',
    activeColor: '#FFC682',
    headerColor: '#313131',
    bodyColor: '#222222',
    elementColor: '#454545',
    borderColor: '#646464',
};

/* LIGHT THEME */
const lightTheme = {
    currentTheme: Theme.light,

    logoUrl: '/src/assets/icons/logo-light_theme.svg',
    settingsIconUrl: '/src/assets/icons/settings-light_theme.svg',
    settingsActiveIconUrl: '/src/assets/icons/settings-clicked.svg',
    themeIconUrl: '/src/assets/icons/theme_picker-light_theme.svg',
    searchIconUrl: '/src/assets/icons/search-light_theme.svg',
    favoritesIconUrl: '/src/assets/icons/favorites-light_theme.svg',
    favoritesActiveIconUrl: '/src/assets/icons/favorites-clicked.svg',
    favoritesCheckedIconUrl: '/src/assets/icons/favorites-light_theme-checked.svg',

    textColor: '#323749',
    activeColor: '#FFC682',
    headerColor: '#FFFFFF',
    bodyColor: '#F2F5F7',
    elementColor: '#FFFFFF',
    borderColor: '#DEDFE5',
};

export const useThemeStore = defineStore('theme', {
    state: () => {
        return {
            currentTheme: lightTheme.currentTheme,

            logoUrl: lightTheme.logoUrl,
            settingsIconUrl: lightTheme.settingsIconUrl,
            settingsActiveIconUrl: lightTheme.settingsActiveIconUrl,
            themeIconUrl: lightTheme.themeIconUrl,
            searchIconUrl: lightTheme.searchIconUrl,
            favoritesIconUrl: lightTheme.favoritesIconUrl,
            favoritesActiveIconUrl: lightTheme.favoritesActiveIconUrl,
            favoritesCheckedIconUrl: lightTheme.favoritesCheckedIconUrl,

            textColor: lightTheme.textColor,
            activeColor: lightTheme.activeColor,
            headerColor: lightTheme.headerColor,
            bodyColor: lightTheme.bodyColor,
            elementColor: lightTheme.elementColor,
            borderColor: lightTheme.borderColor,
        };
    },
    actions: {
        toggleTheme() {
            if (this.currentTheme === Theme.light) {
                Object.assign(this, darkTheme);
            } else if (this.currentTheme === Theme.dark) {
                Object.assign(this, lightTheme);
            }
        },
    },
    persist: {
        storage: sessionStorage
    }
});
