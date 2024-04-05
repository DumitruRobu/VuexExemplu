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

    mounted(){
        this.$store.dispatch('getPerson', this.$route.params.id);
    },
    computed:{
        person(){
            return this.$store.getters.person
        }
    }

}
</script>


<style scoped>

</style>
