// pin generator 
function getPin(){
    const pin=Math.round(Math.random()*10000);
    const pinString=pin + "";
    if(pinString.length==4){
        return pin;
    }else{
        return getPin();
    }
}

// pin display
function generatePin(){
  const pin=getPin();  
  document.getElementById('display-pin').value=pin;
}

// calculator
document.getElementById('key-pad').addEventListener("click", function(event){ 
    const number=event.target.innerText;
    const calcInput=document.getElementById('typed-numbers');
    if(isNaN(number)){
      if(number == 'C'){
         calcInput.value=''; 
      }
    }else{
      const previousNumber=calcInput.value;
      const newCalc=previousNumber + number;
      calcInput.value=newCalc;
    }

})


document.getElementById("submit-btn").addEventListener("click", function(){
  const pin=document.getElementById('display-pin').value; 
  const typedNumber=document.getElementById("typed-numbers").value;   
  const notifyYes=document.getElementById('notify-yes');
  const notifyNot=document.getElementById('notify-not');
  if(pin==typedNumber){ 
    notifyYes.style.display="block";
    notifyNot.style.display="none";
  }else{ 
    notifyNot.style.display="block";
    notifyYes.style.display="none";
  }
});