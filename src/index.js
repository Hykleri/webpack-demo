// 入口文件

// 引入vue
import Vue from 'vue';

import './styles/style.scss';

new Vue({
  el: '#app',

  data: {
    msg: 'hello',
    abc: 'tom'
  },

  template: `
    <h1>我靠</h1>
  `

  // render:function(h) {
  //   return h('p', '这是一个P');
  // }
})