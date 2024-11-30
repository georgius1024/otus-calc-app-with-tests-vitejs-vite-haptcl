<script setup>
const props = defineProps(['char']);
const emits = defineEmits(['click']);
</script>
<template>
  <button :data-testid="`btn-${char}`" @click="emits('click', char)">
    {{ char }}
  </button>
</template>
