import { createApp } from 'vue';
import App from './App.vue';

 import AuthoriseComp from './components/AuthoriseComp.vue'
 import ContactCreation from './components/ContactCreation.vue'
 import ContactList from './components/ContactList.vue'
 import DpCreation from './components/DpCreation.vue'
 import DpList from './components/DpList.vue'
 import LoginPage from './pages/LoginPage.vue'
 import SignupPage from './pages/SignupPage.vue'
 import PostDetails from './components/PostDetails.vue'
import { createRouter, createWebHistory } from 'vue-router';
import store from './store/store';
import { IS_USER_AUTHENTICATE_GETTER } from './store/storeconstants';
 //import { createStore } from 'vuex';
import 'jszip';
import  'pdfmake';
 
//import DataTable from 'datatables.net-bs4';
import 'datatables.net-buttons-bs4';
import 'datatables.net-bs4';

import 'datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js'
import 'datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css'
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css'
import 'datatables.net-buttons/js/buttons.colVis.js';
import 'datatables.net-buttons/js/buttons.html5.js';
import 'datatables.net-buttons/js/buttons.print.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import DataTable from './components/DataTable.vue'
const routes = [
    { path: '/login', component: LoginPage ,meta: { auth: false }  },
    { path: '/signup', component: SignupPage ,meta: { auth: false } },
    { path: '/post-details', component: PostDetails ,meta: { auth: true } },
    { path: '/data-table', component: DataTable,meta: { auth: true }  },
    {
        path: '/',
        redirect: '/signup',
    },
    {
        path: '/authorise/dp-creation',
        component: AuthoriseComp,meta: { auth: true } ,
        children: [
            { path: '/authorise/dp-creation', component: DpCreation ,meta: { auth: true }},
            { path: '/authorise/dp-list', component: DpList ,meta: { auth: true}},
            { path: '/authorise/contact-creation', component: ContactCreation ,meta: { auth: true }},
            { path: '/authorise/contact-list', component: ContactList ,meta: { auth: true }},
        ],
    },

     

     
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
     
});

// const store = createStore({
//     state() {
//         return {
//             count: 2,
//         };
//     },
// });

router.beforeEach((to,from,next) => {
    console.log(to);
    if (
        'auth' in to.meta &&
        to.meta.auth &&
        !store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]
    ) {
        next('/login');
    } else if (
        'auth' in to.meta &&
        !to.meta.auth &&
        store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]
    ) {
        next('/authorise/dp-creation');
    } else {
        next();
    }
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');


// router.beforeEach((to, from, next) => {
//     // Step 1: Check if the 'auth' meta property exists in the destination route
//     if ('auth' in to.meta) {
//         // Step 2: Check if the 'auth' meta property is set to true
//         if (to.meta.auth) {
//             // Step 3: Check if the user is not authenticated (IS_USER_AUTHENTICATE_GETTER is false)
//             if (!store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]) {
//                 // Step 4: If the route requires authentication but the user is not authenticated,
//                 // redirect the user to the login page
//                 next('/login');
//             } else {
//                 // Step 5: If the user is authenticated and the route requires authentication,
//                 // allow the user to proceed to the destination route
//                 next();
//             }
//         } else {
//             // Step 6: If the 'auth' meta property is set to false (route doesn't require authentication),
//             // Check if the user is already authenticated (IS_USER_AUTHENTICATE_GETTER is true)
//             if (store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]) {
//                 // Step 7: If the route doesn't require authentication, but the user is authenticated,
//                 // redirect the user to the 'dp-creation' page
//                 next('/authorise/dp-creation');
//             } else {
//                 // Step 8: If the user is not authenticated and the route doesn't require authentication,
//                 // allow the user to proceed to the destination route
//                 next();
//             }
//         }
//     } else {
//         // Step 9: If the destination route does not have a 'meta' property related to authentication,
//         // allow the user to proceed to the destination route (no authentication check needed)
//         next();
//     }
// });
