const control = document.querySelectorAll(".controle-ajuste");

control.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        alterData(evento.target.textContent, evento.target.parentNode)
    })
})

function alterData(operation, control) {
    const part = control.querySelector(".controle-contador");

    if (operation === "-") {
        part.value = parseInt(part.value) - 1;
    }
    else {
        part.value = parseInt(part.value) + 1;
    }
}