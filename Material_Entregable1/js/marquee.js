// Selecciona el elemento donde se mostrarán los datos
const dataContainer = document.querySelector('#gatos');

// Variable para almacenar los datos cargados
let catFacts = [];

// Función para cargar y mostrar los datos
async function loadCatFacts() {
  const newFacts = await Promise.all([loadCatFact(), loadCatFact()]);
  catFacts = newFacts;

  showNextFacts();
}

// Función para cargar un dato
async function loadCatFact() {
  const response = await fetch('https://catfact.ninja/fact?max_length=80');
  if (!response.ok) {
    throw new Error("Error HTTP: " + response.status);
  }
  const data = await response.json();
  return data.fact;
}

// Función para mostrar los siguientes datos
function showNextFacts() {
  const fact1 = catFacts.shift();
  const fact2 = catFacts.shift();

  const factElement1 = createFactElement(fact1);
  const factElement2 = createFactElement(fact2);

  dataContainer.appendChild(factElement1);
  dataContainer.appendChild(factElement2);

  factElement1.addEventListener('transitionend', removeElement);
  factElement2.addEventListener('transitionend', removeElement);

  // Verificar el estado de los elementos en cada cuadro de animación
  requestAnimationFrame(checkElementsState);
}

// Función para crear un elemento con un dato
function createFactElement(fact) {
  const factElement = document.createElement('article');
  factElement.classList.add("px-4", "d-inline");
  factElement.textContent = fact;
  return factElement;
}

// Función para eliminar un elemento
function removeElement(event) {
  event.target.remove();
}

// Función para verificar el estado de los elementos
function checkElementsState() {
  const elementos = dataContainer.querySelectorAll('article');

  if (elementos.length > 0) {
    const firstElement = elementos[0];
    const lastElement = elementos[elementos.length - 1];

    const rectFirst = firstElement.getBoundingClientRect();
    const rectLast = lastElement.getBoundingClientRect();

    if (rectFirst.right <= 0 && rectLast.right <= 0) {
      removeElement({ target: firstElement });
      removeElement({ target: lastElement });
      loadCatFacts();
    } else {
      requestAnimationFrame(checkElementsState);
    }
  } else {
    loadCatFacts();
  }
}

// Cargar los datos iniciales
loadCatFacts();
