function processCart(cart, coupon) {
    if (!Array.isArray(cart)) return "Invalid Input";

    let total = 0;

    for (let item of cart) {
        if (item && typeof item.name === "string" && typeof item.price === "number") {
            total += item.price;
        }
    }

    let discount = 0;

    if (coupon === "DISCOUNT10") discount = total * 0.1;
    else if (coupon === "FLAT500" && total >= 2000) discount = 500;

    const payable = total - discount;

    return { total, discount, payable };
}

// Example Usage
console.log(processCart([
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
], "DISCOUNT10"));