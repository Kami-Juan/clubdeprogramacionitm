<template>
    <div class="row text-center">
        <h1 class="col titulo_info">GALERÍA</h1>
        <div class="row">
            <div class="col-md-6 col-sm-12" v-for="(img, index) in images" :key="index">
                <figure class="photo">
                    <img v-img:my-group :src="img.url" class="gallery">                                                           
                </figure>
            </div>        
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                images: [
                    {
                        url: require('./../../assets/prog01.jpg')
                    },
                    {
                        url: require('./../../assets/prog02.jpg')
                    },
                    {
                        url: require('./../../assets/prog03.jpg')
                    },
                    {
                        url: require('./../../assets/prog04.jpg')
                    },
                    {
                        url: require('./../../assets/prog05.jpg')
                    },
                    {
                        url: require('./../../assets/prog06.jpg')
                    },
                    {
                        url: require('./../../assets/prog07.jpg')
                    },
                    {
                        url: require('./../../assets/prog08.jpg')
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    .col-md-6, .col-sm-12{
        padding-right: initial;
        padding-left: initial;
    }

    .photo{
        width: 100%;
        height: 20em;
        margin: 0;
        overflow: hidden;
        background-color: #000;
    }

    .photo img{
        opacity: 0.7;
        width: 100%;
        height: auto;
        -webkit-transform: scale(1.15);
        transform: scale(1.15);
        -webkit-transition: -webkit-transform 0.5s, opacity 0.5s;
        -webkit-transition: opacity 0.5s, -webkit-transform 0.5s;
        transition: opacity 0.5s, -webkit-transform 0.5s;
        transition: transform 0.5s, opacity 0.5s;
        transition: transform 0.5s, opacity 0.5s, -webkit-transform 0.5s;
        margin: 0;
    }

    .photo img:hover{
        opacity: 1;
        -webkit-transform: scale(1.03);
        transform: scale(1.03);
    }
</style>