<template>
  <div class="header">
    <ul class="menu">
      <li class="menu-item">
        <router-link to="/" class="link"> Все заказы</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/add-order" class="link"> Добавить заказ</router-link>
      </li>
    </ul>
    <div>
      <span class="user">{{ user.name }}</span>
      <button class="exit-button" @click="logOutHandler">Выход</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { computed, ComputedRef } from 'vue';
import { User } from '@/typespaces/interfaces/user.interface';
import { AuthActionTypes } from '@/store/modules/auth/action-types';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const user: ComputedRef<User> = computed(() => store.getters.getCurrentUser);

const logOutHandler = () => {
  store.dispatch(AuthActionTypes.LOG_OUT).then(() => {
    router.push({ name: 'Auth' });
  });
};
</script>

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
