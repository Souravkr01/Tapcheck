var bankAccountDetails = {
    cardNo: '',
    cvv: '',
    exp: '',
    cardHolderName: '',
    bankName: ''
}
var nextDayTransferBankDetails = {
    cardNo : "",
    cvv : "",
    exp: "",
    cardHolderName: "",
    bankName: "",
}



function setBankDetailsFromData(cardNo, cvv, exp, cardHolderName, bankName) {
    var bankCardNumberInput = document.getElementById('bank-card-number');
    var bankCardCvvInput = document.getElementById('bank-card-cvv');
    var bankCardExpInput = document.getElementById('bank-card-exp');
    var bankCardHolderNameInput= document.getElementById('bank-card-holder-name');
    var bankNameInput = document.getElementById('bank-name');
    bankCardNumberInput.value = cardNo;
    bankCardCvvInput.value = cvv;
    bankCardExpInput.value = exp;
    bankCardHolderNameInput.value = cardHolderName;
    bankNameInput.value = bankName;
}

function openBankDetailsModal() {
    var bankDetailsModal = document.getElementById('bank-details-modal');
    bankDetailsModal.style.display = 'flex';
    
}
function closeBankDetailsModal() {
    var bankDetailsModal = document.getElementById('bank-details-modal');
    bankDetailsModal.style.display = 'none';
}
function retrieve() {
    var { cardNumberLS, bankNameLS, bankcardcvvLS, bankcardexpLS, bankcardholdernameLS } = getValueFromLocalStorage();
    var formBankCardNumberInput = document.getElementById('bank-card-number');
    formBankCardNumberInput.value = Number(cardNumberLS);
    var formBankNameInput = document.getElementById('bank-name');   
    formBankNameInput.value = bankNameLS;
    var formBankCardCvvInput = document.getElementById('bank-card-cvv');
    formBankCardCvvInput.value = Number(bankcardcvvLS);
    var formBankCardExpInput = document.getElementById('bank-card-exp');
    formBankCardExpInput.value = Number(bankcardexpLS);
    var formBankCardHolderNameInput = document.getElementById('bank-card-holder-name');
    formBankCardHolderNameInput.value = bankcardholdernameLS;
}
var addBankDetails = document.getElementById('add-bank-details');
addBankDetails.addEventListener('click', function() {
    openBankDetailsModal();
    retrieve();    
});

var setupButton = document.getElementsByClassName('setup-button')[0];
setupButton.addEventListener('click', function(){
    openBankDetailsModal();
    retrieve();
});
var closeBankDetailsButton = document.getElementById('close-bank-details');
closeBankDetailsButton.addEventListener('click', closeBankDetailsModal);

var editPencil = document.getElementsByClassName('edit-pencil')[0];
editPencil.addEventListener('click',  function(){
    openBankDetailsModal();
    retrieve();
});


var cardNumber = document.getElementById('card-number');
var cityBankName = document.getElementById('city-bank-limited');
var submitButton = document.getElementById('submit-button');
var actName = document.getElementById('actName');

submitButton.onclick = function info(event) {
    event.preventDefault();
    var bank_Name = document.getElementById('bank-name').value;
    bankAccountDetails.bankName = bank_Name;
    cityBankName.innerHTML = bank_Name;
    actName.innerHTML = bank_Name;
    var bank_Card_Number = document.getElementById("bank-card-number").value;
    cardNumber.innerHTML = bank_Card_Number;
    
    var bank_Card_Cvv = document.getElementById('bank-card-cvv').value;
    localStorage.setItem('bank_card_cvv', bank_Card_Cvv);
    var bank_Card_Exp = document.getElementById('bank-card-exp').value;
    localStorage.setItem('bank_card_exp', bank_Card_Exp);
    var bank_Card_Holder_Name = document.getElementById('bank-card-holder-name').value;
    localStorage.setItem('bank_card_holder_name', bank_Card_Holder_Name);
    localStorage.setItem('cardNumber', bank_Card_Number);
    localStorage.setItem('cityBankName', bank_Name);
    
    if(!bank_Name || !bank_Card_Number || !bank_Card_Cvv || !bank_Card_Exp || !bank_Card_Holder_Name) {
        alert("No blank values allowed");
        return false;
    }
    else {
        true;
    }
    closeBankDetailsModal();
}

function getValueFromLocalStorage() {
    var cardNumberLS = localStorage.getItem('cardNumber') || 'XXXXXXXXXXXXXXXX';
    var bankNameLS = localStorage.getItem('cityBankName') || 'OOps, No Bank Name';
    var bankcardcvvLS = localStorage.getItem('bank_card_cvv');
    var bankcardexpLS = localStorage.getItem('bank_card_exp');
    var bankcardholdernameLS = localStorage.getItem('bank_card_holder_name');
    return {
        cardNumberLS,
        bankNameLS,
        bankcardcvvLS,
        bankcardexpLS,
        bankcardholdernameLS
    }
}

window.onload = function () {
var { cardNumberLS, bankNameLS } = getValueFromLocalStorage();
    cardNumber.innerHTML = cardNumberLS;
    cityBankName.innerHTML = bankNameLS; 
    
}