/*
// Selecciona el elemento donde se mostrarán los datos
const dataContainer = document.querySelector('#gatos');

// Variable para almacenar los datos cargados
let catFacts = [];

// Función para cargar y mostrar los datos
async function loadCatFacts() {
  // Carga dos nuevos datos de la API
  const newFacts = await Promise.all([loadCatFact(), loadCatFact()]);
  // Almacena los nuevos datos en catFacts
  catFacts = newFacts;

  // Muestra los siguientes datos
  showNextFacts();
}

// Función para cargar un dato
async function loadCatFact() {
  // Realiza una solicitud a la API para obtener un dato de gato
  const response = await fetch('https://catfact.ninja/fact?max_length=80');
  // Verifica si la respuesta de la solicitud es exitosa
  if (!response.ok) {
    throw new Error("Error HTTP: " + response.status);
  }
  // Convierte la respuesta en formato JSON
  const data = await response.json();
  // Retorna el dato obtenido de la API
  return data.fact;
}

// Función para mostrar los siguientes datos
function showNextFacts() {
  // Obtiene los primeros dos datos almacenados en catFacts
  const fact1 = catFacts.shift();
  const fact2 = catFacts.shift();

  // Crea elementos <article> para mostrar los datos
  const factElement1 = document.createElement('article');
  factElement1.classList.add("px-4", "d-inline");
  factElement1.textContent = fact1;

  const factElement2 = document.createElement('article');
  factElement2.classList.add("px-4", "d-inline");
  factElement2.textContent = fact2;

  // Agrega los elementos al contenedor
  dataContainer.appendChild(factElement1);
  dataContainer.appendChild(factElement2);

  // Agrega un controlador de eventos para detectar cuándo los elementos salen de la pantalla
  factElement1.addEventListener('animationend', removeElement);
  factElement2.addEventListener('animationend', removeElement);

  // Verifica el estado de los elementos en cada cuadro de animación
  requestAnimationFrame(checkElementsState);
}

// Función para eliminar un elemento
function removeElement(event) {
  // Elimina el elemento del DOM
  event.target.remove();
}

// Función para verificar el estado de los elementos
function checkElementsState() {
  // Obtiene todos los elementos <article> dentro del contenedor
  const elementos = dataContainer.querySelectorAll('article');

  // Verifica si hay elementos presentes
  if (elementos.length > 0) {
    // Obtiene el primer y último elemento
    const firstElement = elementos[0];
    const lastElement = elementos[elementos.length - 1];

    // Obtiene las posiciones de los elementos en relación a la ventana
    const rectFirst = firstElement.getBoundingClientRect();
    const rectLast = lastElement.getBoundingClientRect();

    // Verifica si ambos elementos han salido completamente de la pantalla
    if (rectFirst.right <= 0 && rectLast.right <= 0) {
      // Elimina los elementos del DOM
      removeElement({ target: firstElement });
      removeElement({ target: lastElement });
      // Carga nuevos datos y muestra los siguientes
      loadCatFacts();
    } else {
      // Si los elementos aún no han salido completamente de la pantalla, se verifica en el próximo cuadro de animación
      requestAnimationFrame(checkElementsState);
    }
  } else {
    // Si no hay elementos presentes en el contenedor, carga nuevos datos y muestra los siguientes
    loadCatFacts();
  }
}

// Cargar los datos iniciales
loadCatFacts();
*/
// Selecciona el elemento donde se mostrarán los datos
const dataContainer = document.querySelector('#gatos');

// Variable para almacenar los datos cargados
let catFacts = [];

// Función para cargar y mostrar los datos
async function loadCatFacts() {
  // Carga dos nuevos datos de la API
  const newFacts = await Promise.all([loadCatFact(), loadCatFact()]);
  // Almacena los nuevos datos en catFacts
  catFacts = newFacts;

  // Muestra los siguientes datos
  showNextFacts();
}

// Función para cargar un dato
async function loadCatFact() {
  // Realiza una solicitud a la API para obtener un dato de gato
  const response = await fetch('https://catfact.ninja/fact?max_length=80');
  // Verifica si la respuesta de la solicitud es exitosa
  if (!response.ok) {
    throw new Error("Error HTTP: " + response.status);
  }
  // Convierte la respuesta en formato JSON
  const data = await response.json();
  // Retorna el dato obtenido de la API
  return data.fact;
}

// Función para mostrar los siguientes datos
function showNextFacts() {
  // Crea elementos <article> para mostrar los datos y los almacena en un array
  const factElements = catFacts.map(createFactElement);

  // Agrega cada elemento al contenedor y asigna un controlador de eventos para cuando termina la transición
  factElements.forEach((element) => {
    dataContainer.appendChild(element);
    element.addEventListener('animationend', () => removeElement(element));
  });

  // Verifica el estado de los elementos en cada cuadro de animación
  requestAnimationFrame(checkElementsState);
}

// Función para crear un elemento con un dato
function createFactElement(fact) {
  // Crea un elemento <article>
  const factElement = document.createElement('article');
  // Agrega clases al elemento para estilizarlo
  factElement.classList.add("px-4", "d-inline");
  // Asigna el texto del dato al elemento
  factElement.textContent = fact;
  // Retorna el elemento creado
  return factElement;
}

// Función para eliminar un elemento
function removeElement(element) {
  // Elimina el elemento del DOM
  element.remove();
}

// Función para verificar el estado de los elementos
function checkElementsState() {
  // Obtiene todos los elementos <article> dentro del contenedor
  const elements = dataContainer.querySelectorAll('article');

  // Verifica si hay elementos presentes
  if (elements.length > 0) {
    // Obtiene el último elemento del array
    const lastElement = elements[elements.length - 1];
    // Obtiene la posición del último elemento en relación a la ventana
    const rectLast = lastElement.getBoundingClientRect();

    // Verifica si el último elemento ha salido completamente de la pantalla
    if (rectLast.right <= 0) {
      // Elimina todos los elementos del DOM
      elements.forEach(removeElement);
      // Carga nuevos datos y muestra los siguientes
      loadCatFacts();
    } else {
      // Si el último elemento no ha salido completamente de la pantalla, verifica en el próximo cuadro de animación
      requestAnimationFrame(checkElementsState);
    }
  } else {
    // Si no hay elementos presentes en el contenedor, carga nuevos datos y muestra los siguientes
    loadCatFacts();
  }
}

// Cargar los datos iniciales
loadCatFacts();
