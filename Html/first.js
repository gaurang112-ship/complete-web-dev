function calculateTip(billAmount, tipPercentage) {
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return Number(totalAmount.toFixed(2));
}

console.log(calculateTip(90 , 0.10))
