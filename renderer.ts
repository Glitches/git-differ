import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';

// eslint-disable-next-line no-undef
const versionEl = document.querySelector('#version');
if (versionEl) {
  versionEl.innerHTML = process.versions.electron;
}

// eslint-disable no-console
// tslint:disable-next-line:no-console
console.log(process.version);

Vue.use(VueRouter);

const app = new Vue({
  render: createEle => createEle(App)
}).$mount('#app-container');
