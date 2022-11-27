<template>
  <div class="input-container">
    <label :for="name">
      <span class="label">{{ label }}</span>
      <input
        :class="[{ error: errorMessage || error }, 'input']"
        :placeholder="placeholder"
        :id="name"
        :name="name"
        v-model="value"
        @input="onInput"
        @focus="onFocus"
        :type="type"
      />
      <span class="error-message">{{ errorMessage }}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { InputEvent } from '@/typespaces/types/input.type';
import { useField } from 'vee-validate';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
  },
  label: {
    type: String,
  },
  type: {
    type: String,
  },
  error: {
    type: Boolean,
  },
});

const emit = defineEmits(['update:value', 'focus']);

const onFocus = () => {
  emit('focus');
};

const { value, errorMessage } = useField(props.name);

const onInput = (event: InputEvent) => {
  emit('update:value', event.target.value);
};
</script>

<style scoped>
.input-container {
  margin: 0 0 24px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.label {
  display: block;
  padding-bottom: 5px;
}

.input {
  padding: 11px 17px;
  border: 1px solid;
  outline: none;
}

.error {
  border-color: red;
}

.error-message {
  color: red;
  display: block;
  position: absolute;
  padding-top: 3px;
  font-size: 13px;
  width: 100%;
  text-align: center;
}
</style>
