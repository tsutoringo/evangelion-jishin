import Vue from 'vue';
import App from './App.vue';
import vueMoment from 'vue-moment';
import moment from 'moment';
moment.locale('ja');

import { EvaDengerBorder, EvaCutCard, EvaSideTitle, EvaNormalTitle, EvaBadge } from './components/evangelion/index';

import './components/evangelion/default.css'

Vue.config.productionTip = false;

Vue.use(vueMoment,{moment});

Vue.component('eva-denger-border', EvaDengerBorder);
Vue.component('eva-cut-card', EvaCutCard);
Vue.component('eva-side-title', EvaSideTitle);
Vue.component('eva-normal-title', EvaNormalTitle);
Vue.component('eva-badge', EvaBadge)

new Vue({
  render: h => h(App),
}).$mount('#app');
