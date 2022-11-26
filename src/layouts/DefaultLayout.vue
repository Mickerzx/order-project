<template>
  <div class="layout-content">
    <slot />
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.layout-content {
  border: 1px solid;
  min-height: 100vh;
  background: var(--main-background);
  box-sizing: border-box;
}
</style>
