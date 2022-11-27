<template>
  <div>
    <base-header />
    <table class="order-table">
      <tr>
        <th>№</th>
        <th>Имя клиента</th>
        <th>Адрес</th>
        <th>Дата заказа</th>
        <th>Статус</th>
        <th>Комментарий</th>
        <th>Действия</th>
      </tr>

      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.address }}</td>
        <td>{{ user.date }}</td>
        <td>{{ user.status }}</td>
        <td>{{ user.comment }}</td>
        <td>
          <button>x</button>
          <button>v</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader.vue';

const users = [
  {
    id: 123,
    name: 'Иван Иванов',
    address: 'Самара, проспект Ленина, 26-25',
    date: '05 февраля 2022',
    status: 'Выполнен',
    comment: 'доставить до 18:00',
  },
  {
    id: 456,
    name: 'Петр Петров',
    address: 'Москва, проспект Московский, д.100 кв.1',
    date: '11 июля 2022',
    status: 'Выполнен',
    comment: 'нет домофона',
  },
  {
    id: 789,
    name: 'Степан Степанов',
    address: 'Екатеринбург, улица Челюскинцев, 222',
    date: '11 июля 2022',
    status: 'Выполнен',
    comment: 'нет домофона',
  },
];
</script>

<style scoped>
.order-table {
  border-collapse: collapse;
  width: 100%;
  border: 1px solid;
  text-align: center;
  margin-top: 80px;
  font: var(--regular);
  word-break: break-all;
}

.order-table td {
  border: 1px solid;
  padding: 13px 5px;
  word-wrap: break-word;
}

.order-table th {
  border: 1px solid;
  padding: 7px 0;
}
</style>
