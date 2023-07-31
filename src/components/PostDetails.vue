<template>
    <div>
        <h2>Post Details</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in postDetails" :key="post.id">
                    <td>{{ post.id }}</td>
                    <td>{{ post.title }}</td>
                    <td>{{ post.description }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

//import axios from 'axios';
import axiosInstance from '@/services/AxiosTokenInstance';
export default {
    data() {
        return {
            postDetails: [],
        };
    },
    mounted() {
        this.getPostDetails();
    },

    methods: {
        getPostDetails() {
            axiosInstance .get(
                `  https://post-form-vue-default-rtdb.firebaseio.com/posts.json  `,
                
                 
            ).then((response) => {
                this.formatPostDetails(response.data);
            });
        },
        formatPostDetails(posts) {
            for (let key in posts) {
                this.postDetails.push({ ...posts[key], id: key });
            }
            console.log(this.postDetails);
        },
    },
};
</script>

<!-- https://vue-form-auth-default-rtdb.firebaseio.com/posts.json -->