import Vue from 'vue';
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';

Vue.use(VueSocketio, socketio('http://socketserver.com:8801'));
