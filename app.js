
document.getElementById('case-button').addEventListener('click',function(){
    let caseNumbers = document.getElementById('case-number');
    let caseNumber = parseInt(caseNumbers.value) ;
    
    let showNumber = caseNumber +1;
    caseNumbers.value = showNumber;
    
})

document.getElementById