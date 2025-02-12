<template>
    <header
        class="header"
        :style="{ backgroundColor: theme.headerColor, borderBottomColor: theme.borderColor, color: theme.textColor }"
    >
        <div class="wrapper block header-content">
            <div class="header-sub_content">
                <img
                    :src="theme.logoUrl"
                    alt="Logo not found"
                />
                <SearchBox :theme-store="theme" :api-store="cats"/>
                <SettingsBox :theme-store="theme" :api-store="cats"/>
            </div>
            <ThemePicker :theme-store="theme" />
        </div>
    </header>
    <main
        class="main"
        :style="{ backgroundColor: theme.bodyColor, color: theme.textColor }"
    >
        <Cards
            :api-store="cats"
            :theme-store="theme"
            :items="cats.cats"
        />
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useThemeStore } from '@/stores/theme';
import { useCatsStore } from '@/stores/catsAPI';
import ThemePicker from './components/ThemePicker.vue';
import Cards from './components/Cards.vue';
import SettingsBox from './components/SettingsBox.vue';
import SearchBox from './components/SearchBox.vue';

export default defineComponent({
    components: {
        SearchBox,
        SettingsBox,
        ThemePicker,
        Cards,
    },
    data() {
        return {
            theme: useThemeStore(),
            cats: useCatsStore(),
        };
    },
    mounted() {
        this.cats.fetchCats();
    },
});
</script>

<style>
@import url(./assets/css/main.css);
</style>
