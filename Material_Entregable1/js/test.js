// Selecciona el elemento donde se mostrarán los datos
const dataContainer = document.querySelector('#gatos');

// Variable para almacenar el índice actual
let currentIndex = 0;

// Variable para contar cuántos datos se han mostrado
let shownCount = 0;

// Función para cargar y mostrar los datos
function loadCatFacts() {
    for (let i = 0; i < 2; i++) {
        loadCatFact();
    }
}

// Función para cargar un dato
function loadCatFact() {
    fetch('https://catfact.ninja/fact?max_length=80')
        .then((response) =>{
// response.ok será true con respuestas 2XX
if (!response.ok) {
    throw new Error("Error HTTP: " + response.status);
}
           return response.json()
        }) 
        .then(data => {
            const fact = data.fact;

            const factElement = document.createElement('article');
            factElement.classList.add("px-4", "d-inline");
            factElement.textContent = fact;

            dataContainer.appendChild(factElement);
            shownCount++;

            if (shownCount === 2) {
                shownCount = 0;
                setTimeout(() => {
                    dataContainer.innerHTML = '';
                    loadCatFacts();
                }, 20000); // Cambiar el tiempo (en milisegundos) según sea necesario
            }
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

// Cargar los datos iniciales
loadCatFacts();
