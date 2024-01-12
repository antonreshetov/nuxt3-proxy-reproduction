<template>
  <div>
    <h1>Home</h1>
    {{ data }}
  </div>
</template>

<script setup lang="ts">
const { data } = useCustomFetch('/posts')
</script>