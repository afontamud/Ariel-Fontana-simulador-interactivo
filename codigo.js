//simulador interactivo
alert ("¡Bienvenido a queja de vecionos! Reclama sin solucion aparente")
let nombreUsuario = prompt("Ingresa tu nombre")
let inicio = confirm( nombreUsuario + " Usted acepta terminos y condiciones")

let planta
let hora
let queja

let masQuejas

const ruidos = []
const filtracionHumedad = []
const olores = []

class TareasDiarias {
    constructor(cometido, hora, impedimento) {
        this.cometido = cometido;
        this.hora = hora;
        this.impedimento = impedimento;
    }
}

const posibleProblema = () => {
        switch (prioridad.impedimento) {
            case `1`: console.log("El veciono hace ruidos");
                        ruidos.push(prioridad)
            break;
            case `2`: console.log("Filtraciones y humedad.");
                        filtracionHumedad.push(prioridad)
            break;
            case `3`: console.log("Olores desagradables");
                        olores.push(prioridad)
            break;
            default: console.log("No ingreso inconveniente");
            break;
        }
    }

const preguntaProblema = () => {
    
    planta = prompt(nombreUsuario + ", ¿En que piso?")
    hora = prompt("¿A que hora fue el disturbio?")
    queja = prompt("Ingresa \n 1 - El veciono hace ruidos. \n 2 - Filtraciones y humedad. \n 3 - Olores desagradables")

    return prioridad = new TareasDiarias (planta, hora, queja)
}

if (inicio == true) {
    preguntaProblema()
    posibleProblema()
    alert (`Excelente, ${nombreUsuario}.  Se informara sobre tu queja del ${planta} piso de las ${hora}`)

    masQuejas= confirm("¿Queres ingresar otro inconveniente?")

    while (masQuejas == true) {
        preguntaProblema()
        posibleProblema()

        alert (`¡Agendado, ${nombreUsuario}!. Se agrego a tu lista de quejas el inconveniente del ${planta} piso de las ${hora}`)

        masQuejas= confirm("¿Queres ingresar otra queja?")
    }

} else {
    alert("¡Veremos que hacemos con sus reclamos! ¡Buena suerte!")
}