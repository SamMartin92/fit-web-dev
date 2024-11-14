document.addEventListener("DOMContentLoaded", () => {
    //declare variables
    let homeContactForm = document.querySelector("#home-contact-form")
    let purchaseForm = document.querySelector("#purchase-form");
    let modalBody = document.querySelector(".modal-body");
    //purchase form inputs
    let cardNumberInput = document.querySelector("#cardNumber")
    let quantityInput = document.querySelector("#quantity");
    let unitPrice = document.querySelector("#value");

    // present the current year in footer
    document.getElementById("year").textContent = new Date().getFullYear();

    if (homeContactForm) {
        homeContactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            homeContactForm.innerHTML = `
                <div class="mt-3 mb-5 fade-in">
                    <h1>Thank you for submitting your message!</h1> 
                    <h4>We will be in touch shortly</h4>
                </div>
                `
        });
    }

    // adds dashes to card number input
    cardNumberInput.addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, ''); // Remove all non-digit characters
        value = value.match(/.{1,4}/g)?.join('-') || ''; // Group every 4 digits with a dash

        e.target.value = value;
    });



    unitPrice.addEventListener('input', getTotalPrice);
    quantityInput.addEventListener('input', getTotalPrice);
    purchaseForm.addEventListener('submit', submitPurchaseForm);




    function getTotalPrice() {
        let totalPrice = document.querySelector("#totalPrice");

        if (quantityInput.value && unitPrice.value) {
            totalPrice.value = parseFloat(quantityInput.value) * parseFloat(unitPrice.value);
        }
    }

    function submitPurchaseForm() {

        modalBody.innerHTML =   `<div class="d-flex align-items-center flex-column">
                                    <h3 class="mb-3">We are processing your payment</h3>
                                    <div class="spinner-border text-center" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>`


        setTimeout(() => {
            modalBody.innerHTML = `
                <div class="d-flex justify-content-center">
                    <div class="mt-3 mb-5 fade-in">
                        <h1 class="text-center">Payment Successful</h1> 
                        <h4>Your gift card has been sent to your e-mail!</h4>
                    </div>
                </div>
                `
        }, 3000)
    }
});