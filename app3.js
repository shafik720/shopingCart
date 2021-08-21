
function increaseProduct(productName, isTrue, price){
        let inputTexts = document.getElementById(productName+'-number');
        let inputText = parseInt(inputTexts.value);

    if(isTrue == true){        
        let amounts = inputText + 1;
        inputTexts.value = amounts;
        
    }else if(parseInt(inputTexts.value)>0)  {                 
        let amounts = inputText - 1;
        inputTexts.value = amounts;        
    }

    let mobileValues = document.getElementById(productName+'-value');
    mobileValues.innerText = parseInt(inputTexts.value) * price;
}


//for mobile phone
document.getElementById('mobile-button').addEventListener('click', function(){
    increaseProduct('mobile', true, 1219);
})
document.getElementById('mobile-button-minus').addEventListener('click', function(){
    increaseProduct('mobile', false, 1219);
})

// for case 
document.getElementById('case-button').addEventListener('click', function(){
    increaseProduct('case', true, 59);
})
document.getElementById('case-button-minus').addEventListener('click', function(){
    increaseProduct('case', false, 59);
})