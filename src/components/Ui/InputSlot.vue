<template>
  <label v-if="isLabelShown" :for="unique">{{ labelName }}:</label>

  <input
    :type="inputType"
    inputmode="numeric"
    :id="unique"
    :value="modelValue"
    :pattern="pattern"
    :placeholder="place"
    @input="handleInput"
    required
    :disabled="isDisabled"
  />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: String,
  place: {
    type: String,
    default: 'Amount',
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  inputType: {
    type: String,
    default: 'number',
    validator: (value) => ['number', 'text', 'password'].includes(value),
  },
  labelName: String,
  isLabelShown: Boolean,

  unique: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

// const inputMode = computed(() => (props.inputType === 'text' ? 'numerice' : undefined))

const pattern = computed(() => (props.inputType === 'text' ? '[0-9]*' : undefined))

function handleInput(e) {
  let value = e.target.value

  if (props.inputType === 'text') {
    value = value.replace(/\D/g, '')
  }

  emit('update:modelValue', value)
}
</script>

<style scoped>
input {
  /* margin: ; */
  width: 55%;
  /* margin-top: 2rem; */
  border: none;
  background-color: rgba(204, 204, 204, 0.4);
  border-radius: 12px;
  font-size: 2.4rem;
  font-family: inherit;
  color: #ccc;
  padding: 1.2rem 2.4rem;
}
input:focus {
  border: none;
  outline: none;
  border-color: #005240;
  box-shadow: 0 0 0 2px rgba(0, 82, 64, 0.2);
}
input::placeholder {
  color: rgba(204, 204, 204, 0.3);
}
label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 2.4rem;
}
</style>
