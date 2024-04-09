import './style.css';

// Step 1: Identificare il bottone nell'HTML
// Step 1-a: Assegnare l'id (cambiaSfondoBtn) all'elemento button all'interno del file index.html
// Step 1-b: Utilizzando il metodo document.getElementById, creare un riferimento al bottone.

// correzioni: far assegnare l'id direttamente agli studenti andando sul file html.

const cambiaSfondoBtn = document.getElementById('cambiaSfondoBtn');

/// Definiamo un array di colori che verranno utilizzati per cambiare lo sfondo
const colori = ['azure', 'pink', 'yellow', 'purple', 'green', 'red'];

// Step 2: Tenere traccia dell'indice del colore corrente

// Qui viene inizializzata una variabile indiceColore che tiene traccia dell'indice del colore scelto.

let indiceColore = 0;

// correzione: usare una frase più esplicativa, es rimaniamo in ascolto del click.

// Step 3: Aggiungere un event listener al click del bottone
// Viene aggiunto un event listener al bottone. Quando il bottone viene cliccato, la funzione cambiaSfondo viene chiamata.

cambiaSfondoBtn.addEventListener('click', cambiaSfondo);

// Step 4: Definire la funzione per cambiare lo sfondo

function cambiaSfondo() {
  // Selezioniamo un colore dall'array utilizzando l'indice
  const colore = colori[indiceColore];
  // incrementiamo di uno indiceColore per selezionare il colore successivo al prossimo click
  indiceColore = indiceColore + 1;

  // se indiceColore è maggiore della lunghezza dell'array ( cioè il numero di elementi contenuti al suo interno) allora impostiamo nuovamente indiceColore a 0, cioè il suo punto di partenza.

  if (indiceColore > colori.length - 1) {
    indiceColore = 0;
  }

  // Step 5: Identificare lo sfondo della pagina tramite il suo id

  const sfondo = document.getElementById('sfondoPagina');
  sfondo.style.backgroundColor = colore;
}
