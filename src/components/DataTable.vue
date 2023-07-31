<template>
    <div>
         
        <h5 class="text-center">Datatble with vue</h5>
        
        <table id="myTable" class="table table-bordered mt-t">
            <thead>
                <th>Id</th>
                <th>UserId</th>
                <th>Title</th>
                <th>Body</th>
                
                <!-- <th>Description</th>
                <th>Title</th> -->
                 
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios';
import $ from 'jquery'
export default {
    mounted(){
        this.getUsers();
    },
    methods:{
        getUsers(){
            axios.get('  https://jsonplaceholder.typicode.com/posts')
            .then(response=>{
                $("#myTable").DataTable({
                    dom: 'Bfrtip',
                    buttons: [
                  'copy', 'excel', 'pdf',"print",'csv'
                       ],
                       paging: true, 
                       pageLength: this.pageLength,
                       lengthMenu: this.pageLengthOptions,
                     
                    data:response.data,
                    // columns:[
                       
                    //    {data:"description"},
                    //    { data:"title"},
                        
                    // ]
                    columns:[
                       { data:"id"},
                       {data:"userId"},
                       {data:"title"},
                       {data:"body"}
                    ]
                })
                console.log(response)
            }).catch(error=>{
                console.log(error.response)
            })
        }
    }
};
</script>
<!-- 'https://post-form-vue-default-rtdb.firebaseio.com/posts.json' -->
<!-- https://jsonplaceholder.typicode.com/posts -->