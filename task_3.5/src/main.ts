import { createPinia } from 'pinia';
import {createPersistedState} from 'pinia-plugin-persistedstate'
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).use(createPinia()).use(createPersistedState).mount('#app');