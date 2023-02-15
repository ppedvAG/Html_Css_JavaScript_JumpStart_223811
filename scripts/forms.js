let username = document.querySelector("#username");

//für Ausgabe 
let output = document.querySelector("#output");


username.addEventListener("keyup", e => {
    console.log(e.target.value); //Zeigt an, welcher Key in der Textbox eingegeben wurde
    output.innerHTML = e.target.value;
})

// change => wenn der inhalt verändert wurde
// click => wenn es angeklickt wird
// keyup/keydown beim loslassen/drücken der Taste
// blur => Verlassen des Elements
// focus => Betreten des Elements, also wenn es im focus steht


//Alternative zu Listener-Events -> https://www.w3schools.com/jsref/event_onkeyup.asp


// Bubbling zum Vorteil nutzen um weniger Code zu schreiben

let wrapper = document.querySelector("#wrapper"); //div mit id="wrapper" wird selektiert 

document.body.addEventListener("click", e=> {alert("Der body-Bereich wurde geklickt")}, true);

wrapper.addEventListener("click", e=>{alert("div mit der id='wrapper' wurde geklickt")}, true);


wrapper.addEventListener("click", e => {
    alert(`Button ${e.target.value} wurde geklickt`);
});



function sayHi() {
    console.log("Hi");
};


//Hinzufügen eines Event
document.querySelector("#d").addEventListener("click", sayHi);

//Removen des Click Events von Button D
document.querySelector("#d").removeEventListener("click", sayHi);