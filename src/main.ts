import { createApp } from 'vue'
import App from './App.vue'
import VueSelect from 'vue-next-select'
import 'vue-next-select/dist/index.min.css'
import '@/assets/scss/main.scss'

const app = createApp(App);
app.component('VueSelect', VueSelect);

app.mount('#app');
