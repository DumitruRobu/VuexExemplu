<template>
    <div>
        <router-link :to="{name:'Add'}">Add</router-link>
        <router-link :to="{name:'ViewAll'}">View all</router-link>

    </div>
    <router-view></router-view>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style scoped>
 div {
     display:flex;
     gap:20px;
     justify-content: center;
 }
 div a {
     text-decoration: none;
     font-size: 25px;
     margin-bottom: 20px;
 }
 div a:hover{
     text-decoration: underline;
 }
</style>
