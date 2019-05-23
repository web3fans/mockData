/*
 window.onscroll = _.throttle(log,1000);
 window.onscroll = _.throttle(log,1000,{leading:false});
 window.onscroll = _.throttle(log,1000,{trailing:false});
 */

var callme = function(){
   console.log('My name is Hanmeimei');
}

_ = {
  throttle:function(func, wait, options){
     //记录上一次执行回调的时间
     var previous = 0;

     return function(){
         //记录当前时间
         var now = Date.parse(new Date());
         
         //比较时间
         if (now - previous >= wait) {
           //如果超出wait则执行
           func.apply();
         } else {
          console.log('距离上次触发仅经过了:' + (now-previous) + '毫秒');
            previous = now;
         }
     }
  }
}


//执行测试
window.onscroll = _.throttle(callme,1000);





