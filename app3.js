
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
function totalValue(){
    let subTotals = document.getElementById('subTotal');    
    let taxIds = document.getElementById('taxId');    
    let allTotals = document.getElementById('allTotal');
    
    let mobilePrices = document.getElementById('mobile-value');
    let mobilePrice = parseFloat(mobilePrices.innerText);

    let casePrices = document.getElementById('case-value');
    let casePrice = parseFloat(casePrices.innerText);

    let mainSubTotal = mobilePrice + casePrice;
    let tax = mainSubTotal/10;
    let finalTotal = mainSubTotal + tax;
    

    subTotals.innerText = mainSubTotal;
    taxIds.innerText = tax;
    allTotals.innerText = finalTotal;
    
}


//for mobile phone
document.getElementById('mobile-button').addEventListener('click', function(){
    increaseProduct('mobile', true, 1219);
    totalValue();
})
document.getElementById('mobile-button-minus').addEventListener('click', function(){
    increaseProduct('mobile', false, 1219);
    totalValue();
})

// for case 
document.getElementById('case-button').addEventListener('click', function(){
    increaseProduct('case', true, 59);
    totalValue();
})
document.getElementById('case-button-minus').addEventListener('click', function(){
    increaseProduct('case', false, 59);
    totalValue();
})

document.getElementById('checkButton').addEventListener('click', function(){
    window.location.href = 'congrats.html';
})