//import $ from'./js/jquery-2.1.0.js';
require("./show.scss");
require("./css/main.css");
var show=require('./js/show.js');
var con=require('./js/console.js');

require('offline-plugin/runtime').install({
    // 监听sw事件，当更新ready的时候，调用applyUpdate以跳过等待，新的sw立即接替老的sw
  onUpdateReady: () => {
    console.log('SW Event:', 'onUpdateReady')
    OfflinePluginRuntime.applyUpdate()
  },
  onUpdated: () => {
    console.log('SW Event:', 'onUpdated')
    window.swUpdate = true
  }
})