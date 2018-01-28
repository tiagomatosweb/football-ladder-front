import Vue from 'vue';
// import Echo from 'laravel-echo';
import App from './App';
import router from './router';

// const Pusher = require('pusher-js');

Vue.config.productionTip = false;

// console.log(pusher);

// Pusher.logToConsole = true;

window.pusher = new Pusher('b39b249cf40aba698328', {
    cluster: 'ap1',
    encrypted: true,
});

// const channel = pusher.subscribe('ladder');
// channel.bind('MatchUpdatedEvent', (data) => {
//     console.log(data.message);
// });

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'b39b249cf40aba698328',
//     cluster: 'ap1',
//     encrypted: true,
// });
// window.Echo.channel('ladder')
//     .listen('MatchUpdatedEvent', (e) => {
//         console.log(e);
//         console.log('Event is triggered!');
//     });

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App),
});
