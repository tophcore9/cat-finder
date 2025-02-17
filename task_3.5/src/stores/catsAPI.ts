import { defineStore } from 'pinia';

export interface Cat {
    id: string;
    tags: string[];
    url: string;
    isFavorite: boolean;
}

interface CatsState {
    cats: Cat[] /* An array of cats that will be shown */;
    favoriteCats: Cat[] /* Cats that we're already added to the favorite list */;
    areFavoriteCardsOn: boolean /* Check if site shows only favorite cats at the moment */;
    searchInput: string[] /* Amount of tags that build a search prompt together */;
    limit: number /* How many cards from API the user wants to get */;
}

export interface CatsStore extends CatsState {
    fetchCats: () => void;
    addFavorite: (cat: Cat) => void;
    removeFavorite: (id: string) => void;
    toggleFavoriteCats: () => void;
}

enum CatsAPI {
    getList = 'https://cataas.com/api/cats',
    getById = 'https://cataas.com/cat',
}

export const useCatsStore = defineStore('cats', {
    state: (): CatsState => {
        return {
            cats: [],
            favoriteCats: [],
            areFavoriteCardsOn: false,
            searchInput: [],
            limit: 10,
        }
    },
    actions: {
        async fetchCats() {
            /* Fetching API and getting according items */
            const response = await fetch(`${CatsAPI.getList}?tags=${this.searchInput}&limit=${this.limit}`);
            this.cats = await response.json();
            this.areFavoriteCardsOn = false;

            this.cats.forEach((element) => {
                element.url = `${CatsAPI.getById}/${element.id}`;
                element.isFavorite = false;

                this.favoriteCats.forEach((favoriteCat) => {
                    if (favoriteCat.id === element.id) element.isFavorite = true;
                });
            });
        },
        addFavorite(cat: Cat) {
            /* Add a cat as one from favorites */
            this.favoriteCats.push(cat);
        },
        removeFavorite(id: string) {
            /* Remove a cat from the favorite collection */
            this.favoriteCats = this.favoriteCats.filter((cat) => cat.id !== id);
        },
        toggleFavoriteCats() {
            /* Toggling button for showing only favorites */
            this.areFavoriteCardsOn = !this.areFavoriteCardsOn;

            if (this.areFavoriteCardsOn) {
                this.cats = this.favoriteCats;
            } else {
                this.fetchCats();
            }
        },
    },
});
