let randomnumber=parseInt(Math.random()*100+1)
const submit=document.querySelector('#subt')
const userinput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastresults')
const loworhi=document.querySelector('.loworhi')
const startover=document.querySelector('.resultParas')
const p=document.createElement('p')
let prevguess=[]
let numguess=0
let playgame=true
if(playgame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const input=parseInt(userinput.value)
    validateguess(input)
  })
}
function validateguess(guess){
   if(isNaN(guess)){
     alert('please enter a valid number')
   }
   else if(guess<1){
     alert('please enter a number more than or equal to 1')
   }
   else if(guess>100){
     alert('please enter a number less than or equal to 100')
   }
   else{
    prevguess.push(guess)
    if(numguess===9){
        displayguess(guess)
      }
    else{
        displayguess(guess)
        checkguess(guess)
    }
   }
}
function checkguess(guess){
  if(guess===randomnumber){
    displaymessage(`You guessed it right`)
    endgame()
  }
  else if(guess<randomnumber){
    displaymessage(`you guessed a lower number than the right number`)
  }
  else if(guess>randomnumber){
    displaymessage(`you guessed a higher number than the right number`)
  }
}
function displayguess(guess){
  userinput.value=''
  guessSlot.innerHTML+=`${guess},`
  numguess++
  if(numguess===10){
    checkguess(guess)
    displaymessage(`<pre><h3>     GAME OVER!!!</br>Random Number was ${randomnumber}</br></h3></pre>`)
    endgame()
  }
  if(numguess===11){
    remaining.innerHTML=0
  }
  else{
  remaining.innerHTML=`${10-numguess}`
  }
}
function displaymessage(message){
  if(message===`You guessed it right`){
  loworhi.innerHTML=`<h3 style="color:green">${message}</h3>`
  }
  else{
  loworhi.innerHTML=`<h3 style="color:red">${message}</h3>` 
  }
}
function endgame(){
  userinput.value=''
  userinput.setAttribute('disabled','')
  startover.appendChild(p)
  p.classList.add('button')
  p.innerHTML=`<h2 class="newgame" style="color:orangered">Start new game</h2>`
  playgame=false
  newgame()
}
function newgame(){
  const newgamebutton=document.querySelector('.newgame')
  newgamebutton.addEventListener('click',function(e){
  randomnumber=parseInt(Math.random()*100+1)
  prevguess=[]
  numguess=0
  guessSlot.innerHTML=''
  remaining.innerHTML=`${10-numguess}`
  loworhi.innerHTML=''
  userinput.removeAttribute('disabled')
  startover.removeChild(p)
  playgame=true
  })
}