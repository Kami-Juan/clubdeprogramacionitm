import Vue from 'vue';
import Router from 'vue-router';

import Inicio from '../Components/Inicio';
import Contacto from './../Components/Home/Contacto';
import Evento from './../Components/Evento/Evento';

import Error from '../Components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        name: 'main',
        component: Inicio
    },
    {
        path: '/contacto',
        name: 'contacto',
        component: Contacto
    },
    {
        path: '/eventos',
        name: 'eventos',
        component: Evento
    },
    {
        path: '*',
        component: Error
    }
  ]
});
