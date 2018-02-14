<template>
    <nav>
        <ul>
            <li><router-link tag="a" to="/">Inicio</router-link></li>
            <li><router-link tag="a" to="/construction">Quienes somos</router-link></li>
            <li><router-link tag="a" to="/contacto">Contacto</router-link></li>
            <li><router-link tag="a" to="/eventos">Eventos</router-link></li>
        </ul>
    </nav>
</template>
<script>
export default {
  
}
</script>
<style scoped>
    nav {
        padding-top: 10px; 
        height: 50px;
        background-color: rgba(128, 128, 128, 0.151);
        font-family: 'Roboto', sans-serif;          
    }

    nav > ul{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }

    nav > ul > li > a{
        text-decoration: none;
        color: white;      
        font-size: 22px;
        padding-bottom: 3px;
    }

    nav > ul > li > a:hover{
        border-bottom: 2px white solid;
 
    }

    nav > ul > li {
        list-style: none;
        text-align: center;
        margin-right: 40px;        
    }
    
</style>

