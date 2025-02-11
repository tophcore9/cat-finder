<template>
    <header
        class="header"
        :style="{ backgroundColor: theme.headerColor, borderBottomColor: theme.borderColor }"
    >
        <div class="wrapper block header-content">
            <div class="header-sub_content">
                <img
                    :src="theme.logoUrl"
                    alt="Logo not found"
                />
                <SearchBox :theme-store="theme"/>
                <SettingsBox :theme-store="theme"/>
            </div>
            <ThemePicker :theme-store="theme" />
        </div>
    </header>
    <main
        class="main"
        :style="{ backgroundColor: theme.bodyColor }"
    >
        <Cards :theme-store="theme"/>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useThemeStore } from '@/stores/theme';
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
            cards: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        };
    },
    methods: {},
});
</script>

<style>
@import url(./assets/css/main.css);
</style>
