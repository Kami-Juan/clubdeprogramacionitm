<template>
    <header>
        <app-header-option></app-header-option>
        <div class="titulo animated fadeIn">
            <img :src="require('../../assets/club_brain.png')" alt="">            
            <div class="titulo_prog">
                <h1>CLUB DE PROGRAMACIÓN <br>
                <span>INSTITUTO TECNOLÓGICO DE MÉRIDA</span></h1>                
            </div>
        </div>
        <div class="titulo_botones">
            <button type="button">Ver más</button>
            <button type="button">Aprende más</button>
        </div>
                    
    </header>
</template>
<script>
    import 'animate.css/animate.min.css';
    import Header from './HeaderOption';

    export default {
        components: {
            'app-header-option': Header
        }
    }

</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Roboto');

    header{
        background-color: black;
        height: 100vh;
        font-family: 'Roboto', sans-serif;        
    }

    .titulo_botones{
        display: flex;
        justify-content: center;
        position: relative;
        margin-left: 140px;        
        top: 30%;
    }

    .titulo_botones button{
        padding: 10px 40px 8px 40px;
        min-width: 224px;
        margin-right: 15px;
        box-shadow: 0 1px 0 0 rgba(0,0,0,0.1);
        background-color: rgba(255, 255, 255, 0.726);
        border: none;
        cursor: pointer;
    }

    .titulo_botones button:hover{
        background-color: rgba(255, 255, 255, 0.973);
        transition: 1s background-color;
    }

    .titulo{
        display: flex;
        justify-content: center;
        position: relative;
        top: 20%;
    }

    .titulo img{
        width: 12%;
    }

    .titulo_prog{
        padding-top: 60px;
    }

    .titulo_prog h1{
        color: white;
        text-align: center;
    }

    .titulo_prog h1{
        font-weight: bold;
    }

    .titulo_prog span{
        font-weight: normal;
    }

</style>
