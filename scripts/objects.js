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

    //ermittelung der höchsten Nummer muss programmiert werden

    return highestNum;
}


const testarray = [10, 12, 17, 22, 44, 65];
let highestNumber = highestNumberInArray(testarray);
