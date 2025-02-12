<template>
    <input
        type="text"
        class="search-box"
        placeholder="Search by tags"
        v-model="searchInput"
        @change="apiStore.fetchCats()"
        :style="{
            backgroundImage: `url(${themeStore.searchIconUrl})`,
            borderColor: themeStore.borderColor,
            backgroundColor: themeStore.elementColor,
            color: themeStore.textColor,
        }"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            searchInput: ''
        };
    },
    props: {
        themeStore: {
            type: Object,
            required: true,
        },
        apiStore: {
            type: Object,
            required: true,
        },
    },
    watch: {
        searchInput() {
            this.apiStore.searchInput = this.searchInput.split(' ');
        }
    }
});
</script>

<style scoped>
@import url(../assets/css/search_box.css);
</style>
