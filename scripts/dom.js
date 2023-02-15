// Wie benutze ich die Dom?

// Im Browser einfach über die Dev-Tools ein Element auswählen dieses Element ist dann in der Konsole immer über $0 ansprechbar

// Im Code:
// Wir nennen das auswählen eines Elementes auch traversing the dom, da wir den Baum durchsteigen
// Die folgenden Methoden sind auf jede node anwendbar, wobei die ausgewählte node dann als startpunkt genommen wird
// AM Anfang haben wir noch keine eigenen nodes


// Wir müssen auf das document Object zurückgreifen
// Das document Object ist unser html-Tag


//Im Object document befindet sich das DOM 
let firstLi = document.querySelector("li"); //Gibt mir das erste li-Element zurück
console.log(firstLi);

//firstLi.textContent = "HTML-Root Element";


let mainHeading = document.querySelector("#main-heading"); //id 
mainHeading.textContent = "Hier wurde das DOM manipuliert"

let list = document.querySelector(".list"); // => Gibt mir das erste Element mit der Klasse list zurück


//Es ist auch möglich das wir alle li-Tags selektieren 
let allLi = document.querySelectorAll("li");



// Im Idealfall weiß ich welche ELemente ich benötige und gebe ihnen eine id damit ich sie leicht ansprechen kann
// 2. getElement/sBy...
firstLi = document.getElementsByTagName("li")[0]; // Gibt uns eigentliche alle li ELemente zurück, mit [0] greifen wir auf das erste zu
allLi = document.getElementsByTagName("li"); // gibt uns alle lis zurück



// Gibt uns das Element mit der ID  main-heading zurück
mainHeading = document.getElementById("main-heading"); 

// Wenn wir alle ELemente mit einer Klasse erhalten wollen:
list = document.getElementsByClassName("list"); 

// Wenn wir nur das erste ELement mit der Klasse benötigen
list = list[0];

//schauen uns vom ersten Element die Childs an
console.log(list.children); // => Array mit allen li's




// Direkte Nachbarn:
// node.nextElementSibling
// node.previousElementSibling
// Geben uns den nächsten oder vorherigen Nachbarn zurück
// Falls der nicht exisitiert wird null zurückgegeben

let nextLi = firstLi.nextElementSibling; // => li mit "Parent"
let previousLi = firstLi.previousElementSibling; // => null

console.log(firstLi);
console.log(nextLi);



// Textinhalt der node
// node.innerHTML => Gesamter Textinhalt inklusive der HTML-Tags, Kommentare und Zeilenumbrüche
// node.TextContent => Gesamte Textinhalt ohne Kommentare und HTML-Tags
// node.innerText => Nur der gerenderte Textinhalt

// In den meisten Fällen reicht innerText
// Können auch neuzugewiesen werden um den Text der Seite zu verändern

// node.style.CssAtribute
// So können wir jegliche Style-Regelen anpassen
//! Achtung: CSS-Attribute werden in camelCase geändert
// z.B. wird aus font-size => fontSize
firstLi.style.fontSize = "42px";


//ID Löschen
mainHeading.id = "";

//ID hinzufügen
firstLi.id = "firstListObject";



//Klasse hinzufügen 
list.classList.add("test2");

//Klassen löschen
list.classList.remove("test");

//true oder false erhalten wird zurück 

console.log(list.classList.contains("test")); //sollte false zurückgegeben 

//HTML Element aus der Webseite entfernen -> li mit Root-Element wird nicht mehr in der li-Liste angezeigt 
list.removeChild(firstLi);

// Falls ich den parent einer Node nicht als Variable gespeichert habe, kann ich das parent Attribut nutzen
allLi[4].parentElement.removeChild(allLi[4]);


//erstellen ein li-Tag HTML-Element 
let newLi = document.createElement("li");

newLi.innerText = "Ich bin das neue ListItem"; 

list.appendChild(newLi);

// Wenn wir präziser bestimmen wollen wo es eingefügt wird:
// parentNode.insertbefore(neuesElement, referenzElement);
list.insertBefore(newLi, allLi[2]);





// Wenn wir ein Element durch ein anderes Ersetzen wollen
// Syntax: parentNode.replaceChild(neueElement, zuErsetzendeElement)
newLi = document.createElement("li");
newLi.innerText = "Ich bin auch neu!";
list.replaceChild(newLi, allLi[1]); // ersetzt die li mit "Child..." durch die neue li