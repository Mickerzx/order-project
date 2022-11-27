<template>
  <div class="wrapper">
    <div class="container">
      <Form @submit="onSubmit" class="form" :validation-schema="authSchema">
        <span v-if="httpError" class="error">Не верный логин или пароль</span>
        <form-item :error="httpError" placeholder="username" name="user" v-model:value="values.user" />
        <form-item
          :error="httpError"
          type="password"
          placeholder="password"
          name="password"
          v-model:value="values.password"
        />
        <button class="button" type="submit">Войти</button>
      </Form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm, Form } from 'vee-validate';
import FormItem from '@/components/FormItem.vue';
import { ref, watch } from 'vue';
import { authSchema } from '@/validationSchemas/auth.schema';
import { useStore } from 'vuex';
import { AuthActionTypes } from '@/store/modules/auth/action-types';
import { useRouter } from 'vue-router';

const httpError = ref(false);
const router = useRouter();
const store = useStore();
const { values } = useForm({
  initialValues: {
    user: '',
    password: '',
  },
});

watch(
  () => values,
  () => {
    httpError.value = false;
  },
  { deep: true }
);

const onSubmit = () => {
  store
    .dispatch(AuthActionTypes.SIGN_IN, { ...values })
    .then(() => {
      router.push({ name: 'home' });
    })
    .catch(() => {
      httpError.value = true;
    });
};
</script>

<style scoped>
.wrapper {
  display: flex;
  min-height: 100vh;
  box-sizing: border-box;
}

.container {
  width: 344px;
  height: 245px;
  background: var(--auth-background);
  margin: auto;
}

.form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.button {
  padding: 5px 34px 9px;
  background: #fff;
  border: none;
  cursor: pointer;
}

.error {
  color: red;
  top: 20px;
  position: absolute;
}
</style>
