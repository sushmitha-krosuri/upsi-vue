<template>
    <div>
        <h2>Posts Details</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post.id">
                    <td>{{ post.id }}</td>
                    <td>{{ post.title }}</td>
                    <td>{{ post.description }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
//import axiosInstance from '../services/AxiosTokenInstance';
 
import { mapGetters  } from 'vuex';
import {
    GET_USER_TOKEN_GETTER,
     
} from '../store/storeconstants';
//import axios from 'axios';
import axiosInstance from '@/services/AxiosTokenInstance';
export default {
    data() {
        return {
            posts: [],
        };
    },
    computed: {
        ...mapGetters('auth', {
            token: GET_USER_TOKEN_GETTER,
        }),
    },
    mounted() {
       
        
            axiosInstance.get(`  https://vue-form-auth-default-rtdb.firebaseio.com/posts.json`)
            .then((response) => {
                this.formatPosts(response.data);
                 
            })
            .catch(() => {
                
            });
    },
    methods: {
        
        formatPosts(posts) {
            for (let key in posts) {
                this.posts.push({ ...posts[key], id: key });
            }
            console.log(this.posts);
        },
    },
};
</script>

<style scoped></style>