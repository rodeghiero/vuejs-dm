
<template>
    <div class="HeaderPage">
        <h2>--- HEADER ---</h2>
        <ul class="clearfix lstNav">
            <router-link to="/cadastro" tag="li">
                <a>Cadastro</a>
            </router-link>
            <router-link to="/login" tag="li">
                <a>Login</a>
            </router-link>
            <router-link to="/dashboard" tag="li">
                <a>Dashboard</a>
            </router-link>
        </ul>
    </div>
</template>


<script>
    export default {
        name: 'HeaderMain',
        data () {
            return {}
        }
    }
</script>


<style scoped>

</style>
