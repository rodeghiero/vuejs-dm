
<template>
    <div id="pgHome">
        <div class="contents">
            <div class="bxContent">

                <HeaderMain />

                <div class="content">
                    <strong>Teste Front-End : Donamaid</strong>
                </div>

                <FooterMain />

            </div>
        </div>
    </div>
</template>


<script>
import HeaderMain from './HeaderMain'
import FooterMain from './FooterMain'

export default {
    name: 'HelloWorld',
    components: {
        HeaderMain,
        FooterMain
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
