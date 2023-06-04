// isNaN intenta convertir el parámetro pasado a un número. Si el parámetro no se puede convertir, devuelve true; en caso contrario, devuelve false. 
// Esta función es útil ya que el valor NaN no puede se probado correctamente con operadores de igualdad.

// como usarlo 
// function milliseconds(x) {
//     if (isNaN(x)) {
//       return 'Not a Number!';
//     }
//     return x * 1000;
//   }
  

alert("welcome to Glamping Reservation hotel")
function makeReservation() {


    let name;
    while (true) {
        name = prompt("what is your name?");
        if (!isNaN(name)) {
            alert("Name invalid. Please write letters")
        } else {
            alert("Thank you for your input")
            break;
        }

    }
    let reservationDate;
    while (true) {
        reservationDate = prompt("What is your reservation date? (MM/DD/YYYY)");


        const dateObj = new Date(reservationDate);

        // Verificar si la instancia de Date es válida
        if (dateObj.toString() === "Invalid Date") {
            alert("Invalid Date. please input in the following format MM/DD/YYYY.");
        } else {
            alert("Thanks for your answer.");
            break; // Salir del bucle mientras la fecha sea válida
        }
    }

    let numberOfGuests;
    while (true) {
        numberOfGuests = parseInt(prompt("how many guests are traveling with you?"))
        if (isNaN(numberOfGuests)) {
            alert("Guest is invalid. Add a number of guest traveling with you ")
        } else {
            alert("Thank you for your input")
            break;
        }
    }
    let reservationInfo = " Reservation Details:\n ";
    reservationInfo += "Name " + name + "\n";
    reservationInfo += "Date " + reservationDate + "\n";
    reservationInfo += "Number of Guest: " + numberOfGuests + "\n";

    return reservationInfo;
}

console.log(makeReservation());