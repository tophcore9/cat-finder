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
            if (this.currentTheme === Theme.light) {
                 this.currentTheme = Theme.dark;
                 
                 this.headerColor = '#313131';
                 this.bodyColor = '#222222';
                 this.borderColor = '#646464';
            }
            else if (this.currentTheme === Theme.dark) {
                this.currentTheme = Theme.light;

                this.headerColor = 'white';
                this.bodyColor = '#F2F5F7';
                this.borderColor = '#DEDFE5';
            }
        }
    }
});