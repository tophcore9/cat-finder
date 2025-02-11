import { defineStore } from 'pinia';

interface Cat {
    
}

const catsAPI: string = 'https://cataas.com/api/cats';

export const useCatsStore = defineStore('cats', {
    state: () => {
        return {
            
        }
    },
    actions: {
        getCats(limit: number = 10) {
            
        }
    }
});