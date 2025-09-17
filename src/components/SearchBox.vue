<template>
    <input
        type="text"
        class="search-box"
        placeholder="Search by tags"
        v-model="searchInput"
        @change="apiStore.fetchCats()"
        :style="{
            backgroundImage: `url(${theme.searchIconUrl})`,
            borderColor: theme.borderColor,
            backgroundColor: theme.elementColor,
            color: theme.textColor,
        }"
    />
</template>

<script lang="ts">
import type { CatsStore } from '@/stores/catsAPI';
import type Theme from '@/stores/theme';
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
    data() {
        return {
            searchInput: '',
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
    watch: {
        searchInput() {
            /* Handling a search input field for the proper sending it to API in advance */
            this.apiStore.searchInput = this.searchInput.split(' ');
        },
    },
});
</script>

<style scoped>
@import url(../assets/css/search_box.css);
</style>
