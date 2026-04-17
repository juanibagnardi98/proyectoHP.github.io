let puntos = 0;
let respondidas = 0;
let preguntasRespondidas = {}; 

function verificarRespuesta(opcion, pregunta) {

   
    if (preguntasRespondidas[pregunta]) return;

    preguntasRespondidas[pregunta] = true;

    const resultado = document.getElementById("resultado" + pregunta);
    const barra = document.getElementById("barra");
    const puntosHTML = document.getElementById("puntos");

    let cambio = 0;

    
    resultado.classList.add("resultado");
    resultado.style.backgroundColor = "black";

   
    switch (pregunta) {

        case 1:
            if (opcion === 'a') {
                resultado.textContent = "¡CORRECTO! NOX ES EL CONTRA HECHIZO DE LUMOS, GANAS 50 PUNTOS";
                resultado.style.color = "yellow";
                cambio = 50;
            } else {
                resultado.textContent = "MUY MAL, REPRUEBAS ENCANTAMIENTOS, PIERDES 50 PUNTOS";
                resultado.style.color = "red";
                cambio = -50;
            }
        break;

        case 2:
            if (opcion === 'c') {
                resultado.textContent = "CORRECTO, FUE EN EL CALDERO CHORREANTE, GANAS 50 PUNTOS";
                resultado.style.color = "yellow";
                cambio = 50;
            } else {
                resultado.textContent = "ES EN SERIO? VUELVE A VER LA PELICULA, PIERDES 50 PUNTOS";
                resultado.style.color = "red";
                cambio = -50;
            }
        break;

        case 3:
            if (opcion === 'b') {
                resultado.textContent = "CORRECTO, SU PADRINO ES SIRIUS BLACK, GANAS 50 PUNTOS";
                resultado.style.color = "yellow";
                cambio = 50;
            } else {
                resultado.textContent = "INCORRECTO, PIERDES 50 PUNTOS";
                resultado.style.color = "red";
                cambio = -50;
            }
        break;

        case 4:
            if (opcion === 'c') {
                resultado.textContent = "CORRECTO, ES BUCKBEAK, GANAS 50 PUNTOS";
                resultado.style.color = "yellow";
                cambio = 50;
            } else {
                resultado.textContent = "INCORRECTO, PIERDES 50 PUNTOS";
                resultado.style.color = "red";
                cambio = -50;
            }
        break;

        case 5:
            if (opcion === 'b') {
                resultado.textContent = "CORRECTO, TIENE 6 HERMANOS, GANAS 50 PUNTOS";
                resultado.style.color = "yellow";
                cambio = 50;
            } else {
                resultado.textContent = "INCORRECTO, PIERDES 50 PUNTOS";
                resultado.style.color = "red";
                cambio = -50;
            }
        break;

        case 6:
            if (opcion === 'c') {
                resultado.textContent = "CORRECTO, ES BUSCADOR, GANAS 50 PUNTOS";
                resultado.style.color = "yellow";
                cambio = 50;
            } else {
                resultado.textContent = "INCORRECTO, PIERDES 50 PUNTOS";
                resultado.style.color = "red";
                cambio = -50;
            }
        break;

        case 7:
            if (opcion === 'a') {
                resultado.textContent = "CORRECTO, SE LO DA A FRED Y GEORGE, GANAS 50 PUNTOS";
                resultado.style.color = "yellow";
                cambio = 50;
            } else {
                resultado.textContent = "INCORRECTO, PIERDES 50 PUNTOS";
                resultado.style.color = "red";
                cambio = -50;
            }
        break;

        case 8:
            if (opcion === 'c') {
                resultado.textContent = "CORRECTO, ES OBLIVIATE, GANAS 50 PUNTOS";
                resultado.style.color = "yellow";
                cambio = 50;
            } else {
                resultado.textContent = "INCORRECTO, PIERDES 50 PUNTOS";
                resultado.style.color = "red";
                cambio = -50;
            }
        break;

        case 9:
            if (opcion === 'b') {
                resultado.textContent = "CORRECTO, LIBRO DEL PRÍNCIPE MESTIZO, GANAS 50 PUNTOS";
                resultado.style.color = "yellow";
                cambio = 50;
            } else {
                resultado.textContent = "INCORRECTO, PIERDES 50 PUNTOS";
                resultado.style.color = "red";
                cambio = -50;
            }
        break;

        case 10:
            if (opcion === 'a') {
                resultado.textContent = "CORRECTO, GRAN FAN DE HARRY POTTER, GANAS 50 PUNTOS";
                resultado.style.color = "yellow";
                cambio = 50;
            } else {
                resultado.textContent = "INCORRECTO, PIERDES 50 PUNTOS";
                resultado.style.color = "red";
                cambio = -50;
            }
        break;
    }

  
    puntos += cambio;
    puntosHTML.textContent = puntos;

    
    resultado.style.transform = "scale(1.1)";
    setTimeout(() => {
        resultado.style.transform = "scale(1)";
    }, 300);

   
    respondidas++;
    let progreso = (respondidas / 10) * 100;

    barra.style.width = progreso + "%";

    
    if (progreso < 40) {
        barra.style.backgroundColor = "red";
    } else if (progreso < 80) {
        barra.style.backgroundColor = "orange";
    } else {
        barra.style.backgroundColor = "limegreen";
    }

    
    if (respondidas === 10) {

        let mensajeFinal;

        if (puntos >= 400) {
            mensajeFinal = "¡ERES UN VERDADERO MAGO DE HOGWARTS!";
        } else if (puntos >= 200) {
            mensajeFinal = "SABES BASTANTE DEL MUNDO MÁGICO";
        } else {
            mensajeFinal = "NECESITAS ESTUDIAR MÁS MAGIA";
        }

        document.getElementById("resultadoFinal").textContent =
            "Juego terminado. Puntos: " + puntos + " - " + mensajeFinal;
    }
}