<template>
    <img :src="url" alt="not found" :width="width + 'px'" :height="height + 'px'">
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        width: {
            type: Number,
            default: 16
        },
        height: {
            type: Number,
            default: 16
        },
        fillColor: {
            type: String,
            default: 'none'
        },
        url: {
            type: String,
            required: true
        }
    }
});
</script>