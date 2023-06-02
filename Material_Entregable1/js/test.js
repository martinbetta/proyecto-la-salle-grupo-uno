
/*
// Selecciona el elemento donde se mostrarán los datos
const dataContainer = document.querySelector('.marquee');

// Frases personalizadas
const customFacts = [
    "Frase personalizada 1",
    "Frase personalizada 2",
    "Frase personalizada 3",
    "Frase personalizada 4",
    "Frase personalizada 5",
    "Frase personalizada 6"
];

let observer; // Variable para almacenar el IntersectionObserver

// Función para el callback del Intersection Observer
function observerElement(entries) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            console.log("Elemento eliminado:", entry.target);
            entry.target.remove();
        }
    });

    // Cargar nuevos datos solo si no hay suficientes elementos visibles en el contenedor
    if (dataContainer.children.length < 4) {
        console.log("Cargando nuevos datos...");
        loadCatFacts();
    }
}

// Función para cargar y mostrar los datos
function loadCatFacts() {
    console.log("loadCatFacts() llamada");
    // Eliminar los elementos hijos existentes
    while (dataContainer.firstChild) {
        dataContainer.firstChild.remove();
    }

    // Obtener frases personalizadas aleatorias
    const randomFacts = getRandomFacts(4);
    console.log("Frases personalizadas seleccionadas:", randomFacts);

    randomFacts.forEach(fact => {
        const factElement = document.createElement('span');
        factElement.classList.add("px-4");
        factElement.textContent = fact;
        dataContainer.appendChild(factElement);
        console.log("Elemento agregado:", factElement);
    });

    // Si el Intersection Observer no ha sido inicializado, crearlo y observar el contenedor
    if (!observer) {
        observer = new IntersectionObserver(observerElement, {
            root: null,
            rootMargin: '0px',
            threshold: 1.0 // Se activa cuando cualquier parte del elemento esté fuera de la pantalla
        });
    }

    // Observar los nuevos elementos agregados
    dataContainer.querySelectorAll('span').forEach(factElement => {
        observer.observe(factElement);
    });
}

// Función para obtener frases personalizadas aleatorias
function getRandomFacts(count) {
    const randomFacts = [];
    const availableFacts = [...customFacts];

    for (let i = 0; i < count; i++) {
        if (availableFacts.length === 0) {
            break;
        }

        const randomIndex = Math.floor(Math.random() * availableFacts.length);
        const fact = availableFacts.splice(randomIndex, 1)[0];
        randomFacts.push(fact);
    }

    return randomFacts;
}

// Cargar los datos iniciales
loadCatFacts();
*/