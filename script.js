var colors = ["yellow", "blue", "red", "orange"];
var i = 0;

while (i < colors.length) {
  console.log(colors[i]);
  i++;
}

for (i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach((element) => console.log(element));

// Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
// for loop 3, while loop 4

// Hoeveel regels neemt mijn forEach method in beslag?
// 1

// Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop?
// Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
// Array method is makkelijker te lezen. In een oogopslag weet je wat er staat. Het is ook sneller en simpeler om te schrijven.

// Kun je een array method gebruiken op een object? Het antwoord is nee.
// Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
// Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?

var obj = {
  name: "Yousaf",
  age: "41",
  hometown: "Amsterdam",
  girlfriend: "Paula",
  hobby: "Gaming",
};

for (var propt in obj) {
  console.log(propt + ": " + obj[propt]);
}
