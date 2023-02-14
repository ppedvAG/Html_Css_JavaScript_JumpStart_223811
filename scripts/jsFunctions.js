// Funktionen
// Syntax:
// function identifier(optional Parameter) { code_Block }
// Funktionen, die zu einem Objekt gehören nennen wir Methoden, z.b. console.log()
// Funktionen werden aufgerufen indem wir ihren Identifier schreiben und runde Klammern anhängen und dabei wenn nötig Parameter übergeben

console.log("Hallo Welt!"); // Funktionsaufruf mit Parameter
console.clear(); // Funktionsaufruf ohne Parameter
// Löscht den Verlauf der Konsole


//Einfach eFunktion ohne Rückgabe

function greeter() {
    console.log("Hallo Welt!");
}

greeter();

// Erstellen einer einfachen Funktion mit Rückgabe:

function greetPerson(name) {
    return "Hello " + name;
}


// Funktionne können auch anderen FUnktionen als Parameter übergeben werden
let greeterVariable = greetPerson("Max Mustermann");
console.log(greeterVariable);


//kompakter -> Verschachtelt

console.log(greetPerson("Max Mustermann"));

function multiplier(numOne, numTwo) {
    return numOne * numTwo;
}

let ergebnis1 = multiplier(5,25);
let ergebnis2 = multiplier(7, 54);

//verwenden ein Alias für die Methode multiplier
let testX = multiplier;

//testX ruft multiplier auf.
console.log(testX(12,44)); //528



// default-Werte
// Falls eine Funktion mit zu wenigen Parametern aufgerufen wird, können wir sie mit default-Parametern, also Fallback werten

function divide(numOne = 1, numTwo = 1) {
    return numOne / numTwo;
}

 console.log(divide(16, 4)); //4



 // Kontrollstrukturen
// if
// Bedingter Block
// Syntax:
// if (Bedingung) {Code_Block}
// Können bleiebig verschachtelt werden
// Der Blockinhalt wird nur ausgeführt, falls die Bedingung wahr ist
let numberOne = 20;
let numberTwo = 30;

if (numberOne < numberTwo) {
    console.log(`${numberOne} ist kleiner als ${numberTwo}`);
}
// else if muss immer auf if folgen
else if (numberOne > numberTwo) {
    console.log(`${numberOne} ist größer als ${numberTwo}`);
}
// else wird ausgeführt falls der vorangehende if Block oder else if block falsch war
else {
    console.log(`${numberOne} ist gleich groß wie ${numberTwo}`);
}


// Vergleichs-Operatoren in JS:

// == selber Wert
// === selber Wert und selber Typ
// != ungleicher Wert
// !== ungleicher Wert oder Typ
// Empfehlung zu === und !==
// < kleiner als
// > größer als
// <= kleiner gleich
// >= größer gleich

// Logische Operatoren:
// && logisches und 1 < 2 && 1 < 3 => Nur true wenn beide bedingungen zutreffen
// || logische oder 1 < 4 || 1 < -10 => true sobald eine der Bedingungne wahr ist

let myNumber = 123;

//Condition is true
if (myNumber == 123){
    console.log("myNumber ist ein integer mit 123");
}

//Condition is true
if (myNumber == "123"){
    console.log("myNumber ist ein String mit 123");
}

//Condition is true
if (myNumber === 123)
    console.log("myNumber wird auf den Wert UND Typ(Number) geprüft")

//Condition is false
if (myNumber === "123")
        console.log("myNumber wird auf den Wert UND Typ(String) geprüft")





// Übung 1:
// Schreibe eine Funktion, die prüft ob eine Zahl gerade oder ungerade ist
// Rückgabe soll true oder false sein







// Ternary Operator
// Kurzschreibweise für if-Blöcke
// Syntax: (Bedingung) ? code-Block falls Wahr : code-Block falls falsch

let day = "freitag";

let output = day == "freitag" ? "Wochenende" : "Kein Wochenende";
console.log(output);



// switch-Case
// Vergleicht den Wert einer Variable oder direkt einen Wert mit mehreren Möglichkeiten

//Syntax:
/* switch(variable) {
    case 1:
        code Fall 1;
        break;
    case 2:
        code Fall 2;
        break;
    default:
        code Falls kein Fall eintrat
}
*/

numberOne = 20;

switch (numberOne) {
    case 10:
        console.log("Zahl ist 10");
        break; // Ist wichtig, da sonst alles nach dem ersten eingetretenen Fall ausgeführt wird
    case 20:
        console.log("Zahl ist 20");
        break;
    case 30:
        console.log("Zahl ist 30");
        break;
    default:
        console.log("Zahl hat einen unerwarteten Wert");
    // Beim default benötigen wir kein break, da danach nichts mehr kommt
}


switch (numberOne) {
    case 10:
    case 20:
        console.log("Zahl ist 10 oder 20");
        break;
    case 30:
        console.log("Zahl ist 30");
        break;
    default:
        console.log("Zahl hat einen unerwarteten Wert");
    // Beim default benötigen wir kein break, da danach nichts mehr kommt
}



// Loops | Schleifen in JS
// Ermöglichen das mehrfache ausführen eines Code-Blocks bis ein bestimmte Bedingung eintritt
// Kopfgesteuerte Schleife
// for
// while
// Bedingung der Schleife steht in der Kopfzeile
// Kann sein, dass die Schleife gar nicht ausgeführt wird

// Fußgesteuerte Schleife:
// do...while
// Bedingung erst in der Fußzeile geprüft
// Schleife wird immer mindestens einmal ausgeführt



// for-Schleife
// Syntax:
/* 
for(zähler, Bedingung, In/Dekrement) {
    Code-Block
}
*/


function countTo(limit) {
    console.log("Schleife startet:");
    for (let i = 0; i <= limit; i++) {
        console.log(i);
        // console.log("Test"); Würde nach jeder Zahl ausgegeben werden
    }
    console.log("Schleife beendet");
}
countTo(10); //Zählw mit der Schleife bis 10 


// Funktionieren wie eine Uhr
// Bevor der Stunden zeiger eins weiter tickt muss der Minuten Zeiger eine Umdrehung machen und bevor der Minuten Zeiger eins weiter tickt muss der Skeunden Zeiger einen ganzen Durchlauf machen
function clock() {
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 60; j++) {
            for (let k = 0; k < 60; k++) {
                console.log(`${i}:${j}:${k}`);
            }
        }
    }
}

clock();