
<template>
    <table id="viewAllTable">
        <input class="buton" type="text" placeholder="name..." v-model="name">
        <input class="buton" type="text" placeholder="job..." v-model="job">
        <input class="buton" type="number" placeholder="age..." v-model="age">
        <input class="btn btn-success" value="Adauga" @click.prevent="addPerson">
    </table>
</template>

<script>
export default {
    name: "ViewAll",
    data(){
        return{
            name:null,
            job:null,
            age:null,
        }
    },
    methods:{
        addPerson(){
            axios.post("/api/adauga", {name:this.name, job:this.job, age:this.age}).then(res =>{
                console.log("Person has been added successfully!");
                this.$router.push({name:'ViewAll'});
            })
        }
    }
}
</script>

<style scoped>
    #viewAllTable{
        display:flex;
        flex-direction: column;
        gap:5px;
        margin: 10px;
        align-items: center;

    }
    #viewAllTable .buton{
        width: 250px;
        outline:none;
        border-radius:5px;
        border:1px solid black;
        background-color: gainsboro;
        padding:5px;
    }
    #viewAllTable input{
        width:150px;
        padding:5px;
    }

</style>
