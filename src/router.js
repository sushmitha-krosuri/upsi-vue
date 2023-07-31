import Vue from 'vue';
import VueRouter from 'vue-router';

import DPCreateComponent from './components/authorise/dpcreate/DPCreateComponent.vue';
import DPListComponent from './components/authorise/dplist/DPListComponent.vue';
import ContactCreateComponent from './components/authorise/contact-create/ContactCreateComponent.vue';
import ContactListComponent from './components/authorise/contact-list/ContactListComponent.vue';

Vue.use(VueRouter);

 
const routes = [
         
  { path: '/authorise/dp-creation', component: DPCreateComponent },
  { path: '/authorise/dp-list', component: DPListComponent },
  { path: '/authorise/contact-creation', component: ContactCreateComponent },
  { path: '/authorise/contact-list', component: ContactListComponent },
   
];

 
const router = new VueRouter({
  routes,
   
});

export default router;
