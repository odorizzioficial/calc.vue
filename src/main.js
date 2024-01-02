import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue';
import App from './App.vue';
import Calculator from './components/Calculator.vue';
import InputField from './components/InputField.vue';
import SelectOperator from './components/SelectOperator.vue';

const app = createApp(App);

app.component('Calculator', Calculator);
app.component('InputField', InputField);
app.component('SelectOperator', SelectOperator);

app.mount('#app');
