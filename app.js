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