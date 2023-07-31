<template>
    <div>
      <h3>Create Post</h3>
      <form @submit.prevent="onCreatePost">
        <div class="form-group">
          <label>Title</label>
          <input
            type="text"
            class="form-control"
            v-model="postData.title"
            @blur="validateField('title')"
          />
          <span v-if="errors.title" class="text-danger">{{ errors.title }}</span>
        </div>
        <div class="form-group">
          <label>Description</label>
          <textarea
            class="form-control"
            v-model="postData.description"
            @blur="validateField('description')"
          ></textarea>
          <span v-if="errors.description" class="text-danger">{{ errors.description }}</span>
        </div>
        <div>
          <button type="submit" class="btn btn-primary">Create Post</button>
        </div>
      </form>
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
    </div>
    
    
  </template>
  
  <script>
  import Axios from 'axios';
   
  export default {
    data() {
      return {
        postData: {
          title: '',
          description: '',
           
        },
        postDetails: [],
        errors: {
          title: '',
          description: '',
        },
         
         
      };
    },
    mounted() {
        this.getPostDetails();
    },
    methods: {
      onCreatePost() {
        // Reset errors
        this.errors.title = '';
        this.errors.description = '';
  
        // Perform validations
        if (!this.postData.title) {
          this.errors.title = 'Title is required.';
        }
  
        if (!this.postData.description) {
          this.errors.description = 'Description is required.';
        }
  
        // Check if there are any errors
        if (this.errors.title || this.errors.description) {
          return; // Don't submit the form if there are errors
        }
  
        Axios.post(' https://vue-form-auth-default-rtdb.firebaseio.com/posts.json', this.postData)
          .then((response) => {
            console.log(response);
             
          });
      },
      getPostDetails() {
            Axios.get(
                ` https://vue-form-auth-default-rtdb.firebaseio.com/posts.json`,
                
                 
            ).then((response) => {
                this.formatPostDetails(response.data);
            });
        },
        formatPostDetails(posts1) {
            for (let key in posts1) {
                this.postDetails.push({ ...posts1[key], id: key });
            }
            console.log(this.postDetails);
        },
      validateField(field) {
        // Reset the specific field error
        this.errors[field] = '';
  
        // Perform field-specific validation
        if (field === 'title' && !this.postData.title) {
          this.errors.title = 'Title is required.';
        }
  
        if (field === 'description' && !this.postData.description) {
          this.errors.description = 'Description is required.';
        }
      },
    },
  };
  </script>