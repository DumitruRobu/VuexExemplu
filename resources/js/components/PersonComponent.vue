<template>
    <div v-if="person">
        <p>Name: {{person.name}}</p>
        <p>Job: {{person.job}}</p>
        <p>Age: {{person.age}}</p>
        <p><router-link :to="{name:'ViewAll'}">Back</router-link> </p>
    </div>
</template>

<script>
export default {
    name: "PersonComponent",
    data(){
        return {
            person:null,
        }
    },
    mounted(){
        this.getPerson()
    },
    methods:{
        getPerson(){
            axios.get(`/api/getPerson/${this.$route.params.id}`).then(res =>{
                this.person = res.data.data;
            })
        }
    }

}
</script>


<style scoped>

</style>
