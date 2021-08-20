
// increament function
function increaseNumber(inputFieldId){
    let caseNumbers = document.getElementById(inputFieldId);
    let caseNumber = parseInt(caseNumbers.value) ;
    
    let showNumber = caseNumber +1;
    return caseNumbers.value = showNumber;
}
// decreament function
function decreaseNumber(inputFieldId){
    let caseNumbers = document.getElementById(inputFieldId);
    let caseNumber = parseInt(caseNumbers.value) ;
    if(caseNumber>0){
        let showNumber = caseNumber - 1;
        return caseNumbers.value = showNumber;
    }    
}

// to increase or decrease case amount




document.getElementById('case-button').addEventListener('click',function(){    
    increaseNumber('case-number');

    // increase mobile-price
    let caseAmountss = document.getElementById('case-number');
    let caseAmounts = caseAmountss.value;
    let caseAmount = parseInt(caseAmounts);
    let casePrice = 59 * caseAmount;
    let showCasePrice = document.getElementById('fifty-nine');
    showCasePrice.innerHTML = casePrice;
    
})
document.getElementById('case-button-minus').addEventListener('click', function(){
    decreaseNumber('case-number');

    // decrease mobile-price
    let caseAmountss = document.getElementById('case-number');
    let caseAmounts = caseAmountss.value;
    let caseAmount = parseInt(caseAmounts);
    let casePrice = 59 * caseAmount;
    let showCasePrice = document.getElementById('fifty-nine');
    showCasePrice.innerHTML = casePrice;
})

// to increase or decrease mobile amount
document.getElementById('mobile-button').addEventListener('click', function(){
    increaseNumber('mobile-number');

    // increase mobile-price
    let caseAmountss = document.getElementById('mobile-number');
    let caseAmounts = caseAmountss.value;
    let caseAmount = parseInt(caseAmounts);
    let casePrice = 1219 * caseAmount;
    let showCasePrice = document.getElementById('twelve-nine');
    showCasePrice.innerHTML = casePrice;
})
document.getElementById('mobile-button-minus').addEventListener('click',function(){
    decreaseNumber('mobile-number');

    // decrease mobile-price
    let caseAmountss = document.getElementById('mobile-number');
    let caseAmounts = caseAmountss.value;
    let caseAmount = parseInt(caseAmounts);
    let casePrice = 1219 * caseAmount;
    let showCasePrice = document.getElementById('twelve-nine');
    showCasePrice.innerHTML = casePrice;
})
