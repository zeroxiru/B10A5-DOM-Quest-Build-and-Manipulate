
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id){
    const availableBalance = document.getElementById(id);
    const availableBalanceText = availableBalance.innerText;
    const availableBalanceNumber = parseFloat(availableBalanceText);
    return  availableBalanceNumber;
}

function showSectionById(id){
    document.getElementById('donation-sections').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');

}
