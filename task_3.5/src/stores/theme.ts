import { defineStore } from 'pinia';

const Theme = {
    light: 'light',
    dark: 'dark'
} as const;

export type Theme = (typeof Theme)[keyof typeof Theme];

export const useThemeStore = defineStore('theme', {
    state: () => {
        return {
            currentTheme: Theme.light as Theme
        }
    },
    actions: {
        toggleTheme() {
            if (this.currentTheme === Theme.light) this.currentTheme = Theme.dark;
            else this.currentTheme = Theme.light;
        }
    }
});