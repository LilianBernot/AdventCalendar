// Automatise la création de footer "Retour à l'accueil"

const footer = document.createElement("FOOTER");
footer.setAttribute("id", "myFooter");
document.body.appendChild(footer);

let newParagraph = document.createElement("P");
let newLink = document.createElement('a');
let desiredLink = `../index.html`;
newLink.setAttribute('href', desiredLink);
let desiredText = String("Retour au calendrier !");
newLink.innerHTML = desiredText;
newParagraph.append(newLink);

document.getElementById("myFooter").appendChild(newParagraph);
