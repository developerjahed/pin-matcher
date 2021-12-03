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