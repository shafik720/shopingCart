
function increaseProduct(productName, isTrue){
    
    if(isTrue == true){
        let inputTexts = document.getElementById(productName+'-number');
        let inputText = parseInt(inputTexts.value);
        let amounts = inputText + 1;
        inputTexts.value = amounts;
        
    }else  {
        let inputTexts = document.getElementById(productName+'-number');
        let inputText = parseInt(inputTexts.value);
        if(parseInt(inputTexts.value)>0){            
        let amounts = inputText - 1;
        inputTexts.value = amounts;
        }
    }
}
//for mobile phone
document.getElementById('mobile-button').addEventListener('click', function(){
    increaseProduct('mobile', true);
})
document.getElementById('mobile-button-minus').addEventListener('click', function(){
    increaseProduct('mobile', false);
})

// for case 
document.getElementById('case-button').addEventListener('click', function(){
    increaseProduct('case', true);
})
document.getElementById('case-button-minus').addEventListener('click', function(){
    increaseProduct('case', false);
})