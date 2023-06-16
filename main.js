const camping = {
    name: "Glamping Reservation Hotel",
    reservations: [],
    products: [
        { id: 1, name: "Tent", price: 50 },
        { id: 2, name: "Sleeping Bag", price: 20 },
        { id: 3, name: "Camp Stove", price: 30 },
        { id: 4, name: "Lantern", price: 15 },
        { id: 5, name: "Wine Package", price: 55 },
        { id: 6, name: "Internet", price: 76 },

    ]
};

alert("Welcome to Glamping Reservation Hotel");

function makeReservation() {
    let name, reservationDate, numberOfGuests, price, numberOfNights;


    while (true) {
        name = prompt("What is your name?");
        if (!isNaN(name)) {
            alert("Name invalid. Please write letters.");
        } else {
            alert("Thank you for your input.");
            break;
        }
    }

    while (true) {
        reservationDate = prompt("What is your reservation date? (MM/DD/YYYY)");

        const dateObj = new Date(reservationDate);

        if (dateObj.toString() === "Invalid Date") {
            alert("Invalid Date. Please input in the following format MM/DD/YYYY.");
        } else {
            alert("Thanks for your answer.");
            break;
        }
    }

    while (true) {
        numberOfGuests = parseInt(prompt("How many guests are traveling with you?"));
        if (isNaN(numberOfGuests)) {
            alert("Guest count is invalid. Please enter a number of guests.");
        } else {
            alert("Thank you for your input.");
            break;
        }
    }

    while (true) {
        numberOfNights = parseInt(prompt("How many nights are you staying?"));
        if (isNaN(numberOfNights) || numberOfNights <= 0) {
            alert("Invalid number of nights. Please enter a positive number.");
        } else {
            break;
        }
    }

    const pricePerNight = 38;
    const totalPrice = numberOfNights * pricePerNight;

    while (true) {
        alert("The price per night is $38");
        price = prompt("Please enter 'YES' if you accept the price.");

        if (price === "YES" || price === "Yes" || price === "yes") {
            break;
        } else {
            alert("Apologize for the inconvenience. Returning to the menu.");
            return makeReservation();
        }
    }

    const reservation = {
        name: name,
        date: reservationDate,
        guests: numberOfGuests,
        price: price,
        numberOfNights: numberOfNights,
        totalPrice: totalPrice
    };

    camping.reservations.push(reservation);

    let reservationInfo = "Reservation Details:\n";
    reservationInfo += "Name: " + name + "\n";
    reservationInfo += "Date: " + reservationDate + "\n";
    reservationInfo += "Number of Guests: " + numberOfGuests + "\n";
    reservationInfo += "Number of Nights: " + numberOfNights + "\n";
    reservationInfo += "Total Price: $" + totalPrice + "\n";
    reservationInfo += "Price: Confirmed\n";

    console.log(reservationInfo);


    const continueReservation = confirm("Do you want to make another reservation?");
    if (continueReservation) {
        makeReservation();
    } else {
        showProducts();
    }

}
function showProducts() {
    alert("Welcome to our products section! Press 8 to exit the cart menu");

    let cart = [];

    while (true) {
        let productIndex = prompt("Enter the ID of the product you want to add to your cart:\n" + getProductsList());

        if (productIndex === null || productIndex === "8") {
            break;
        }

        productIndex = parseInt(productIndex);
        const product = camping.products.find((p) => p.id === productIndex);

        if (product) {
            cart.push(product);
            alert(product.name + " added to your cart!");
        } else {
            alert("Invalid product ID. Please try again.");
        }
    }

    if (cart.length > 0) {
        showCart(cart);
    } else {
        alert("Your cart is empty.");
    }
}


function showCart(cart) {
    let cartInfo = "Your Cart:\n";
    let totalPrice = 0;

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        cartInfo += product.name + " - $" + product.price + "\n";
        totalPrice += product.price;
    }

    cartInfo += "Total Price: $" + totalPrice;

    alert(cartInfo);

    console.log("Cart Information:\n" + cartInfo);
    // console.log("Cart Items:");
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        console.log(product.name + " - $" + product.price);
    }

    console.log("Total Price: $" + totalPrice);
}

function getProductsList() {
    let productsList = "";
    for (let i = 0; i < camping.products.length; i++) {
        const product = camping.products[i];
        productsList += product.id + ". " + product.name + " - $" + product.price + "\n";
    }
    return productsList;
}
makeReservation();
//muestra el array de reservaciones si hay + de uno. 
console.log(camping.reservations);






