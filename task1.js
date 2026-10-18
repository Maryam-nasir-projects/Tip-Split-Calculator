function tipAmount(bill, percent) {
    return bill * percent / 100;
}

function splitBill(bill, people, percent) {
    if (bill <= 0 || people < 1) {
        return "Invalid input";
    }

    const tip = tipAmount(bill, percent);
    const totalBill = bill + tip;

    return totalBill / people;
}

function tipRating(percent) {
    if (percent < 10) {
        return "Low";
    } else if (percent <= 20) {
        return "Standard";
    } else {
        return "Generous";
    }
}

function summary(bill, people, percent) {
    const amountPerPerson = splitBill(bill, people, percent);
    const rating = tipRating(percent);

    if (amountPerPerson === "Invalid input") {
        return "Invalid input";
    }

    return `${people} people pay Rs ${amountPerPerson} each (${rating} tip).`;
}


function roundUp(amount) {
    return Math.ceil(amount);
}


// Test cases
console.log("Test 1:", tipAmount(2000, 10));
console.log("Test 2:", splitBill(3000, 3, 10));
console.log("Test 3:", tipRating(25));
console.log("Test 4:", tipRating(5));
console.log("Test 5:", summary(3000, 3, 10));
console.log("Test 6:", splitBill(0, 3, 10));
console.log("Test 7:", splitBill(2000, 0, 10));
console.log("Test 8:", summary(1500, 2, 15));
console.log("Test 9:", roundUp(1100.25));
console.log("Test 10:", roundUp(99.10));

