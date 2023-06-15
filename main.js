const camping = {
    name: "Glamping Reservation Hotel",
    reservations: []
};

alert("Welcome to Glamping Reservation Hotel");

function makeReservation() {
    let name, reservationDate, numberOfGuests, price, numberOfNights;

    while (true) {
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

            alert("The price per night is 38 dollars")
            price = prompt(" Please write yes on the following box");

            if (price === "YES" || price === "Yes" || price === "yes") {

                break;
            } else {
                alert("Apologize for the inconvenience. Returning to menu.");
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
        reservationInfo += "Total Price: " + totalPrice + "\n";

        reservationInfo += "Price: Confirmed\n";

        console.log(reservationInfo);

        const continueReservation = confirm("Do you want to make another reservation?");
        if (!continueReservation) {
            break;
        }
    }
}

makeReservation();
console.log(camping.reservations);
