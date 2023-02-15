//Objects

// An sich eine Sammlung von Schlüssel:Wert Paaren
// Diese Schlüssel nenn wir Properties
// Außer wenn es sich bei den Werten dieser properties um Funktionen handelt 
// Dann sprechen wir von Methoden

//Wie initialisiere ich ein Objekt? 
// 3 versch. Möglichkeiten

const objectLiteral = {
    "name" : "Max Mustermann",
    "age" : 21,
    "employed" : true,
    "cityOfOrigin" : "Munich"
};

//Property-Namen können auch ohne "" oder '' definiert werden 
// Anführungszeichen sind erst absolut notwendig wenn es sich beim prop-Namen nicht um einen gültigen JS Identifier handelt
// Kann mit oder ohne trailing Komma definiert werden

//2. constructor

const construtedObject = new Object();
construtedObject.MeinText = "123 Hallo Welt";
construtedObject.MeineZahl = 55;
construtedObject["cityOfOrigin"] = "Berlin";

//3. shorthand 

let person2Name = "Erika Musterfrau";
let person2Age = 22;
let person2Employed = true;
let person2CityofOrigin = "Vienna";

const shorthandObject = {
    person2Name,
    person2Age,
    person2Employed,
    person2CityofOrigin
};

// Beim shorthand wird nun der Identifier der Variable zum Namen des Props und der Wert der Variable wird der Wert des Props

//Wie greife ich auf die Properties eines Objektes zu? 
//1. Bracket-Notation 
console.log(objectLiteral["name"]); //=> Max Mustermann
console.log(shorthandObject["person2Name"]); // Erika Musterfrau

//1. dot-Notation (verwendete Variante)
console.log(objectLiteral.name); //Max Mustermann
console.log(shorthandObject.person2Name);

// Wir weisen einfach einem Prop einen Wert zu
// Falls das prop noch nicht exisitiert wird es neuerstellt
// Falls es bereits existiert wird es überschrieben

// Wie erstelle ich einen Objekt-Constructor?
// Constructor sind fast normale funktionen
// Die Besonderheiten: this und kein return



// Methode Introduce erstellen
function introduce() {
    console.log(`Hallo! Mein Name ist ${this.name} und ich bin ${this.age} Jahre alt.`);
}

//Constructor definiert die Properties des Objectes mit 
//this.[KeyName] = [Value] 
//Methode Indroduce wirde dem Objekt angefügt unter dem Namen 'introduceSelf'

function Person(nameProp, age, employed, cityOfOrigin) {
    this.name = nameProp;
    this.age = age;
    this.employed = employed;
    this.cityOfOrigin = cityOfOrigin;
    //Wir legen die Function introduce als introduceSelf ab
    this.introduceSelf = introduce;
}

const person1 = new Person("Kevin Kühnert", 40, true, "Berlin");
const person2 = new Person("Franz Beckenbauer", 76, false, "Tegernsee");
console.log(person1.name);
person1.introduceSelf();

//Moderene Variante 
//syntatic suger, d.h es ist eine rein syntaktische Verbesserung mit keiner Änderung an der Funktionalität

class PersonNeu {
    xyz = 124; //Propertiy 
    constructor(name, age, employed, cityOfOrigin) {
        this.name = name;
        this.age = age;
        this.employed = employed;
        this.cityOfOrigin = cityOfOrigin;
    }

    introduceSelf() {
        console.log(`Hallo! Mein Name ist ${this.name} und ich bin ${this.age} Jahre alt.`);
    }
}

const person3 = new PersonNeu("Dagobert Duck", 56, true, "Entenhausen");
person3.introduceSelf();
person3.xyz = 999;



//Übung: 
//Erstellen eine Klasse Auto

//Folgende Properties soll die Klasse Auto besitzen: 
// - marke,
// - modell,
// - engineStatus boolean (true/false)
// - maxSpeed 
// - currSpeed

//Wenn das Objekt erstellt wird, soll das Auto der 'engineStatus' false sein -> Also ausgeschalteter Motor und die aktuelle Geschwindigkeit ist 0 

 //Methoden 
 //onOff -> Motor ein- und auschalten
 //accelerate(newSpeed) -> Neue Geschwindigkeit darf höchsten maxSpeed UND Variable newSpeed darf nicht unter 0 sein. 
 //                        Wichtig ist->BEschleunigen geht nur, wenn der Moto eingeschaltet ist. 



class Auto {
    constructor(marke, modell, maxSpeed) {
        this.marke = marke;
        this.modell = modell;
        this.maxSpeed = maxSpeed;
        this.currSpeed = 0;
        this.engineStatus = false;
    }

    onOff() {
        if (this.engineStatus) //Wenn engineStatus === true 
            this.engineStatus = false; //dann schalten wir die Engine aus
        else 
            this.engineStatus = true; 

        //Kurzschreibvariante
        //! -> sagt aus, dass das Gegenteil verwendet wird (true wird zu false, false wird zu true)
        //this.engineStatus = !this.engineStatus; //was false ist wird true. Was true ist wird false 
    }

    accessor(newSpeed) {
        //Motor muss eingeschaltet sein 
        if (this.engineStatus) {
            //Wenn die neue Geschwindigkeit höher als die maximale Geschwindikeit ist, wird maxSpeed zugewiesen 
            if (newSpeed > this.maxSpeed) {

                this.currSpeed = this.maxSpeed;
            }
            else if(this.maxSpeed < 0) {
                this.currSpeed = 0;
            }
            else {
                this.currSpeed = newSpeed;
            }
        }
        else
        {
            console.log("Motor ist nicht an")
        }
    }
}


//person1 instanceof Person -> prüfen, ob die instance person1 vom Typ Person ist (ergebnis bekommen wir true/false zurück gegeben)
console.log(person1 instanceof Person); //true
console.log(person1 instanceof Object); //true
console.log(person1 instanceof PersonNeu); //false

//Wie können wir herausfinden, ob eine Property auch sich in der Klasse befindet

console.log("age" in person1);
console.log("haribo" in person1);

// console.table(objekt) stellt uns unser Objekt und dessen Eigenschaften in einer Tabelle dar
console.table(person3);