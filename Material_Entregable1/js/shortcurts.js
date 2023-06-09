
// Crear un IntersectionObserver
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute("id");

                // Agregar el evento de teclado al documento
                document.addEventListener("keydown", function (event) {
                    var tecla = event.key;
                    // Verificar si se encuentra dentro del formulario
                    if (event.target.tagName === "INPUT" || event.target.tagName === "SELECT" || event.target.tagName === "TEXTAREA") {

                        // No realizar más acciones dentro del formulario
                        return;
                    }
                    switch (tecla) {
                        case "1":
                            window.location = "#Section-Whoare";
                            break;
                        case "2":
                            window.location = "#Section-Services";
                            break;
                        case "3":
                            window.location = "#Section-Portfolio";
                            break;
                        case "4":
                            window.location = "#Section-Map";
                            break;
                        case "5":
                            window.location = "#Section-Form";
                            break;
                        case "i":
                            window.location = "#Home";
                            break;
                        case "?":
                            if (event.shiftKey) {
                                showModal();
                            }
                            break;
                        case "esc":
                            hideModal();
                            break;
                        case "p":
                            const previousSection = document.getElementById(sectionId).previousElementSibling;
                            if (previousSection) {
                                previousSection.scrollIntoView({ behavior: "smooth" });
                            }
                            break;
                        case "n":
                            const nextSection = document.getElementById(sectionId).nextElementSibling;
                            if (nextSection) {
                                nextSection.scrollIntoView({ behavior: "smooth" });
                            }
                            break;
                        default:
                            console.log(tecla);
                            break;
                    }
                });
            }
        });
    },
    { threshold: 0.5 } // Umbral de visibilidad
);

// Obtener todas las secciones
const sections = document.querySelectorAll("section");

// Observar cada sección
sections.forEach((section) => {
    observer.observe(section);
});

let temporizadorcierre;

let modal = new bootstrap.Modal(document.querySelector(`[aria-label="navigationHelp"]`));

// función ocultar contenido


let hideModal = function () {
    modal.hide()

    clearTimeout(temporizadorcierre);
}

//funcion mostrar contenido


let showModal = function () {
    console.log("mostrando modal")

    modal.show();
    clearTimeout(temporizadorcierre)
    temporizadorcierre = setTimeout(() => { hideModal() }, 20000)
}


//Botón cerrar

// Obtener el botón de cierre por su ID
let btnCloseModal = document.getElementById("btnCloseModal");

// Agregar el evento de clic al botón
btnCloseModal.addEventListener("click", function () {
    hideModal();
});


