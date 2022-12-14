import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
// import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: `
            @import "@/scss/_variables.scss";
            @import "@/scss/_mixins.scss";
          `
        }
      }
    }
  };
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)