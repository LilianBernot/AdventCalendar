// Création des 24 links vers les pages

let liste = [1, 9, 11, 14, 3, 19, 15, 6, 
            21, 24, 17, 8, 23, 5, 13, 18, 
            20, 4, 10, 22, 12, 7, 2, 16];

const conteneurDiv = document.querySelector('#conteneur');

for(var i= 0; i < liste.length; i++)
{
    let newDiv = document.createElement('div');

    let desiredLink = `recettes/jour_${liste[i]}.html`;
    let newLink = document.createElement('a');
    newLink.setAttribute('href', desiredLink);
    let desiredText = String(liste[i]);
    newLink.innerHTML = desiredText;
    newDiv.append(newLink);

    conteneurDiv.append(newDiv);
};

// Randomisation de la couleur de hover 

// function randomColor() {
//     let color = [];
//     for (let i = 0; i < 3; i++) {
//       color.push(Math.floor(Math.random() * 256));
//     }
//     return 'rgb(' + color.join(', ') + ')';
//   } 
  
//   document.addEventListener("mouseover", function(){
//     document.body.style.backgroundColor = randomColor();
//   });
