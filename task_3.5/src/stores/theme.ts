import { defineStore } from 'pinia';

const Theme = {
    light: 'light',
    dark: 'dark'
} as const;

export type Theme = (typeof Theme)[keyof typeof Theme];

export const useThemeStore = defineStore('theme', {
    state: () => {
        return {
            currentTheme: Theme.light as Theme,
            logoUrl: '',
            headerColor: 'white',
            bodyColor: '#F2F5F7',
            borderColor: '#DEDFE5',
        }
    },
    actions: {
        toggleTheme() {
            if (this.currentTheme === Theme.light) this.currentTheme = Theme.dark;
            else this.currentTheme = Theme.light;
        }
    }
});