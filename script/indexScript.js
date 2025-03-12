// funzioni scroll

var nav = document.getElementById('navBar');
for (var i = 0; i < nav.children.length; i++) {
    e = nav.children[i];
    e.addEventListener('click', function() {
        // get the id of the clicked element
        var id = this.getAttribute('id');

        // reformat the id to match the id of the destination element
        id = id.substring(0, id.length - 3);
        id = 'scrollDest_' + id;

        // get the element with the id
        var dest = document.getElementById(id);
        // scroll to the element
        dest.scrollIntoView({ behavior: 'smooth' });
    });
}

// funzioni cursore

console.clear();

const TAIL_LENGTH = 20;

const cursor = document.getElementById('cursor');

let mouseX = 0;
let mouseY = 0;

let cursorCircles;
let cursorHistory = Array(TAIL_LENGTH).fill({x: 0, y: 0});

function onMouseMove(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
}

function initCursor() {
  for (let i = 0; i < TAIL_LENGTH; i++) {
    let div = document.createElement('div');
    div.classList.add('cursor-circle') ;
    cursor.append(div);
  }
  cursorCircles = Array.from(document.querySelectorAll('.cursor-circle'));
}

function updateCursor() {  
  cursorHistory.shift();
  cursorHistory.push({ x: mouseX, y: mouseY });
    
  for (let i = 0; i < TAIL_LENGTH; i++) {
    let current = cursorHistory[i];
    let next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];
    
    let xDiff = next.x - current.x;
    let yDiff = next.y - current.y;
    
    current.x += xDiff * 0.35;
    current.y += yDiff * 0.35;
    cursorCircles[i].style.transform = `translate(${current.x}px, ${current.y}px) scale(${i/TAIL_LENGTH})`;  
  }
  requestAnimationFrame(updateCursor)
}

document.addEventListener('mousemove', onMouseMove, false);

initCursor();
updateCursor();

// funzione animazione sfondo

// Funzione per creare l'animazione Matrix
function createMatrixEffect() {
  const matrix = document.getElementById('matrix');
  matrix.innerHTML = ''; // Rimuovi le colonne esistenti
  const columns = Math.floor(window.innerWidth / 40); // Aggiorna la larghezza della colonna

  for (let i = 0; i < columns; i++) {
      const column = document.createElement('div');
      column.classList.add('matrix-column');
      column.style.left = `${i * 40}px`; // Aggiorna la larghezza della colonna
      column.style.animationDuration = `${Math.random() * 5 + 5}s`;

      for (let j = 0; j < 5; j++) { // Riduci il numero di caratteri per colonna
          const char = document.createElement('span');
          char.textContent = Math.random() > 0.5 ? '0' : '1';
          char.style.animationDelay = `${Math.random() * 10}s`;
          column.appendChild(char);
      }

      matrix.appendChild(column);
  }
}

document.addEventListener('DOMContentLoaded', createMatrixEffect);
window.addEventListener('resize', createMatrixEffect);
