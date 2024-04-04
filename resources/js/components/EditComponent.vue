<template>
    <table v-if="person" id="editTable">
        <input class="buton" type="text" placeholder="name..." v-model="person.name">
        <input class="buton" type="text" placeholder="job..." v-model="person.job">
        <input class="buton" type="number" placeholder="age..." v-model="person.age">
        <div>
            <button><router-link :to="{name:'ViewAll'}">Back</router-link></button>
            <button @click.prevent="editPerson">Edit</button>
        </div>

    </table>
</template>

<script>
export default {
    name: "EditComponent",
    data(){
        return {
               person:null,
        }
    },
    mounted(){
        this.getPerson();
    },
    methods:{
        getPerson(){
            axios.get(`/api/getPerson/${this.$route.params.id}`).then(res =>{
                this.person = res.data.data;
            })
        },
        editPerson(){
            axios.post(`/api/editPerson/${this.person.id}`,
                {name:this.person.name, job:this.person.job, age:this.person.age}).then(res =>{
                    console.log("Person has been successfully edited!");
                    this.$router.push({name:'ViewAll'});

            })
        }
    }
}
</script>


<style scoped>
#editTable{
    display:flex;
    flex-direction: column;
    gap:5px;
    align-items:center;


}
#editTable button{
    width: 80px;
    margin:10px;
    outline:none;
    border-radius:5px;
    border:1px solid black;
    padding:5px;
    background-color: #d4d454;
}
#editTable button:hover{
    background-color: #39ad39;
    transition: 1s linear;
    color:white;
}
#editTable input{
    width:250px;
    padding:5px;
    background-color: gainsboro;
    outline:none;
    border: 1px solid black;
    border-radius:5px;
}

</style>
