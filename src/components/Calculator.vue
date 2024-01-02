<template>
  <div class="container mt-5">
    <InputField v-model="num1" label="Número 1" @input="calcularResultado" />
    <SelectOperator v-model="operator" @input="calcularResultado" />
    <InputField v-model="num2" label="Número 2" @input="calcularResultado" />
    <div class="mt-3">
      <strong>Resultado:</strong> {{ resultado }}
    </div>
  </div>
</template>

<script>
import InputField from './InputField.vue';
import SelectOperator from './SelectOperator.vue';

export default {
  components: {
    InputField,
    SelectOperator,
  },
  data() {
    return {
      num1: 0,
      num2: 0,
      operator: '+',
    };
  },
  computed: {
    resultado() {
      const n1 = parseFloat(this.num1);
      const n2 = parseFloat(this.num2);

      console.log('num1:', n1);
      console.log('num2:', n2);
      console.log('operador:', this.operator);

      switch (this.operator) {
        case '+':
          return n1 + n2;
        case '-':
          return n1 - n2;
        case '*':
          return n1 * n2;
        case '/':
          return n1 / n2;
        default:
          return 0;
      }
    },
  },
  methods: {
    calcularResultado() {
      
    },
  },
};
</script>
