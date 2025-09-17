<template>
    <header
        class="header"
        :style="{
            backgroundColor: theme.currentTheme.headerColor,
            borderBottomColor: theme.currentTheme.borderColor,
            color: theme.currentTheme.textColor,
        }"
    >
        <div class="wrapper header-content">
            <div class="header-left_content">
                <Icon :url="theme.currentTheme.logoUrl" :width="64" :height="64"/>
                <SearchBox
                    :theme="theme.currentTheme"
                    :api-store="catsAPI"
                />
            </div>
            <div class="header-right_content">
                <SettingsBox
                    :theme="theme.currentTheme"
                    :api-store="catsAPI"
                />
                <ThemePicker :theme-store="theme" />
            </div>
        </div>
    </header>
    <main
        class="main"
        :style="{
            backgroundColor: theme.currentTheme.bodyColor,
            color: theme.currentTheme.textColor,
        }"
    >
        <Cards
            :api-store="catsAPI"
            :theme="theme.currentTheme"
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
import Icon from './components/Icon.vue';

export default defineComponent({
    components: {
        SearchBox,
        SettingsBox,
        ThemePicker,
        Cards,
        Icon
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
@import url(./assets/css/app.css);
</style>
