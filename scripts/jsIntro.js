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
// https://www.tutorialspoint.com/escape-characters-in-javascript
console.log("Er sagt: \"Hallo \nWelt!\"");


//number
//Zahlen mit oder ohne Komma erlaubt

let zahl = 12;
let zahl2 = -12.5;
//Maximaler Wert: 1.7976931348623157e+308

// Artihmetischen Oepratoren:
// + Plus
// - Minus
// * Mal
// / Geteilt

zahl *= 4;
//zahl = zahl * 4;

// 5 Modulo Teilung mit Rest

console.log(254 * 13 % 4); //Rest 2 


//Inkrementieren und Dekrementieren
//Übersetzt beschrieben: Um die Zahl 1 erhöhen oder minimieren. 

zahl2++; //-11.5

let zahl3 = 10;
console.log(zahl3++); //10

zahl3 = 10;
console.log(++zahl3); //11


//boolean 
//true und false

//Wird meistens für Vergleiche und if-Statmentents benutzt
let nichts = null; //Null gibt an, dass der Variable kein Wert zugewiesen wurde 


//undefinided 
let test;  //Variable wurde definiert, aber nie initialisiert.

// NaN
// Not a Number
// Für ungültige Mathematische Operationen
console.log(test + 50);


// typeof(variable/wert)
console.log(typeof(firstName)); //string
// erlaubt das prüfen von Datentypen



// Scope
// Unterschied zwischen let, const und var

let x;
var y;
const z = 5;

// 1. Unterschied: const muss sofort mit einem Wert initialisiert werden
// var und let können später initalisiert werden:

x = 15;
y = 12;

// 2. Unterschied: var legt ein globales Objekt an
// let hinhegen nicht






{
    //lokal (nur im Block verwendbar)
    let block1 = "Hallo!";
    
    //global
    var block2 = "Bye!";
    console.log("Innerhalb von Code-Block: " + block1);
}

if (x === 15){
    //CodeBlock und definiert durch zwei geschweifte Klammern 
    //Die let - Variable gilt nur in dem If-Statement
    y = 123;
    console.log(y);
    let eineLetVariable = 123;
}


function divide(numOne = 1, numTwo = 1) {
   let abc = "abc"; // gilt nur innerhalb der Funktion
} //let Variablen werden beim Verlassen der Methode aufgeräumt

console.log(block1); // Hier scheitert der aufruf, da block1 nur innerhalb des blockes von Zeile 137 bis 141 bekannt ist
// Uncaught ReferenceError: block1 is not defined <anonymous> http://127.0.0.1:5500/scripts/jsIntro.js:145
console.log(block2); // Das funktioniert, da var den Blockscope nicht kennt 

// Scopes in Javascript:
// Globaler Scope, => Variable ist im gesamten Script aufrufbar
// Function Scope => Variable ist innerhalb der gesamten Funktion aufrufbar
// Block Scope => Variable ist nur in dem Block in dem sie definiert wurde aufrufbar

// Definiere zwei Variablen vom Type Number
// Führe iene beliebige Arithmetische Operation mit den beiden Variablen aus und weise das Ergebnis einer Konstanten zu
// Lass die Konstante in der Konsole ausgeben