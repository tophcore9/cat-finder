<template>
    <div
        class="card"
        :style="{ borderColor: themeStore.borderColor, backgroundColor: themeStore.elementColor }"
    ></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        themeStore: {
            type: Object,
            required: true,
        },
    },
});
</script>

<style scoped>
.card {
    min-height: 325px;

    border-width: 1px;
    border-style: solid;
    border-radius: 8px;
    
    opacity: 0.5;
}
</style>