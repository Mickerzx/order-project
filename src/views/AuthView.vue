<template>
  <div class="wrapper">
    <div class="container">
      <input />
      <input />
      <button>Войти</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrapper {
  display: flex;
  min-height: 100vh;
  border: 1px solid green;
  box-sizing: border-box;
}

.container {
  width: 344px;
  height: 245px;
  background: var(--auth-background);
  margin: auto auto auto 49px;
  box-sizing: border-box;
}
</style>
