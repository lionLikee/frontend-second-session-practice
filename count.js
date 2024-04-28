function count(type){
    const resultElement=document.getElementById('result');

    let number = parseInt(resultElement.innerText);
  
 
    if(type === 'plus') {
        number = number + 1;
    }
    else if(type === 'minus')  {
        number = number - 1;
    }
    else if(type==='reset'){
        number=0;
    }
  
  
    resultElement.innerText = number;
}