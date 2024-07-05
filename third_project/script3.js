const clock=document.querySelector('#clock')
setInterval(function(){
  let date=new Date();
  clock.innerHTML=date.toLocaleTimeString();
},1000)//after every 1 second it will be called(the call back function)
