//Agregar evento de escucha de teclado
document.addEventListener("keydown", function (event) {
    console.log("tecla presionada: ", event.key)
    // Obtener el valor de la tecla presionada
    var tecla = event.key;
    // Determinar a qué sección se debe desplazar la página
    switch (tecla) {
        case "1":
            window.location = "#Who";
            break;
        case "2":
            window.location = "#Services";
            break;
        case "3":
            window.location = "#Port";
            break;
        case "4":
            window.location = "#lugar";
            break;
        case "5":
            window.location = "#correo";
            break;
        case "?":
            if (event.shiftKey) {
                showModal();
            }
            break;
        //case "h":
        //    showModal();
        //    break
        case "Escape":
            hideModal();
            break;
        default:
            console.log(tecla);
            break;
    }
});


let temporizadorcierre;


// Crear el elemento de botón
let btnCloseModal = document.createElement("button");
btnCloseModal.id = "btnCloseModal";
btnCloseModal.type = "button";
btnCloseModal.classList.add("btn-close");
btnCloseModal.setAttribute("data-bs-dismiss", "modal");
btnCloseModal.setAttribute("aria-label", "Close");

// Agregar el evento de clic al botón
btnCloseModal.addEventListener("click", function () {
    hideModal();
});

// Agregar el botón al modal
let modal = document.querySelector("[aria-label='navigationHelp']");
modal.appendChild(btnCloseModal);



//funcion mostrar contenido


let showModal = function () {
    console.log("mostrando modal")
    let modal = document.querySelector(`[aria-label="navigationHelp"]`);
    modal.classList.add("show", "d-block");
    modal.innerHTML = modalContent;
    temporizadorcierre = setTimeout(() => { hideModal() }, 45000)
}




// función ocultar contenido


let hideModal = function () {
    let modal = document.querySelector("[aria-label='navigationHelp']");
    modal.classList.remove("show", "d-block");
    modal.style.display = "none";
    modal.innerHTML = "";
    clearTimeout(temporizadorcierre);
}

//Contenido

let modalContent = `<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Atajos</h5>
            
        </div>
        <div class="modal-body">
            <p>Texto de atajos</p>
        </div>
    </div>
</div>`;

