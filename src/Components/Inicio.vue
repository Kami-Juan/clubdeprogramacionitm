<template>
    <div>
        <app-header></app-header>
        <div class="container">
            <app-info></app-info>
            <hr>
            <app-gallery></app-gallery>
        </div>
    </div>
</template>

<script>
    import Header from './Home/Header';
    import Galeria from './Home/Galeria';
    import Informacion from './Home/Informacion';

    import 'animate.css/animate.min.css';

    export default {
        components: {
            'app-header': Header,
            'app-gallery': Galeria,
            'app-info': Informacion
        }
    }
</script>

<style>

    body{
        text-rendering: optimizeLegibility;
        font-size: 16px;
    }

    .titulo_info{
        font-weight: bold;
        padding-top: 20px;
    }

    .titulo_info::after{
        content: " ";
        display: flex;
        width: 10%;
        margin: 0 auto;
        margin-top: 15px;
        height: 4px;
        background-color: rgba(206, 20, 20, 0.801);
    }

</style>
