
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

// to increase or decrease mobile amount
document.getElementById('case-button').addEventListener('click',function(){    
    increaseNumber('case-number');
})
document.getElementById('case-button-minus').addEventListener('click', function(){
    decreaseNumber('case-number');
})

// to increase or decrease case amount
document.getElementById('case-button2').addEventListener('click', function(){
    increaseNumber('input-text2');
})
document.getElementById('case-button2-minus').addEventListener('click',function(){
    decreaseNumber('input-text2');
})
