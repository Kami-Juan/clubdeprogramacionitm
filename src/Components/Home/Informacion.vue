<template>
    <div class="row text-center">
        <h1 class="col titulo_info">NUESTRA MISIÓN</h1>
        <div class="row">
            <div class="col-md-4 col-sm-12" v-for="(info, index) in informacion" :key="info.title">
                <img :src="info.url" alt="">
                <h2>{{ info.title }}</h2>                
                <p>{{ info.data }}</p>
            </div>
        </div>                
    </div>
</template>
<script>
    export default {
        data(){
            return {
                informacion: [
                    {
                        url: require('./../../assets/event.png'),
                        data: "Coordinamos la mayoría de los eventos de la carrera.",
                        title: "Organizamos"
                    },
                    {
                        url: require('./../../assets/code.png'),
                        data: "Creamos y organizamos los concursos de replicación web y programación en Java.",
                        title: "Codificamos"
                    },
                    {
                        url: require('./../../assets/person.png'),
                        data: "Si deseas aprender más acerca de programación, redes de computadoras o vienes con propuestas no dudes en comunicarte con nosostros!.",
                        title: "Enseñamos"
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    
</style>


