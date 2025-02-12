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
            favoritedCats: [] as Cat[],
            isFavorites: false,
            searchInput: [] as String[],
            limit: 10 as Number,
        };
    },
    actions: {
        async fetchCats() {
            const response = await fetch(`${catsAPI}?tags=${this.searchInput}&limit=${this.limit}`);
            this.cats = await response.json();

            this.cats.forEach((element) => {
                element.url = `${catById}/${element.id}`;
                element.isFavorite = false;

                this.favoritedCats.forEach((favoriteCat) => {
                    if (favoriteCat.id === element.id) element.isFavorite = true;
                });
            });
        },
        addFavorite(cat: Cat) {
            this.favoritedCats.push(cat);
            console.log(this.favoritedCats);
        },
        removeFavorite(id: string) {
            this.favoritedCats = this.favoritedCats.filter((cat) => cat.id !== id);
            console.log(this.favoritedCats);
        },
        toggleFavoriteCats() {
            this.isFavorites = !this.isFavorites;

            if (this.isFavorites) {
                this.cats = this.favoritedCats;
            } else {
                this.fetchCats();
            }
        },
    },
});
