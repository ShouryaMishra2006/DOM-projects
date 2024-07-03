const buttons=document.querySelectorAll('.button')//class name
const body=document.querySelector("body")//tag name
buttons.forEach(function (button){
  button.addEventListener('click',function(e){//e is the object of event called(here,click)
    if(e.target.id==='green'){
      body.style.backgroundColor=e.target.id;
    };
    if(e.target.id==='red'){
      body.style.backgroundColor=e.target.id;
    };
    if(e.target.id==='blue'){
      body.style.backgroundColor=e.target.id;
    };
    if(e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id;
    };
  })
})