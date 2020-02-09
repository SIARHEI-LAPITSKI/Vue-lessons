<template>
    <div class="wrapper">
        <header id="header">This is header</header>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                message: 'Router'
            }
        }
    }
</script>

<style>

</style>