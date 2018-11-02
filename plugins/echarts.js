import Vue from 'vue';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/legendScroll';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/toolbox';

import Echarts from 'echarts/lib/echarts';

/* eslint-disable fecs-no-require */

// require('echarts/lib/chart/line');
// require('echarts/lib/component/legendScroll');
// require('echarts/lib/component/tooltip');
// require('echarts/lib/component/title');
// require('echarts/lib/component/toolbox');


// Vue.prototype.$echarts = require('echarts/lib/echarts');
Vue.prototype.$echarts = Echarts;
