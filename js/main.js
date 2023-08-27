const control = document.querySelectorAll("[data-control]");
const stats = document.querySelectorAll("[data-stat]");
const parts = {
    "arms": {
        "strength": 29,
        "power": 35,
        "energy": -21,
        "speed": -5
    },
    "armor": {
        "strength": 41,
        "power": 20,
        "energy": 0,
        "speed": -20
    },
    "core":{
        "strength": 0,
        "power": 7,
        "energy": 48,
        "speed": -24
    },
    "legs":{
        "strength": 27,
        "power": 21,
        "energy": -32,
        "speed": 42
    },
    "rockets":{
        "strength": 0,
        "power": 28,
        "energy": 0,
        "speed": -2
    }
}

control.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        alterData(evento.target.dataset.control, evento.target.parentNode);
        alterStats(evento.target.dataset.part);
    })
})

function alterData(operation, control) {
    const part = control.querySelector("[data-display]");

    if (operation === "-") {
        part.value = parseInt(part.value) - 1;
    }
    else {
        part.value = parseInt(part.value) + 1;
    }
}

function alterStats(part) {
    stats.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + parts[part][elemento.dataset.stat];
    })
}

function changeImage(color){
    document.querySelector(".robo").src="img/Robotrons/Robotron 2000 - " + color + "/robotron.png";
 }