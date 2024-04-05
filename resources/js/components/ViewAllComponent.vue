<template>
    <table>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Job</th>
            <th>Age</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
        <tr v-for="p in people">
            <td>{{p.id}}</td>
            <td><router-link :to="{name:'PersonsPage', params:{id:p.id}}">{{p.name}}</router-link></td>
            <td>{{p.job}}</td>
            <td>{{p.age}}</td>
            <td><router-link :to="{name:'Edit', params:{id:p.id}}">Edit</router-link> </td>
            <td><button @click.prevent="$store.dispatch('deletePerson', p.id)">Delete</button> </td>

        </tr>
    </table>
</template>

<script>
export default {
    name: "TagComponent",
    computed:{
        people(){
            return this.$store.getters.people;
        }
    },
    mounted() {
        this.$store.dispatch('selectAll');
    },


}
</script>


<style scoped>
table td, th{
    padding: 10px;
    border: 1px solid black;

}
table {
    margin: auto;
    border: 1px solid black;
    width: 600px;
    font-family: "Times New Roman";
}
table th{
    text-align:center;
    font-size: 16px;
}
table tr:hover {
    background-color: #dedede;

}
table button{
    border:none;
    background-color:transparent;
    color:blue;
    padding:10px;
}
table button:hover{
    background-color: #f69898;
    transition: 1s linear;
    border-radius:5px;

}
</style>
