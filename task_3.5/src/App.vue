<template>
    <header
        class="header"
        :style="{ backgroundColor: theme.headerColor, borderBottomColor: theme.borderColor, color: theme.textColor }"
    >
        <div class="wrapper header-content">
            <div class="header-left_content">
                <img
                    class="logo"
                    :src="theme.logoUrl"
                    alt="Logo not found"
                />
                <SearchBox :theme-store="theme" :api-store="catsAPI"/>
            </div>
            <div class="header-right_content">
                <SettingsBox :theme-store="theme" :api-store="catsAPI"/>
                <ThemePicker :theme-store="theme" />
            </div>
        </div>
    </header>
    <main
        class="main"
        :style="{ backgroundColor: theme.bodyColor, color: theme.textColor }"
    >
        <Cards
            :api-store="catsAPI"
            :theme-store="theme"
            :items="catsAPI.cats"
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
            catsAPI: useCatsStore(),
        };
    },
    mounted() {
        this.catsAPI.fetchCats();
    },
});
</script>

<style>
@import url(./assets/css/main.css);
</style>
