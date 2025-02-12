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
            cats: [] as Cat[], /* An array of cats that will be shown */
            favoriteCats: [] as Cat[], /* Cats that we're already added to the favorite list */
            isFavorites: false,
            searchInput: [] as String[],
            limit: 10 as Number,
        };
    },
    actions: {
        async fetchCats() {
            const response = await fetch(`${catsAPI}?tags=${this.searchInput}&limit=${this.limit}`);
            this.cats = await response.json();
            this.isFavorites = false;

            this.cats.forEach((element) => {
                element.url = `${catById}/${element.id}`;
                element.isFavorite = false;

                this.favoriteCats.forEach((favoriteCat) => {
                    if (favoriteCat.id === element.id) element.isFavorite = true;
                });
            });
        },
        addFavorite(cat: Cat) {
            this.favoriteCats.push(cat);
        },
        removeFavorite(id: string) {
            this.favoriteCats = this.favoriteCats.filter((cat) => cat.id !== id);
        },
        toggleFavoriteCats() {
            this.isFavorites = !this.isFavorites;

            if (this.isFavorites) {
                this.cats = this.favoriteCats;
            } else {
                this.fetchCats();
            }
        },
    },
});
