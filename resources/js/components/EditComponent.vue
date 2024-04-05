<template>
    <div id="mainEditDiv" v-if="person">
        <input type="text" placeholder="name..." v-model="person.name">
        <input type="text" placeholder="job..." v-model="person.job">
        <input type="number" placeholder="age..." v-model="person.age">

        <div id="subEditDiv">

            <router-link :to="{name:'PersonsPage', params:{id:person.id}}" class="btn btn-warning">Back</router-link>
            <input class="btn btn-success" value="Update"
                   @click.prevent="$store.dispatch('editPerson', {id:person.id, name:person.name, age:person.age, job:person.job})">

        </div>
    </div>
</template>

<script>
export default {
    name: "EditComponent",
    mounted() {
        this.$store.dispatch('getPerson', this.$route.params.id)
    },
    computed: {
        person() {
            return this.$store.getters.person;
        }
    },

}
</script>

<style scoped>
    #mainEditDiv{
        display:flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
        margin:auto;
    }
    #mainEditDiv input{
        width:300px;
    }
    #subEditDiv{
        display:flex;
        width:150px;
        gap:10px;
    }
    #subEditDiv input{
        width: 100px;
    }
</style>


<!--public function __invoke(EditPersonRequest $request, $id)-->
<!--{-->
<!--$data = $request->validated();-->
<!--$person = Employee::findOrFail($id);-->
<!--$person->update($data);-->
<!--return $person;-->
<!--}-->
