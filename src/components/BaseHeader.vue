<template>
  <div class="header">
    <ul class="menu">
      <li class="menu-item">
        <router-link to="/" class="link"> Все заказы </router-link>
      </li>
      <li class="menu-item">
        <router-link to="/" class="link"> Добавить заказ </router-link>
      </li>
    </ul>
    <div>
      <span class="user">Имя Фамилие</span>
      <button class="exit-button">Выход</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  background: #165996;
  padding: 12px 15px 12px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
}

.menu-item {
  margin-right: 36px;
}

.link {
  text-decoration: none;
  color: #fff;
}

.user {
  padding-right: 28px;
}

.exit-button {
  padding: 6px 20px;
  background: #d9d9d9;
  cursor: pointer;
  border: none;
}
</style>
