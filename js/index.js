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

        totalAvailableBalance = totalAvailableBalance - inputValue;
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

        //console.log(totalAvailableBalance, noakhaliAvailableBalance);

    }


    //     console.log(totalAvailableBalance, noakhaliAvailableBalance, inputValue);

})


document.getElementById('show-donation').addEventListener('click', function () {
    showSectionById('donation-sections');

})

document.getElementById('show-history').addEventListener('click', function () {
    showSectionById('history-section');

})


const blogButton = document.getElementById('btn-blog');


// Update button text based on the current URL
function updateButtonText() {
    console.log("Current URL:", window.location.href); 
    if (window.location.href.includes('blog.html')) {
        blogButton.innerText = 'Home'; // Change to "Home" if on blog.html
    } else {
        blogButton.innerText = 'Blog'; // Change to "Blog" if on index.html
    }
}

updateButtonText(); // Set the button text on load

// Add click event listener to the button
blogButton.addEventListener('click', function() {

    if (window.location.href.includes('blog.html')) {
        // Redirect to index.html
        window.location.href = 'index.html';
    } else {
        // Redirect to blog.html
        window.location.href = 'blog.html';
    }
});
