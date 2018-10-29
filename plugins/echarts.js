import Vue from 'vue';

/* eslint-disable fecs-no-require */

require('echarts/lib/chart/line');
require('echarts/lib/component/legendScroll');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

Vue.prototype.$echarts = require('echarts/lib/echarts');
// Vue.prototype.$echarts = Echarts;
