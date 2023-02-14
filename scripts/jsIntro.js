// Ich bin ein einzeiliges Kommentar

/*
    Ich bin ein mehrzeiliges 
    Kommentar
*/

//So wenig Kommentare wie möglich, so viele wie nötig
//Könenn Texte, variable Zahlen usw. direkt in der Konsole der dev-Tools des Broswer ausgeben
console.log("Hallo Welt");
console.error("Es gab ein Fehler");
console.info("Ich bin eine Information");

//Variablen definieren

//moderne Variante
let firstName = "Max";

//Syntax:
//let identifier = Wert

//identifier muss mit einem Buchstaben, _ oder $ beginnen 
//z.B:
//let _lastName = "Mustermann";
//let $city = "Berlin";

let age = 18;
//Variablen die mit let definiert wurde deüfen verändert werden 
firstName = "Maxi"; 

//alternative zu let: 

const lastName = "Mustermann";
//funktioniert wie letz, kann aber nicht neuzugewiesen werden. Konstante Variablen haben nur einen Wert 

//Wie geben wir eine Variable in der Konsole aus? 
console.log(firstName);

//Mit weiterem String kombinieren
console.log("Hallo " + firstName + " " + lastName);

// Interpolierter String: 
console.log(`Hallo ${firstName} ${lastName}`);


//String Zeichenfolge

//Strings werden von "" oder von ''
console.log('Er sagt: "Hallo Welt!"')
console.log("Er sagt: 'Hallo Welt!'")

// Geht nicht:
// console.log("Er sagt: "Hallo Welt!"")

// Wenn wir die selben Anführungszeichen wie zum definieren des Strings benutzen wollen:
// Der Backslash ist der "Escape-Character" symbolisiert, dass der nachfolgende Buchstabe/Character als Textwert verwendet wird
console.log("Er sagt: \"Hallo \nWelt!\"");



