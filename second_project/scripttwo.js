const form=document.querySelector("form")
form.addEventListener('submit',function(e){
  e.preventDefault()
  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)
  const result=document.querySelector('.results')
  if(height==='' || height<0 || isNaN(height)){
    result.textContent="please enter a valid height"
  }
  else if(weight==='' || weight<0 || isNaN(weight)){
    result.textContent="please enter a valid weight"
  }
  else{
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    if(bmi<18.6){
      result.innerHTML=`<span>${bmi}</span>, UNDERWEIGHT`
    }
    else if(bmi>24.9){
      result.innerHTML=`<span>${bmi}</span>, OVERWEIGHT`
    }
    else{
      result.innerHTML=`<span>${bmi}</span>, NORMAL`
    }
  }
})