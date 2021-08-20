
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
    let caseAmountss = document.getElementById('case-number');
    let caseAmounts = caseAmountss.value;
    let caseAmount = parseInt(caseAmounts);
    let casePrice = 59 * caseAmount;
    let showCasePrice = document.getElementById('fifty-nine');
    showCasePrice.innerHTML = casePrice;
    // console.log(casePrice);

})
document.getElementById('case-button-minus').addEventListener('click', function(){
    decreaseNumber('case-number');
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
})
document.getElementById('mobile-button-minus').addEventListener('click',function(){
    decreaseNumber('mobile-number');
})
