import { defineStore } from 'pinia';

export interface Cat {
    id: string;
    tags: string[];
    url: string;
    isFavorite: boolean;
}

const catsAPI: string = 'https://cataas.com/api/cats';
const catById: string = 'https://cataas.com/cat';

export const useCatsStore = defineStore('cats', {
    state: () => {
        return {
            cats: [] as Cat[],
            tags: [],
        };
    },
    actions: {
        async getCats(limit: number = 10) {
            const response = await fetch(`${catsAPI}?limit=${limit}`);
            this.cats = await response.json();

            this.cats.forEach((element) => {
                element.url = `${catById}/${element.id}`;
                element.isFavorite = false;
            });

            console.log(this.cats[0]);
        },
    },
});
