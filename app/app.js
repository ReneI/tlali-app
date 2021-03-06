import Vue from 'nativescript-vue'
import Home from './components/Home'
import Pager from 'nativescript-pager/vue';
const labelModule = require("tns-core-modules/ui/label");



Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)
Vue.registerElement('CardView', () => require('nativescript-cardview').CardView);

Vue.use(Pager);

Vue.config.silent = true

import { TNSFontIcon, fonticon } from './nativescript-fonticon';
TNSFontIcon.debug = false;
TNSFontIcon.paths = {
    'fa': './fonts/font-awesome.css',
    'ion': './fonts/ionicons.css',
};
TNSFontIcon.loadCss();
Vue.filter('fonticon', fonticon);


new Vue({
    render: h => h('frame', [h(Home)])
}).$start()
