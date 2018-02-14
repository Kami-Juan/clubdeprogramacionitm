<template>
    <transition  name="fade" mode="out-in">
        <router-view></router-view>
    </transition>    
</template>

<script>
    export default {

    }
</script>

<style>
    .fade-enter-active {
        transition: opacity .5s;        
    }
    .fade-enter /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    .fade-leave-active{
        transition: opacity .5s;  
        opacity: 0;
    }
</style>
