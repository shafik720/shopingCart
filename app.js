
// increament
function increaseNumber(inputFieldId){
    let caseNumbers = document.getElementById(inputFieldId);
    let caseNumber = parseInt(caseNumbers.value) ;
    
    let showNumber = caseNumber +1;
    return caseNumbers.value = showNumber;
}
document.getElementById('case-button').addEventListener('click',function(){
    
    increaseNumber('case-number');
})


// decreament
function decreaseNumber(inputFieldId){
    let caseNumbers = document.getElementById(inputFieldId);
    let caseNumber = parseInt(caseNumbers.value) ;
    
    let showNumber = caseNumber -1;
    return caseNumbers.value = showNumber;
}
document.getElementById('case-button-minus').addEventListener('click', function(){
    decreaseNumber('case-number');
})