import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router/index.js'


const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App).use(router);
// app.config.globalProperties.$http = axios;

app.use(router);
app.use(vuetify);
app.mount("#app");