<template>
    <nav>
       
      <ul>
        <li class="nav-item"  >
              <router-link class="nav-item" to="/signup" v-if="!isAuthenticated">SignUp</router-link>
        </li>
        <li class="nav-item"  >
              <router-link class="nav-item" to="/login" v-if="!isAuthenticated">Login</router-link>
        </li>
        <li class="nav-item"  >
              <router-link class="nav-item" to="/post-details" v-if="isAuthenticated">Post Details</router-link>
        </li>
        <li class="nav-item"  >
              <router-link class="nav-item" to="/data-table" v-if="isAuthenticated">DataTables</router-link>
        </li>
        <li @click="toggleDropdown('authorize')" v-if="isAuthenticated">
          <a class="nav-item" :class="{ 'link-active': isActiveDropdown('authorize') }">Authorize <span><i class="fa fa-caret-down" aria-hidden="true"></i></span></a>
          <ul class="dropdown-menu" :class="{ 'show': dropdown === 'authorize' }">
            <li><router-link to="/authorise/dp-creation">DP Creation</router-link></li>
            <li><router-link to="/authorise/dp-list">DP List</router-link></li>
            <li><router-link to="/authorise/contact-creation">Contact Creation</router-link></li>
            <li><router-link to="/authorise/contact-list">Contact List</router-link></li>
          </ul>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
                    <a
                        href="#"
                        class="nav-link"
                        @click.prevent="onLogout()"
                        >Logout</a
                    >
                </li>
      </ul>
    </nav>
    <router-view></router-view>
  </template>
  
  <script>
  import { IS_USER_AUTHENTICATE_GETTER , LOGOUT_ACTION, } from '../store/storeconstants';
  import { mapGetters ,mapActions,} from 'vuex';
  export default {
    data() {
      return {
        dropdown: null,
      };
    },
    computed: {
        ...mapGetters('auth', {
            isAuthenticated: IS_USER_AUTHENTICATE_GETTER,
        }),
    },
    methods: {
     
      toggleDropdown(menu) {
        if (this.dropdown === menu) {
          this.dropdown = null;
        } else {
          this.dropdown = menu;
        }
      },
      isActive(route) {
        return this.$route.path === route;
      },
      isActiveDropdown(menu) {
        return this.dropdown === menu;
      },

      ...mapActions('auth', {
            logout: LOGOUT_ACTION,
            
        }),
        onLogout() {
            this.logout();
            this.$router.replace('/login');
        },
      
    },
  };
  </script>
  
  <style scoped>
  nav {
    background: linear-gradient(#3AA0D4 10%, #0B6A9D 90%);
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 20px;
  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  
  li {
    display: inline;
    margin-right: 10px;
    position: relative;
    padding: 10px;
    color: #37517e;
  }
  
  a {
    text-decoration: none;
    color: #37517e;
  }
  
  .nav-item {
    color: white;
    padding-bottom: 10px;
  }
  
  .dropdown-menu {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    width: 150px;
    height: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    top: 100%;
    left: 0;
  }
  
  .dropdown-menu li {
    display: block;
  }
  
  .show {
    display: block;
  }
  
  .link-active {
    color:white;
     
    position: relative;
  }
  
  .link-active::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: white;
  }
  
  .image {
    height: 50px;
    width: 150px;
  }
  </style>
  