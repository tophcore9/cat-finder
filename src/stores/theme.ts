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

    logoUrl: import.meta.env.BASE_URL + '/assets/icons/logo-dark_theme.svg',
    settingsIconUrl: import.meta.env.BASE_URL + '/assets/icons/settings-dark_theme.svg',
    settingsActiveIconUrl: import.meta.env.BASE_URL + '/assets/icons/settings-dark_theme.svg',
    themeIconUrl: import.meta.env.BASE_URL + '/assets/icons/theme_picker-dark_theme.svg',
    searchIconUrl: import.meta.env.BASE_URL + '/assets/icons/search-dark_theme.svg',
    favoritesIconUrl: import.meta.env.BASE_URL + '/assets/icons/favorites-dark_theme.svg',
    favoritesActiveIconUrl: import.meta.env.BASE_URL + '/assets/icons/favorites-clicked.svg',
    favoritesCheckedIconUrl: import.meta.env.BASE_URL + '/assets/icons/favorites-dark_theme-checked.svg',

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

    logoUrl: import.meta.env.BASE_URL + '/assets/icons/logo-light_theme.svg',
    settingsIconUrl: import.meta.env.BASE_URL + '/assets/icons/settings-light_theme.svg',
    settingsActiveIconUrl: import.meta.env.BASE_URL + '/assets/icons/settings-clicked.svg',
    themeIconUrl: import.meta.env.BASE_URL + '/assets/icons/theme_picker-light_theme.svg',
    searchIconUrl: import.meta.env.BASE_URL + '/assets/icons/search-light_theme.svg',
    favoritesIconUrl: import.meta.env.BASE_URL + '/assets/icons/favorites-light_theme.svg',
    favoritesActiveIconUrl: import.meta.env.BASE_URL + '/assets/icons/favorites-clicked.svg',
    favoritesCheckedIconUrl: import.meta.env.BASE_URL + '/assets/icons/favorites-light_theme-checked.svg',

    textColor: '#323749',
    activeColor: '#FFC682',
    headerColor: '#FFFFFF',
    bodyColor: '#F2F5F7',
    elementColor: '#FFFFFF',
    borderColor: '#DEDFE5',
};