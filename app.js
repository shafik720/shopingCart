
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

document.getElementById('case-button').addEventListener('click',function(){
    
    increaseNumber('case-number');
})



document.getElementById('case-button-minus').addEventListener('click', function(){
    decreaseNumber('case-number');
})