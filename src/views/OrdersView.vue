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
        <th v-if="isAdmin">Действия</th>
      </tr>

      <tr v-for="order in orders" :key="order.id" :class="{ approve: isCompleted(order.status) }">
        <td>{{ order.id }}</td>
        <td>{{ order.name }}</td>
        <td>{{ order.address }}</td>
        <td>{{ order.date }}</td>
        <td>{{ order.status }}</td>
        <td>{{ order?.comment }}</td>
        <td v-if="isAdmin">
          <button @click="confirmRemove(order.id)">x</button>
          <button v-if="!isCompleted(order.status)" @click="approveOrder(order)">v</button>
        </td>
      </tr>
    </table>
  </div>
  <base-modal v-if="modalState.show" @close="closeModal" @ok-handler="removeOrder">
    Вы действительно хотите удалить заказ?
  </base-modal>
</template>

<script setup lang="ts">
// Core
import { computed, ComputedRef, onMounted, reactive } from 'vue';
import { useStore } from 'vuex';

// Components
import BaseHeader from '@/components/BaseHeader.vue';
import BaseModal from '@/components/BaseModal.vue';

// ActionTypes
import { OrdersActionTypes } from '@/store/modules/orders/action-types';

// Interfaces
import { Order } from '@/typespaces/interfaces/order.interface';

// Enums
import { OrderStatus } from '@/typespaces/enums/orderStatus.enum';

type ModalType = {
  show: boolean;
  id: number | null;
};

const store = useStore();
const modalState = reactive<ModalType>({
  show: false,
  id: null,
});
const orders: ComputedRef<Order[]> = computed(() => store.getters.getOrders);
const isAdmin: ComputedRef<boolean> = computed(() => store.getters.isAdmin);

const isCompleted = (status: OrderStatus) => status === OrderStatus.COMPLETED;

const approveOrder = (order: Order) => {
  store.dispatch(OrdersActionTypes.APPROVE_ORDER, { ...order, status: OrderStatus.COMPLETED });
};
const removeOrder = () => {
  store.dispatch(OrdersActionTypes.REMOVE_ORDER, modalState.id);
};

const confirmRemove = (id: number) => {
  modalState.id = id;
  modalState.show = true;
};

const closeModal = () => {
  modalState.id = null;
  modalState.show = false;
};

onMounted(() => {
  store.dispatch(OrdersActionTypes.FETCH_ORDERS);
});
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

.approve {
  background: #9fd1a5;
}

.order-table th {
  border: 1px solid;
  padding: 7px 0;
}
</style>
