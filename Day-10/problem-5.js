function processCart(cart, coupon) {

    // Rule 1: Validate input

    if (!Array.isArray(cart)) return "Invalid Input";

    // Step 1: Initialize total

    let total = 0;

    // Step 2: Process each cart item

    for (let item of cart) {

        // Rule 2: Validate cart item

        if (item && typeof item.name === "string" && typeof item.price === "number") {

            total += item.price;

        }

    }

    // Step 3: Calculate discount based on coupon

    let discount = 0;

    if (coupon === "DISCOUNT10") {

        discount = total * 0.1; // 10% off

    } else if (coupon === "FLAT500" && total >= 2000) {

        discount = 500; // Flat 500 off

    }

    // Step 4: Calculate payable amount

    const payable = total - discount;

    // Step 5: Return final result

    return { total, discount, payable };

}

// Example Usage

console.log(processCart([

    { name: "Laptop", price: 50000 },

    { name: "Mouse", price: 500 },

], "DISCOUNT10"));