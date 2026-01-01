function calculateDiscount(price, discountPercent) {

    // Check if both inputs are numbers
    if (typeof price !== 'number' || typeof discountPercent !== 'number') {
        return "Invalid Input";
    }

    // Check if any input is negative
    if (price < 0 || discountPercent < 0) {
        return "Invalid Input";
    }

    // Ensure discount percent does not exceed 100
    if (discountPercent > 100) {
        return "Invalid Input";
    }

    // Calculate discount amount
    const discountAmount = (price * discountPercent) / 100;

    // Calculate final price after discount
    const finalPrice = price - discountAmount;

    return finalPrice;
}


console.log(calculateDiscount(1000, 10));
console.log(calculateDiscount(500, 0));
console.log(calculateDiscount(200, 50));
console.log(calculateDiscount(-100, 10));
console.log(calculateDiscount(100, 150));