<template>
  <label v-if="isLabelShown">{{ labelName }}:</label>

  <input
    :type="inputType"
    inputmode="numeric"
    pattern="[0-9]*"
    :placeholder="place"
    @input="handleInput"
    required
  />
</template>

<script setup>
const props = defineProps({
  place: {
    type: String,
    default: 'Amount',
  },
  inputType: {
    type: String,
    default: 'text',
    validator: (value) => ['text', 'password'].includes(value),
  },
  labelName: String,
  isLabelShown: Boolean,
})

function handleInput(e) {
  if (props.inputType === 'text') {
    e.target.value = e.target.value.replace(/\D/g, '')
  }
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
