function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productInputNumber = productInput.value;
    if (isIncreasing) {
        productInputNumber = parseInt(productInputNumber) + 1;
    } else if (productInputNumber > 0) {
        productInputNumber = parseInt(productInputNumber) - 1;
    }
    productInput.value = productInputNumber;
    // update amount
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productInputNumber * price;

    calculateTotal();
}
// handle phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})

// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})

function calculateTotal() {
    const phoneInput = document.getElementById('phone-total');
    const phoneTotal = parseInt(phoneInput.innerText);
    const caseInput = document.getElementById('case-total');
    const caseTotal = parseInt(caseInput.innerText);
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;

    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}