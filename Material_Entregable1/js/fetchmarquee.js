//Fetch Marquesina

const url = "https://catfact.ninja/fact?max_length=200";
const div = document.querySelector("#cats-facts")

async function loadFact() {
    const resp = await fetch(url)
    const json = await resp.json()
    return json.fact
}

(async function () {
    await showFact();
  })();

async function showFact() {

    const fact = await loadFact()
    const article = document.createElement("article")
    article.classList.add("d-inline")
    article.innerText = fact
    div.appendChild(article)
}


async function cleanupOne() {
    if (div.firstChild) {
        div.removeChild(div.firstChild)
    }
}


setInterval(showFact, 10000)
setTimeout(() => setInterval(cleanupOne, 10000), 20000)

/*
const url = "https://catfact.ninja/fact";
const div = document.querySelector("#cats-facts");

async function loadFact() {
    const resp = await fetch(url);
    const json = await resp.json();
    return json.fact;
}




async function showFact() {
    const fact = await loadFact();
    const article = document.createElement("article");
    article.classList.add("marquee");
    article.innerText = fact;
    div.innerHTML = ""; // Limpiar el contenido anterior
    div.appendChild(article); // Agregar el nuevo elemento
}

setInterval(showFact, 5000);
*/
//Funciona mejor pero no llega a visualizarse bien
/*
const url = "https://catfact.ninja/fact";
const div = document.querySelector("#cats-facts");
const factsToDisplay = 4;
let facts = [];

async function loadFacts() {
    const response = await fetch(url);
    const data = await response.json();
    const fact = data.fact;
    facts.push(fact);

    if (facts.length > factsToDisplay) {
        facts.shift(); // Eliminar el dato más antiguo si se supera la cantidad deseada
    }
}

async function showFacts() {
    await loadFacts();

    const article = document.createElement("article");
    article.classList.add("marquee");
    article.innerText = facts.join(" ");

    div.innerHTML = "";
    div.appendChild(article);
}

setInterval(showFacts, 3000);
*/
//Practicamente mismo resultado que el de arriba
/*
const url = "https://catfact.ninja/fact";
const div = document.querySelector("#cats-facts");
const factsToDisplay = 4;
let facts = [];

async function loadFacts() {
    const response = await fetch(url);
    const data = await response.json();
    const fact = data.fact;
    facts.push(fact);

    if (facts.length > factsToDisplay) {
        facts.shift(); // Eliminar el dato más antiguo si se supera la cantidad deseada
    }
}

async function showFacts() {
    await loadFacts();

    const article = document.createElement("article");
    article.classList.add("marquee");
    article.innerText = facts.join(" ");

    div.innerHTML = "";
    div.appendChild(article);

    setTimeout(showFacts, 5000);
}

showFacts();
*/
// no se visualiza bien
/*
const url = "https://catfact.ninja/fact";
const div = document.querySelector("#cats-facts");
const factsToDisplay = 4;
let facts = [];

async function loadFacts() {
    const response = await fetch(url);
    const data = await response.json();
    const fact = data.fact;
    facts.push(fact);

    if (facts.length > factsToDisplay) {
        facts.shift(); // Eliminar el dato más antiguo si se supera la cantidad deseada
    }
}

function getDelayForFact(fact) {
    const charactersPerSecond = 20; // Velocidad de desplazamiento en caracteres por segundo
    const delayPerCharacter = 1500 / charactersPerSecond;
    const delayForFact = fact.length * delayPerCharacter;

    return Math.max(delayForFact, 5000); // Establecer un tiempo mínimo de retraso de 5 segundos
}

async function showFacts() {
    await loadFacts();

    const article = document.createElement("article");
    article.classList.add("marquee-text");
    article.innerText = facts.join(" "); //Unir los textos separados por espacio
    const delay = getDelayForFact(facts[0]);

    div.innerHTML = "";
    div.appendChild(article);

    setTimeout(showFacts, delay);
}

showFacts();
*/
/*
const url = "https://catfact.ninja/fact";
const div = document.querySelector("#cats-facts");
const factsToDisplay = 4;
let facts = [];

async function loadFacts() {
    const response = await fetch(url);
    const data = await response.json();
    const fact = data.fact;
    facts.push(fact);

    if (facts.length > factsToDisplay) {
        facts.shift(); // Eliminar el dato más antiguo si se supera la cantidad deseada
    }
}

function getDelayForFact(fact) {
    const containerWidth = div.offsetWidth;
    const factWidth = fact.length * 10; // Asumimos 10px de ancho por cada carácter
    const pixelsPerSecond = 50; // Velocidad de desplazamiento en píxeles por segundo
    const delayInSeconds = (containerWidth + factWidth) / pixelsPerSecond;

    return delayInSeconds * 1000; // Convertir a milisegundos
}

async function showFacts() {
    await loadFacts();

    const article = document.createElement("article");
    article.classList.add("marquee-text");
    article.innerText = facts.join(" ");
    const delay = getDelayForFact(facts[0]);

    div.innerHTML = "";
    div.appendChild(article);

    setTimeout(showFacts, delay);
}

showFacts();
*/
// no funciona bien

/*
const url = "https://catfact.ninja/fact";
const div = document.querySelector("#cats-facts");
const factsToDisplay = 4;
const facts = [];

async function loadFacts() {
    const response = await fetch(url);
    const data = await response.json();
    const fact = data.fact;
    facts.push(fact);

    if (facts.length > factsToDisplay) {
        facts.shift();
    }
}

function createMarqueeElement(fact) {
    const span = document.createElement("span");
    span.classList.add("marquee-text");
    span.innerText = fact;
    return span;
}

async function showFacts() {
    await loadFacts();

    div.innerHTML = "";
    for (const fact of facts) {
        const span = createMarqueeElement(fact);
        div.appendChild(span);
    }

    setTimeout(showFacts, 5000);
}

showFacts();
*/
//Código trabajado con profe
/*
// Selecciona el elemento donde se mostrarán los datos

const dataContainer = document.querySelector('#cats-facts');


// Crear un IntersectionObserver para detectar cuando el primer dato haya pasado la pantalla
const observer = new IntersectionObserver((entries, observer) => {
    console.log(entries)
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            // Remover el primer dato y cargar otro nuevo

            entry.target.remove();
            observer.unobserve(entry.target)
            loadCatFact()
        }
    });
});

// Función para obtener los datos de la API
async function getCatFacts() {
    try {
        //const response = await fetch('https://catfact.ninja/fact');
        // const data = await response.json();
        // return data.fact;
        return "https://catfact.ninja/fact"
    } catch (error) {
        console.log('Error al obtener los datos:', error);
    }
}

// Función para cargar y mostrar los datos
async function loadCatFacts() {
    for (let i = 0; i < 4; i++) {
        await loadCatFact()
    }
}
async function loadCatFact() {

    const fact = await getCatFacts();
    const factElement = document.createElement('span');
    factElement.classList.add("marquee-text", "px-4");
    factElement.textContent = fact;
    dataContainer.appendChild(factElement);
    observer.observe(factElement)

}

// Cargar los datos iniciales
loadCatFacts();
*/
//Frases creadas por mi, no se visualiza bien
/*
// Selecciona el elemento donde se mostrarán los datos
const dataContainer = document.querySelector('#cats-facts');

// Crear un IntersectionObserver para detectar cuando el primer dato haya pasado la pantalla
const observer = new IntersectionObserver((entries, observer) => {
    console.log(entries)
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            // Remover el primer dato y cargar otro nuevo
            entry.target.remove();
            observer.unobserve(entry.target);
            loadCatFact();
        }
    });
});

// Frases creadas por ti
const customFacts = [
    "¡Los gatos son increíbles!",
    "Los gatos son adorables mascotas.",
    "A los gatos les encanta jugar con pelotas.",
    "Los gatos son curiosos por naturaleza."
];

// Función para cargar y mostrar los datos
function loadCatFact() {
    const randomFact = customFacts[Math.floor(Math.random() * customFacts.length)];
    const factElement = document.createElement('span');
    factElement.classList.add("marquee-text", "px-4");
    factElement.textContent = randomFact;
    dataContainer.appendChild(factElement);
    observer.observe(factElement);
}

// Cargar los datos iniciales
function loadCatFacts() {
    for (let i = 0; i < 4; i++) {
        loadCatFact();
    }
}

loadCatFacts();
*/
/* muestra 4 frases aleatorias pero cuando pasan todas las frases no cambian y vuelven las mismas
sin cambiar, otras veces cuando ha desaperecido la primera frase el resto va cambiando.
otras veces funciona como se debe.
*/
/*
// Selecciona el elemento donde se mostrarán los datos
const dataContainer = document.querySelector('#cats-facts');

// Crear un IntersectionObserver para detectar cuando el primer dato haya pasado la pantalla
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            // Remover el primer dato y dejar de observar
            entry.target.remove();
            observer.unobserve(entry.target);

            // Cargar un nuevo dato solo si no se ha alcanzado el límite de frases mostradas
            if (dataContainer.querySelectorAll('span').length < 4) {
                loadCatFact();
            }
        }
    });
});

// Frases personalizadas
const customFacts = [
    "Frase personalizada 1",
    "Frase personalizada 2",
    "Frase personalizada 3",
    "Frase personalizada 4",
    "Frase personalizada 5",
    "Frase personalizada 6"
];

// Función para cargar y mostrar los datos
function loadCatFact() {
    // Obtener una frase personalizada aleatoria
    const randomIndex = Math.floor(Math.random() * customFacts.length);
    const customFact = customFacts[randomIndex];

    // Crear un nuevo elemento con la frase personalizada
    const factElement = document.createElement('span');
    factElement.classList.add("marquee-text", "px-4");
    factElement.textContent = customFact;

    // Agregar el nuevo elemento al contenedor y observarlo
    dataContainer.appendChild(factElement);
    observer.observe(factElement);
}

// Cargar los datos iniciales
function loadCatFacts() {
    for (let i = 0; i < 4; i++) {
        loadCatFact();
    }
}

loadCatFacts();
*/
//Cuando pasa la primera frase el resto empiezan a cambiar constantemente
/*
// Selecciona el elemento donde se mostrarán los datos
const dataContainer = document.querySelector('#cats-facts');

// Crear un IntersectionObserver para detectar cuando los datos hayan pasado la pantalla
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            // Remover el dato que ha pasado y dejar de observarlo
            entry.target.remove();
            observer.unobserve(entry.target);

            // Cargar un nuevo dato solo si no se ha alcanzado el límite de 4 elementos mostrados
            if (dataContainer.children.length < 4) {
                loadCatFact();
            }
        }
    });
});

// Frases personalizadas
const customFacts = [
    "Frase personalizada 1",
    "Frase personalizada 2",
    "Frase personalizada 3",
    "Frase personalizada 4",
    "Frase personalizada 5",
    "Frase personalizada 6"
];

// Función para cargar y mostrar los datos
function loadCatFact() {
    // Obtener una frase personalizada aleatoria
    const randomIndex = Math.floor(Math.random() * customFacts.length);
    const customFact = customFacts[randomIndex];

    // Crear un nuevo elemento con la frase personalizada
    const factElement = document.createElement('span');
    factElement.classList.add("marquee-text", "px-4");
    factElement.textContent = customFact;

    // Agregar el nuevo elemento al contenedor
    dataContainer.appendChild(factElement);

    // Observar el nuevo elemento solo si aún no ha alcanzado el límite de 4 elementos mostrados
    if (dataContainer.children.length <= 4) {
        observer.observe(factElement);
    }
}

// Cargar los datos iniciales
function loadCatFacts() {
    for (let i = 0; i < 4; i++) {
        loadCatFact();
    }
}

loadCatFacts();

*/

// se van mostrando datos infinitos pero se van cambiando mientras se muestran
/*
// Selecciona el elemento donde se mostrarán los datos
const dataContainer = document.querySelector('#cats-facts');

// Frases personalizadas
const customFacts = [
    "Frase personalizada 1",
    "Frase personalizada 2",
    "Frase personalizada 3",
    "Frase personalizada 4",
    "Frase personalizada 5",
    "Frase personalizada 6"
];

// Array para almacenar los datos mostrados
let shownFacts = [];

// Crear un IntersectionObserver para detectar cuando los datos hayan pasado la pantalla
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // El elemento ha pasado la pantalla
            observer.unobserve(entry.target);
            entry.target.remove();

            // Si se han mostrado 4 frases diferentes, cargar nuevos datos
            if (shownFacts.length === 4 && new Set(shownFacts).size === 4) {
                shownFacts = [];
                loadNewCatFacts();
            }
        }
    });
});

// Función para cargar los datos iniciales
function loadInitialCatFacts() {
    for (let i = 0; i < 4; i++) {
        loadCatFact();
    }
}

// Función para cargar nuevos datos
function loadNewCatFacts() {
    for (let i = 0; i < 4; i++) {
        loadCatFact();
    }
}

// Función para cargar y mostrar los datos
function loadCatFact() {
    // Obtener una frase personalizada aleatoria que aún no se haya mostrado
    let fact = null;
    do {
        const randomIndex = Math.floor(Math.random() * customFacts.length);
        fact = customFacts[randomIndex];
    } while (shownFacts.includes(fact));

    // Agregar la frase al array de datos mostrados
    shownFacts.push(fact);

    // Crear un nuevo elemento con la frase personalizada
    const factElement = document.createElement('span');
    factElement.classList.add("marquee-text", "px-4");
    factElement.textContent = fact;

    // Agregar el nuevo elemento al contenedor
    dataContainer.appendChild(factElement);

    // Observar el nuevo elemento
    observer.observe(factElement);
}

// Cargar los datos iniciales
loadInitialCatFacts();
*/
//me muestra 4 datos pero cambiandose la frase constantemente mientras se visualiza
/*
// Selecciona el elemento donde se mostrarán los datos
const dataContainer = document.querySelector('#cats-facts');

// Frases personalizadas
const customFacts = [
    "Frase personalizada 1",
    "Frase personalizada 2",
    "Frase personalizada 3",
    "Frase personalizada 4",
    "Frase personalizada 5",
    "Frase personalizada 6"
];

// Array para almacenar los datos mostrados
let shownFacts = [];

// Crear un IntersectionObserver para detectar cuando los datos hayan pasado la pantalla
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // El elemento ha pasado la pantalla
            observer.unobserve(entry.target);
            entry.target.remove();

            // Cargar nuevos datos una vez que todos los datos hayan pasado por la pantalla
            if (dataContainer.children.length === 0) {
                loadNewCatFacts();
            }
        }
    });
});

// Función para cargar los datos iniciales
function loadInitialCatFacts() {
    for (let i = 0; i < 4; i++) {
        loadCatFact();
    }
}

// Función para cargar nuevos datos
function loadNewCatFacts() {
    shownFacts = [];
    loadCatFact();
    loadCatFact();
    loadCatFact();
    loadCatFact();
}

// Función para cargar y mostrar los datos
function loadCatFact() {
    // Obtener una frase personalizada aleatoria que aún no se haya mostrado
    let fact = null;
    do {
        const randomIndex = Math.floor(Math.random() * customFacts.length);
        fact = customFacts[randomIndex];
    } while (shownFacts.includes(fact));

    // Agregar la frase al array de datos mostrados
    shownFacts.push(fact);

    // Crear un nuevo elemento con la frase personalizada
    const factElement = document.createElement('span');
    factElement.classList.add("marquee-text", "px-4");
    factElement.textContent = fact;

    // Agregar el nuevo elemento al contenedor
    dataContainer.appendChild(factElement);

    // Observar el nuevo elemento
    observer.observe(factElement);
}

// Cargar los datos iniciales
loadInitialCatFacts();
*/
//Muestra los mismos datos siempre.
/*
// Selecciona el elemento donde se mostrarán los datos
const dataContainer = document.querySelector('#cats-facts');

// Frases personalizadas
const customFacts = [
    "Frase personalizada 1",
    "Frase personalizada 2",
    "Frase personalizada 3",
    "Frase personalizada 4",
    "Frase personalizada 5",
    "Frase personalizada 6"
];

// Array para almacenar los datos mostrados
let shownFacts = [];

// Crear un IntersectionObserver para detectar cuando los datos hayan pasado la pantalla
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // El elemento ha pasado la pantalla
            observer.unobserve(entry.target);
            entry.target.remove();

            // Cargar nuevos datos una vez que todos los datos hayan pasado por la pantalla
            if (dataContainer.children.length <= 4) {
                loadNewCatFact();
            }
        }
    });
});

// Función para cargar los datos iniciales
function loadInitialCatFacts() {
    for (let i = 0; i < 4; i++) {
        loadCatFact();
    }
}

// Función para cargar nuevos datos
function loadNewCatFact() {
    // Obtener una frase personalizada aleatoria que aún no se haya mostrado
    let fact = null;
    do {
        const randomIndex = Math.floor(Math.random() * customFacts.length);
        fact = customFacts[randomIndex];
    } while (shownFacts.includes(fact));

    // Agregar la frase al array de datos mostrados
    shownFacts.push(fact);

    // Crear un nuevo elemento con la frase personalizada
    const factElement = document.createElement('span');
    factElement.classList.add("marquee-text", "px-4");
    factElement.textContent = fact;

    // Agregar el nuevo elemento al contenedor
    dataContainer.appendChild(factElement);

    // Observar el nuevo elemento solo si no se están mostrando datos actualmente
    if (dataContainer.children.length <= 4) {
        observer.observe(factElement);
    }
}

// Función para cargar y mostrar los datos
function loadCatFact() {
    // Obtener una frase personalizada aleatoria que aún no se haya mostrado
    let fact = null;
    do {
        const randomIndex = Math.floor(Math.random() * customFacts.length);
        fact = customFacts[randomIndex];
    } while (shownFacts.includes(fact));

    // Agregar la frase al array de datos mostrados
    shownFacts.push(fact);

    // Crear un nuevo elemento con la frase personalizada
    const factElement = document.createElement('span');
    factElement.classList.add("marquee-text", "px-4");
    factElement.textContent = fact;

    // Agregar el nuevo elemento al contenedor
    dataContainer.appendChild(factElement);
}

// Cargar los datos iniciales
loadInitialCatFacts();

// Cargar nuevos datos cuando todos los datos iniciales hayan pasado por la pantalla
observer.observe(dataContainer.lastElementChild);
*/
// jugando con el tiempo, se muestran 4 datos diferentes.
/*
// Selecciona el elemento donde se mostrarán los datos
const dataContainer = document.querySelector('#cats-facts');

// Frases personalizadas
const customFacts = [
    "1",
    " 2",
    "3",
    "Frase personalizada mega hiper larga 4",
    " 5",
    "Frase personalizada 6",
    "¡Los gatos son increíbles!",
    "Los gatos son adorables mascotas.",
    "A los gatos les encanta jugar con pelotas.",
    "Los gatos son curiosos por naturaleza."
];

// Variable para almacenar el índice actual
let currentIndex = 0;

// Variable para contar cuántos datos se han mostrado
let shownCount = 0;

// Función para cargar y mostrar los datos
function loadCatFacts() {
    for (let i = 0; i < 4; i++) {
        loadCatFact();
    }
}

// Función para cargar un dato
function loadCatFact() {
    if (currentIndex >= customFacts.length) {
        currentIndex = 0;
    }

    const fact = customFacts[currentIndex];
    currentIndex++;

    const factElement = document.createElement('span');
    factElement.classList.add("marquee-text", "px-4");
    factElement.textContent = fact;

    dataContainer.appendChild(factElement);
    shownCount++;

    if (shownCount === 4) {
        shownCount = 0;
        setTimeout(() => {
            dataContainer.innerHTML = '';
            loadCatFacts();
        }, 30000); // Cambiar el tiempo (en milisegundos) según sea necesario
    }
}

// Cargar los datos iniciales
loadCatFacts();
*/
//Muestra 4 datos cambiando constantemente
/*
// Selecciona el elemento donde se mostrarán los datos
const dataContainer = document.querySelector('#cats-facts');

// Frases personalizadas
const customFacts = [
    "Frase personalizada 1",
    "Frase personalizada 2",
    "Frase personalizada 3",
    "Frase personalizada 4",
    "Frase personalizada 5",
    "Frase personalizada 6"
];

// Variable para almacenar los datos mostrados
let shownFacts = [];

// Crear un IntersectionObserver para detectar cuando los datos hayan pasado la pantalla
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // El elemento ha pasado la pantalla
            observer.unobserve(entry.target);
            entry.target.remove();

            // Cargar nuevos datos una vez que todos los datos hayan pasado por la pantalla
            if (dataContainer.children.length === 0) {
                loadCatFacts();
            }
        }
    });
});

// Función para cargar y mostrar los datos
function loadCatFacts() {
    // Reiniciar el array de datos mostrados
    shownFacts = [];

    for (let i = 0; i < 4; i++) {
        loadCatFact();
    }
}

// Función para cargar un dato
function loadCatFact() {
    // Obtener una frase personalizada aleatoria que aún no se haya mostrado
    let fact = null;
    do {
        const randomIndex = Math.floor(Math.random() * customFacts.length);
        fact = customFacts[randomIndex];
    } while (shownFacts.includes(fact));

    // Agregar la frase al array de datos mostrados
    shownFacts.push(fact);

    // Crear un nuevo elemento con la frase personalizada
    const factElement = document.createElement('span');
    factElement.classList.add("marquee-text", "px-4");
    factElement.textContent = fact;

    // Agregar el nuevo elemento al contenedor
    dataContainer.appendChild(factElement);

    // Observar el nuevo elemento
    observer.observe(factElement);
}

// Cargar los datos iniciales
loadCatFacts();
*/
//Cuando pasa el primer dato inmediatamente van llamando otros en el mismo contenedor
/*
// Selecciona el elemento donde se mostrarán los datos
const dataContainer = document.querySelector('#cats-facts');

// Crear un IntersectionObserver para detectar cuando los datos hayan pasado la pantalla
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            // Remover el dato que ha pasado y dejar de observarlo
            let conteinor = entry.target.parentElement
            entry.target.remove();
            conteinor.style.transform = "translateX(0%)"
            observer.unobserve(entry.target);

            // Cargar un nuevo dato solo si no se ha alcanzado el límite de 4 elementos mostrados
            if (dataContainer.children.length < 4) {
                loadCatFact();
            } else if (dataContainer.children.length === 4) {
                // Cuando se han mostrado los 4 elementos, cargar otros datos
                loadOtherFacts();
            }
        }
    });
});

// Frases personalizadas
const customFacts = [
    "Frase personalizada 1",
    "Frase personalizada 2",
    "Frase personalizada 3",
    "Frase personalizada 4",
    "Frase personalizada 5",
    "Frase personalizada 6"
];
let index = 1

// Función para cargar y mostrar los datos
function loadCatFact() {
    // Obtener una frase personalizada aleatoria
    const randomIndex = Math.floor(Math.random() * customFacts.length);
    const customFact = customFacts[randomIndex];

    // Crear un nuevo elemento con la frase personalizada
    const factElement = document.createElement('span');
    factElement.classList.add("marquee-text", "px-4");
    factElement.textContent = customFact;

    // Agregar el nuevo elemento al contenedor
    dataContainer.appendChild(factElement);


    // Observar el nuevo elemento solo si aún no ha alcanzado el límite de 4 elementos mostrados
    if (dataContainer.children.length <= 4) {
        observer.observe(factElement);
    }
}

// Cargar otros datos después de que se han mostrado los 4 elementos iniciales
function loadOtherFacts() {
    // Aquí puedes cargar los nuevos datos y mostrarlos como desees
    console.log("Mostrar otros datos...");
}

// Cargar los datos iniciales
function loadCatFacts() {
    for (let i = 0; i < 4; i++) {
        loadCatFact();
    }
}

loadCatFacts();
*/
// No me actualiza los datos
/*
// Selecciona el elemento donde se mostrarán los datos
const dataContainer = document.querySelector('#cats-facts');

// Crear un IntersectionObserver para detectar cuando los datos hayan pasado la pantalla
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            const allElementsPassed = Array.from(dataContainer.children).every(element => !element.isEqualNode(entry.target));

            if (allElementsPassed) {
                // Remover el elemento que ha pasado y dejar de observarlo
                entry.target.remove();
                observer.unobserve(entry.target);

                // Cargar nuevos datos
                loadOtherFacts();
            }
        }
    });
});

// Frases personalizadas
const customFacts = [
    "Frase personalizada 1",
    "Frase personalizada 2",
    "Frase personalizada 3",
    "Frase personalizada 4",
    "Frase personalizada 5",
    "Frase personalizada 6"
];

// Función para cargar y mostrar los datos
function loadCatFact() {
    // Obtener una frase personalizada aleatoria
    const randomIndex = Math.floor(Math.random() * customFacts.length);
    const customFact = customFacts[randomIndex];

    // Crear un nuevo elemento con la frase personalizada
    const factElement = document.createElement('span');
    factElement.classList.add("marquee-text", "px-4");
    factElement.textContent = customFact;

    // Agregar el nuevo elemento al contenedor
    dataContainer.appendChild(factElement);

    // Observar el nuevo elemento
    observer.observe(factElement);
}

// Cargar otros datos después de que se han mostrado los 4 elementos iniciales
function loadOtherFacts() {
    // Aquí puedes cargar los nuevos datos y mostrarlos como desees
    console.log("Mostrar otros datos...");
    loadCatFact();
}

// Cargar los datos iniciales
function loadCatFacts() {
    for (let i = 0; i < 4; i++) {
        loadCatFact();
    }
}

// Llamar a la función para cargar los datos iniciales
loadCatFacts();
*/
// 
/*
// Selecciona el elemento donde se mostrarán los datos
const dataContainer = document.querySelector('#cats-facts');

// Crear un IntersectionObserver para detectar cuando los datos hayan pasado la pantalla
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            const allElementsPassed = Array.from(dataContainer.children).every(element => !element.isEqualNode(entry.target));

            if (allElementsPassed) {
                // Remover el elemento que ha pasado y dejar de observarlo
                entry.target.remove();
                observer.unobserve(entry.target);

                // Cargar nuevos datos
                if (dataContainer.children.length === 0) {
                    loadOtherFacts();
                }
            }
        }
    });
});

// Frases personalizadas
const customFacts = [
    "Frase personalizada 1",
    "Frase personalizada 2",
    "Frase personalizada 3",
    "Frase personalizada 4",
    "Frase personalizada 5",
    "Frase personalizada 6"
];

// Función para cargar y mostrar los datos
function loadCatFact() {
    // Obtener una frase personalizada aleatoria
    const randomIndex = Math.floor(Math.random() * customFacts.length);
    const customFact = customFacts[randomIndex];

    // Crear un nuevo elemento con la frase personalizada
    const factElement = document.createElement('span');
    factElement.classList.add("marquee-text", "px-4");
    factElement.textContent = customFact;

    // Agregar el nuevo elemento al contenedor
    dataContainer.appendChild(factElement);

    // Observar el nuevo elemento
    observer.observe(factElement);
}

// Cargar otros datos después de que se han mostrado los 4 elementos iniciales
function loadOtherFacts() {
    // Aquí puedes cargar los nuevos datos y mostrarlos como desees
    console.log("Mostrar otros datos...");
    loadCatFact();
}

// Cargar los datos iniciales
function loadCatFacts() {
    for (let i = 0; i < 4; i++) {
        loadCatFact();
    }
}

// Llamar a la función para cargar los datos iniciales
loadCatFacts();
*/
