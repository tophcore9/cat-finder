import { defineStore } from 'pinia';

export default interface Theme {
    themeName: string;

    logoUrl: string;
    settingsIconUrl: string;
    settingsActiveIconUrl: string;
    themeIconUrl: string,
    searchIconUrl: string,
    favoritesIconUrl: string,
    favoritesActiveIconUrl: string,
    favoritesCheckedIconUrl: string,

    textColor: string,
    activeColor: string,
    headerColor: string,
    bodyColor: string,
    elementColor: string,
    borderColor: string,
}

export interface ThemeStore {
    currentTheme: Theme;
    toggleTheme: () => void;
};

export const useThemeStore = defineStore('currentTheme', {
    state: () => {
        return {
            currentTheme: lightTheme
        };
    },
    actions: {
        toggleTheme() {
            if (this.currentTheme.themeName === lightTheme.themeName) {
                this.currentTheme = darkTheme;
            } else if (this.currentTheme.themeName === darkTheme.themeName) {
                this.currentTheme = lightTheme;
            }
        },
    },
});

/* THEMES */
/* DARK THEME */
const darkTheme: Theme = {
    themeName: 'dark',

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
const lightTheme: Theme = {
    themeName: 'light',

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