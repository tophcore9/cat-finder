<template>
    <div
        class="settings-menu"
        v-if="isSettingsOpened"
    >
        <label class="label">
            Limit:
            <input
                type="number"
                name="limit"
                class="limit"
                placeholder="Count of cats"
                v-model="apiStore.limit"
                @input="apiStore.fetchCats()"
                :style="{
                    borderColor: theme.borderColor,
                    backgroundColor: theme.elementColor,
                    color: theme.textColor,
                }"
            />
        </label>

        <input
            class="favorites"
            :style="{
                borderColor: theme.borderColor,
                backgroundImage: `url(${theme.favoritesCheckedIconUrl})`,
                backgroundColor: theme.elementColor,
            }"
            :checked="apiStore.areFavoriteCardsOn"
            type="checkbox"
            @change="apiStore.toggleFavoriteCats"
        />
    </div>
    <input
        type="checkbox"
        class="settings-box"
        :style="{
            borderColor: isSettingsOpened ? theme.activeColor : theme.borderColor,
            backgroundImage: isSettingsOpened
                ? `url(${theme.settingsActiveIconUrl})`
                : `url(${theme.settingsIconUrl})`,
            backgroundColor: theme.elementColor,
        }"
        @change="openSettings"
    />
</template>

<script lang="ts">
import type { CatsStore } from '@/stores/catsAPI';
import type Theme from '@/stores/theme';
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
    data() {
        return {
            isSettingsOpened: false,
        };
    },
    props: {
        theme: {
            type: Object as PropType<Theme>,
            required: true,
        },
        apiStore: {
            type: Object as PropType<CatsStore>,
            required: true,
        },
    },
    methods: {
        openSettings() {
            /* Showing settings that were hidden */
            this.isSettingsOpened = !this.isSettingsOpened;
        },
    },
});
</script>

<style scoped>
@import url(../assets/css/settings_box.css);
</style>
