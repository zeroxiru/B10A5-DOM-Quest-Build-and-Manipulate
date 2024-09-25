document.getElementById('donate-now').addEventListener('click', function () {

    let inputValue = getInputFieldValueById('da-Noakhali');
    let parsedValue = parseFloat(inputValue);

    let totalAvailableBalance = getTextFieldValueById('totalAvailable-Bal');

    if (isNaN(parsedValue) || parsedValue <= 0 || inputValue != parsedValue.toString()) {
        alert('Invalid Donation amount. Please try actual value..');
        return;
    }
    if (parsedValue > totalAvailableBalance) {
        alert('Donation amount exceeds the available Balance amount');
        return
    }
    if (parsedValue > 0) {

        totalAvailableBalance = totalAvailableBalance - parsedValue;
        document.getElementById('totalAvailable-Bal').innerText = totalAvailableBalance;
        let noakhaliAvailableBalance = getTextFieldValueById('noakhaliAvailable-Bal');
        noakhaliAvailableBalance += parsedValue;
        document.getElementById('noakhaliAvailable-Bal').innerText = noakhaliAvailableBalance;

         // Get current date and time
        const currentDateTime = new Date().toLocaleString();

        // adding transaction to history.
        const headerSectionOfFlood = document.getElementById('header-DonationForFlood').innerText;
       
        const donationDiv = document.createElement('div');
        donationDiv.classList.add('w-full', 'border', 'border-gray-400', 'p-4', 'mb-8');

        const donationText = document.createElement('p');
        
        donationText.innerText = `${inputValue} TK is ${headerSectionOfFlood}`;
         
        // Date data
        const dateText = document.createElement('p');
        dateText.innerText = `Date: ${currentDateTime}`;
        dateText.classList.add('mt-2');

        // append both paragraphs for the donation div

        donationDiv.appendChild(donationText);
        donationDiv.appendChild(dateText);
        document.getElementById('history-container').appendChild(donationDiv);


    }

});

document.getElementById('donate-now-feni').addEventListener('click', function () {

    let inputValue = getInputFieldValueById('da-feni');
    let parsedValue = parseFloat(inputValue);

    let totalAvailableBalance = getTextFieldValueById('totalAvailable-Bal');

    if (isNaN(parsedValue) || parsedValue <= 0 || inputValue != parsedValue.toString()) {
        alert('Invalid Donation amount. Please try actual value..');
        return;
    }
    if (parsedValue > totalAvailableBalance) {
        alert('Donation amount exceeds the available Balance amount');
        return
    }
    if (parsedValue > 0) {

        totalAvailableBalance = totalAvailableBalance - parsedValue;
        document.getElementById('totalAvailable-Bal').innerText = totalAvailableBalance;
        let feniAvailableBalance = getTextFieldValueById('feni-Bal');
        feniAvailableBalance += parsedValue;
        document.getElementById('feni-Bal').innerText = feniAvailableBalance;

         // Get current date and time
        const currentDateTime = new Date().toLocaleString();

        // adding transaction to history.
        const headerSectionOfFlood = document.getElementById('header-DonationForFloodFenni').innerText;
       
        const donationDiv = document.createElement('div');
        donationDiv.classList.add('w-full', 'border', 'border-gray-400', 'p-4', 'mb-8');

        const donationText = document.createElement('p');
        
        donationText.innerText = `${inputValue} TK is ${headerSectionOfFlood}`;
         
        // Date data
        const dateText = document.createElement('p');
        dateText.innerText = `Date: ${currentDateTime}`;
        dateText.classList.add('mt-2');

        // append both paragraphs for the donation div

        donationDiv.appendChild(donationText);
        donationDiv.appendChild(dateText);
        document.getElementById('history-container').appendChild(donationDiv);

        //console.log(totalAvailableBalance, noakhaliAvailableBalance);

    }


    //     console.log(totalAvailableBalance, noakhaliAvailableBalance, inputValue);

});


document.getElementById('donate-now-quota').addEventListener('click', function () {

    let inputValue = getInputFieldValueById('da-quota');
    let parsedValue = parseFloat(inputValue);

    let totalAvailableBalance = getTextFieldValueById('totalAvailable-Bal');

    if (isNaN(parsedValue) || parsedValue <= 0 || inputValue != parsedValue.toString()) {
        alert('Invalid Donation amount. Please try actual value..');
        return;
    }
    if (parsedValue > totalAvailableBalance) {
        alert('Donation amount exceeds the available Balance amount');
        return
    }
    if (parsedValue > 0) {

        totalAvailableBalance = totalAvailableBalance - parsedValue;
        document.getElementById('totalAvailable-Bal').innerText = totalAvailableBalance;
        let quotaAvailableBalance = getTextFieldValueById('quota-Bal');
        quotaAvailableBalance += parsedValue;
        document.getElementById('quota-Bal').innerText = quotaAvailableBalance;

         // Get current date and time
        const currentDateTime = new Date().toLocaleString();

        // adding transaction to history.
        const headerSectionOfFlood = document.getElementById('header-DonationForFloodQuota').innerText;
       
        const donationDiv = document.createElement('div');
        donationDiv.classList.add('w-full', 'border', 'border-gray-400', 'p-4', 'mb-8');

        const donationText = document.createElement('p');
        
        donationText.innerText = `${inputValue} TK is ${headerSectionOfFlood}`;
         
        // Date data
        const dateText = document.createElement('p');
        dateText.innerText = `Date: ${currentDateTime}`;
        dateText.classList.add('mt-2');

        // append both paragraphs for the donation div

        donationDiv.appendChild(donationText);
        donationDiv.appendChild(dateText);
        document.getElementById('history-container').appendChild(donationDiv);

        //console.log(totalAvailableBalance, noakhaliAvailableBalance);

    }


})


document.getElementById('show-donation').addEventListener('click', function () {
    showSectionById('donation-sections');

})

document.getElementById('show-history').addEventListener('click', function () {
    showSectionById('history-section');

})


const donationButton = document.getElementById('show-donation');
const historyButton = document.getElementById('show-history');

// Function to handle button clicks
function handleButtonClick(clickedButton) {
    // Reset the button classes
    donationButton.classList.remove('bg-buttonColor');
    historyButton.classList.remove('bg-buttonColor');
    
    // Add the bg-buttonColor class to the clicked button
    clickedButton.classList.add('bg-buttonColor');
}

// Add click event listeners to the buttons
donationButton.addEventListener('click', function() {
    handleButtonClick(donationButton);
});

historyButton.addEventListener('click', function() {
    handleButtonClick(historyButton);
});