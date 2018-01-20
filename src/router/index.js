import Vue from 'vue';
import Router from 'vue-router';
import Ladder from '@/components/Ladder';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Ladder',
            component: Ladder,
        },
    ],
});