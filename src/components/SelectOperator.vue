<template>
  <div class="form-group">
    <label>{{ label || 'Operação' }}</label>
    <select v-model="selectedOperator" class="form-control">
      <option v-for="operator in operators" :key="operator">{{ operator }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String, 
  },
  data() {
    return {
      operators: ['+', '-', '*', '/'],
    };
  },
  computed: {
  selectedOperator: {
    get() {
      console.log('SelectOperator value:', this.$props.value);
      return this.$props.value;
    },
    set(value) {
      console.log('SelectOperator set:', value);
      this.$emit('input', value);
    },
  },
},
};
</script>
