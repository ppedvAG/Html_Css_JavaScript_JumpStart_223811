//Vordefinierte Objekte

//string
//arrays
//Math
//Date

let testString = "Ich bin ein Teststring";

//Eigenschaften / Properties 
testString.length; //Gibt die Anzahl der Zeichen aus
console.log(testString.length);

//Wie sprechen einzelen Buchstaben in einem String an? 

console.log(testString[0]); // Erster Buchstabe ist das 'I'
console.log(testString[testString.length - 1]); //Gibt mir den letzten Buchstaben 

//string teststring = "abcdefghij"; //10 Zeichen
//teststring[0] = a
//teststring[1] = b
//teststring[2] = c
//teststring[3] = d
//teststring[4] = e
//teststring[5] = f
//teststring[6] = g
//teststring[7] = h
//teststring[8] = i
//teststring[9] = j

//Wenn wir den letzten Buchstaben eines String auslesen wollen, müssen wir: teststring.length - 1 verwenden. 


//Wenn wir einen Index eingeben, der zu hoch ist:

console.log(testString[123]); //undefined -> kein Buchstabe ist hier hinterlegt 



//Methoden des String-Objects

console.log("Großbuchstaben: " + testString.toUpperCase()); //Zeige Teststring als Großbuchstaben an 
console.log("Kleinbuchstaben: " + testString.toLowerCase()); //Zeige Teststring als Kleinbuchstaben an 

//slice - Methode 
//Syntax: identifier.slice(startpunkt, ?ende);
let part1String = testString.slice(0,12);
console.log("Slice-Beispiel 1: " + part1String);

//Wenn klar ist, dass wir einen Teil-String von dem Index 0 (Anfang des String) bis 12 Zeichen lange auslesen wollen 
let part2String = testString.slice(12); //Starte von Index 0 und nehme die nächsten 12 Zeichen 


//split - Methode 
// identifier.split(?Seperator)
let stringArr = testString.split(" ");

console.table(stringArr);


//CSV-Files: 
//firstname;lastname;city
//Max;Mustermann;Berlin
//Haary;Weinfuhrt;Nürnberg
//Otto;Walkes;Friesland


//indentifier.charCodeAt(index);

let unicodeC = testString.charCodeAt(1);

// identifier.charAt(index);
// Gibt uns den Buchstaben an der Stelle zurück

// identifier.indexOf(suchbegriff, ?starposition)
// identifier.lastIndexOf(suchbegriff, ?startposition)
// indexOf gibt die erste gefundene Indexstelle des suchbegriffes zurück
// lastIndexOf() gibt die letzte gefunden Stelle zurück
// Falls der suchbegriff nicht enthalten ist geben beide -1 zurück

// Bsp: "Ich" => "Groß: 1 | Klein: 2"
function countCase(inputString) {
    let countLower = 0;
    let countUpper = 0;

    //Wir gehen mit einer Schleife durch den kompletten inputString

    for (let i = 0; i < inputString.length; i++) {
        let currentChar = inputString[i];

        //prüfen ob der aktuelle Buchstabe ein Großbuchstabe ist
        if (currentChar.toUpperCase() === currentChar)
            countUpper++;
        //Prüfen ob der aktuelle Buchstabe ein Kleinbuchstabe ist 
        else if (currentChar.toLowerCase() === currentChar)
            countLower++
    }

    console.log(`Groß: ${countUpper} | Klein: ${countLower}`)
}


//Array


//Sammlung von mehrere Werten innerhalb einer Variable


//array literal
let literalArr1 = [1,2,3,4,5,6];
let literalArr2 = ['A', 'B','C'];

let literalArr3Mix = [1,2,3,'Test', true, false];
let literalArr4Verschachtelt = [1,2,3,"Wert", true, [1,5,10]]; //Bsp. für eoin zweidimensionales Array

//constructor
let constructedArr = new Array(1,2,3,4,5,6,7,8);

//Ansprechen einzelner Elemnte über die Bracket - Notation 
//literalArr3Mix = [1,2,3,'Test', true, false];

console.log(literalArr3Mix[5]); //false
console.log(literalArr3Mix[0]); //1
console.log(literalArr3Mix[1]); //2

console.log(literalArr3Mix.length); //Anzahl der Felder eines Arrays -> Wert: 6

//Zuweisen von Werten in ein Array
literalArr3Mix[0] = 1111;
console.log(literalArr3Mix[0]); //1111


//array-Methode: contact -> Zusammenführen zweier Arrays 

//Beispiel-Arrays: 
//let literalArr1 = [1,2,3,4,5,6];
//let literalArr2 = ['A', 'B','C'];

//neuesArray wird aus literalArr1 und literalArr2 zusammengesetzt
let neuesArray = literalArr1.concat(literalArr2);
console.table(neuesArray);

// arr.indexOf(Suchwert, ?Start)
// arr.lastIndexOf(Suchwert, ?Start)
// Nicht geeignet für Objekte 


let objectArr = [{"name" : "Max Mustermann", "age": 21}, {"name" : "Kevin", "age": 39}]


// Für Objekte:
// arr.findIndex(function)

// Am einfachsten mit lambdas
// Iteriert über jedes Element im Array
// https://bobbyhadz.com/blog/javascript-array-find-index-of-object-by-property

console.log(objectArr.findIndex(object => {
    return object.name === "Kevin" && object.age === 39;
}));


// arr.join(seperator)
// Gibt uns einen neuen String zurück der aus den Array Elementen getrennt vom Seperator besteht
// Falls wir keinen Seperator übergeben wird ein , benutzt

console.log(neuesArray.join(";"));


// arr.reverse()
// Dreht die reihenfolge des Arrays um
//! Verändert das bestehende Array
neuesArray.reverse();
console.table(neuesArray);


// arr.sort(?function)
// Sortiert das Array anhand der Funktion
//! Verändert das bestehende Array
//! Wird erst alles in strings umwandeln und dann dementsprechend alphabetisch sortieren

let numberArray = [1,900,1000,999];
numberArray.sort();
console.log("sort - result: ");
console.table(numberArray); // => 1, 1000, 900, 999

console.log("Absteigend sortieren");

numberArray.sort(
    (a, b) => b - a // sortiert absteigend
)
console.table(numberArray); // 1000, 999, 900, 1
// a - b würde aufsteigend sortieren


//HINZUFGEN von Elemente

// arr.unshift(el1, el2, el3....elN);
// Fügt die Elemente am Anfang des Arrays ein
// Gibt die neue Länge des Arrays zurück
//! Verändert das bestehende Array
console.log("unshift fügt am Anfang des Arrays folgende Felder ein: 10000, 5000, 2500")
console.table(numberArray.unshift(10000, 5000, 2500)); // => Anzahl der kompletten Array-Felder -> 7


// arr.push(el1, el2, el3....elN)
// Fügt die Elemente am Ende des Arrays an
// Gibt die neue Länge des Arrays zurück
//! Verändert das bestehende Array

//Werte werden am Ende des Arrays stehen-> 0, -1, -25
console.log("Push (0,-1,-25)");
console.log(numberArray.push(0, -1, -25)); // => 10
console.table(numberArray);

//ENTFERNEN von Elementen 

//arr.shift() 
//Entfernt das erste Element aus Array und gibt dieses zurück 
console.log(numberArray.shift()); // => 10000 wid entfernt (an Index: 0)



console.log("vor Pop-Befehl")
console.table(numberArray);

//Am Ende eines Arrays können wir auch den Eintrag entfernen mithilfe von arr.pop
console.log(numberArray.pop()); //-25 wird entfernt 
console.log("nach Pop-Befehl")
console.table(numberArray);


//Alternativ  -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//PUSH: fügt einen Eintrag am Ende der Liste hinzu
const animals = ['pigs', 'cat', 'sheep'];

const count = animals.push('cows');
console.log(count);
// Expected output: 4
console.table(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]




//POP: nimmt den letzten Eintrag in der Liste weg
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]



//SHIFT (Nimmt am Anfang weg)

const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
console.table(array1);
// Expected output: Array [2, 3]


//UNSHIFT (Fügt am Anfang hinzu)
const array2 = [1, 2, 3];

console.log(array2.unshift(4, 5));
// Expected output: 5

console.log(array2);
// Expected output: Array [4, 5, 1, 2, 3]




// Übung:
// Erstelle eine Funktion, die ein beliebig langes Array aus Zahlen erhalten kann 
// und uns dann nur die höchste Zahl aus dem Array zurückgibt

function highestNumberInArray(arr) {
    let highestNum = 0;

    //Gehen durch jede Zahl und prüfen gegenüber highestNum ob die Zahl höher ist, wenn ja, wird arr[i] der highestNum zugewiesen 
    for (let i = 0; i < arr.length; i++) {
        //...hier schreibst du deinen Quellcode
    
        if (highestNum < arr[i]){
            highestNum = arr[i];
        }
           
    }
    

    return highestNum;
}


const testarray = [10, 12, 17, 22, 44, 65];
let highestNumber = highestNumberInArray(testarray);


//MATH - Object

// Rundungsfunktionen
// Math.round(number) => Rundet auf die nächste Ganzzahl
// Kaufmännische runden (Beispiel: 2.5 => 3 / 2.4 => 2)

console.log(Math.round(2.5), Math.round(2.4)); //Ausgabe 3 2

// Math.ceil(number) => Rundet auf nächsthöhere oder gleiche Ganzzahl
console.log(Math.ceil(2.1), Math.round(3.0)); //Ausgabe: 3 3


// Math.floor(number) => rundet auf die nächst niedrigere oder gleiche Ganzzahl
console.log(Math.floor(2.99), Math.floor(2.0)); // 2 2 



// Math.pow(x,y) => x^y
console.log(Math.pow(2, 4)); //(2*2*2*2) => 16 

// Math.sqrt(number) => Quadratwurzel von number
console.log(Math.sqrt(16)); // => 4 


// Math.abs(number) => Gibt Betrag von number zurück
console.log(Math.abs(-5), Math.abs(12)); // 5 12

// Math.min()
// Math.max()
// Gibt uns jeweils die höchste bzw kleinste der übergebenen Zahlen zurück
console.log(Math.min(12, 8, -1), Math.max(100, 50, 230)); // -1 230
// Akzeptiert keine Arrays als Input



//Math.random() zwischen 0 und 0.99999999

//maxNum soll angeben, was die höchste Zufallszahl sein soll 
function ZufallszahlenGenerator(maxNum) {
    let zufallzahl = Math.random() * maxNum;
    console.log("Zufallszahl (rau): " + zufallzahl);
    
    let gerundeteZufallszahl = Math.floor(zufallzahl) +1;
    console.log("gerundete Zufallszahl: " + gerundeteZufallszahl);
    return gerundeteZufallszahl;
}

function randomNumberGenerator(maxNum) {
    return Math.floor((Math.random() * maxNum) + 1);
    // Generiert zufällige Zahlen zwischen 1 und maxNum
}


//Number

// Erlaubt es uns Strings in Zahlen umzuwandeln
// Und zusätzlich lässt es uns einige Randbedingungen prüfen


//NUMBER-PRÜFUNGEN 
// Number.isNaN(variable)
// Gibt einfach true oder false zurück jenachdem ob NaN übergeben wurde

function typeOfNaN(x) {
    if (Number.isNaN(x)) {
      return 'Number NaN';
    }
    if (isNaN(x)) {
      return 'NaN';
    }
  }
  
  console.log(typeOfNaN('100F'));
  // Expected output: "NaN"
  
  console.log(typeOfNaN(NaN));
  // Expected output: "Number NaN"

// Number.isFinite(number)
// Prüft ob die Zahl endlich ist
console.log(Number.isFinite(1 / 0));
// Expected output: false

console.log(Number.isFinite(10 / 5));
// Expected output: true

console.log(Number.isFinite(0 / 0));
// Expected output: false

// Number.isInteger(number)
// Prüft ob die Zahl ganzzahlig ist

function fits(x, y) {
    if (Number.isInteger(y / x)) {
      return 'Fits!';
    }
    return 'Does NOT fit!';
  }
  
  console.log(fits(5, 10));
  // Expected output: "Fits!"
  
  console.log(fits(5, 11));
  // Expected output: "Does NOT fit!"



  //PARSEN 
// Number.parseFloat(variable)
// Gibt die Eingabe als Gleitkommzahl zurück

// Number.parseInt(Variable)
// Gibt die Zahl als Ganzzahl zurück

// Falls die Zahl nicht umgewandelt werden kann wird NaN zurückgegeben
// Seperator muss ein . sein, ansonten wird alles danach abgetrennt
// Wenn eine Textfolge mit einer Zahl beginnt wird die Zahl erfolgreich umgewandelt und der Text abgetrennt
// Falls die Zeichenfolge mit Text beginnt und Zahlen enthält wird NaN zurückgegebn


//Number.parseInt ->Beispiel:

function roughScale(x, base) {
    const parsed = Number.parseInt(x, base);
    console.log(parsed);
    if (Number.isNaN(parsed)) {
      return 0;
    }
    return parsed * 100;
  }
  
  console.log(roughScale('0xF', 16));
  // Expected output: 1500
  
  console.log(roughScale("321", 2));
  // Expected output: 0


//Date-Object
// Zählt intern mit ms, die seit dem 01.01.1970 vergangen sind


let today = new Date();  // Gibt das heutige Datum inklusive Timezone zurück

let trialDate = new Date(2022); //01.01.2022
let trialDate2 = new Date(2022, 6); // 01.07.2022
// Monat beginnt bei 0

// Mittels Datumstring:
let trialDate3 = new Date("07-05-2022"); // 05.07.2022
// yyyy-MM-dd klappt in jedem Browser
// MM-dd-yyyy klappt in chrome, aber nicht in firefox



// Methoden mit get und set
// Jahr
trialDate.getFullYear(); // => Jahr als vierstellige Zahl
trialDate.setFullYear(2021); // Ändert das Jahr auf 2021
// Monat
trialDate.getMonth(); // => Monat zwischen 0 und 11 (0 = Januar)

// Tag
trialDate.getDate(); // => Tag zwischen 1 und 31

// Stunden
trialDate.getHours(); // => Stunden zwischen 0 und 23 

// Minuten
trialDate.getMinutes(); // => Minuten zwischen 0 und 59

// Sekunden
trialDate.getSeconds(); // => Sekunden zwischen 0 und 59



// Millisekunden
trialDate.getMilliseconds(); // Millisekunden zwischen 0 999
trialDate.getTime(); // => Milisekunden seit 01.01.1970

// Ohne set

// Wochentag
trialDate.getDay(); // => Gibt uns eine Zahl zwischen 0 und 6
// Sonntag = 0 | Samstag = 6

// Date.now()
Date.now(); // Gibt das derzeitige Datum als ms seit dem 01.01.1970 zurück