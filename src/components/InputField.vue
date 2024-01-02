<template>
  <div class="form-group">
    <label :for="inputId">{{ label }}</label>
    <input :id="inputId" :value="value" :type="type" @input="updateValue($event.target.value)" class="form-control"
      :placeholder="placeholder" />
    <div v-if="errorMessage" class="text-danger">{{ errorMessage }}</div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: String,
    errorMessage: String,
  },
  computed: {
    inputId() {
      return 'input-' + Math.random().toString(36).substr(2, 9);
    },
  },
  methods: {
    updateValue(newValue) {
      console.log('InputField value:', newValue);
      this.$emit('input', newValue);
    },
  },
};
</script>
