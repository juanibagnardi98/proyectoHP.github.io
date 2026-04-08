let puntos = 0;
let respondidas = 0;
let preguntasRespondidas = {}; 

function verificarRespuesta(opcion, pregunta) {
    if (preguntasRespondidas[pregunta]) {
        return;
    }
    preguntasRespondidas[pregunta] = true;

    const resultado = document.getElementById("resultado" + pregunta);
    let cambio = 0;

    resultado.style.backgroundColor = "black";
    resultado.style.margin = "20px auto";
    resultado.style.padding = "10px";

    //PREGUNTA 1
    if (pregunta === 1) {
        if (opcion === 'a') {
            resultado.textContent = "¡CORRECTO! NOX ES EL CONTRA HECHIZO DE LUMOS, GANAS 50 PUNTOS";
            resultado.style.color = "yellow";
            cambio = 50;
        } else {
            resultado.textContent = "MUY MAL, REPRUEBAS ENCANTAMIENTOS, PIERDES 50 PUNTOS";
            resultado.style.color = "red";
            cambio = -50;
        }
    }

    //PREGUNTA 2
    if (pregunta === 2) {
        if (opcion === 'c') {
            resultado.textContent = "CORRECTO, FUE EN EL CALDERO CHORREANTE, GANAS 50 PUNTOS";
            resultado.style.color = "yellow";
            cambio = 50;
        } else {
            resultado.textContent = "ES EN SERIO? VUELVE A VER LA PELICULA, PIERDES 50 PUNTOS";
            resultado.style.color = "red";
            cambio = -50;
        }
    }

    //PREGUNTA 3
    if (pregunta === 3) {
        if (opcion === 'b') {
            resultado.textContent = "CORRECTO, SU PADRINO ES SIRIUS BLACK, CONOCIDO COMO CANUTO, GANAS 50 PUNTOS";
            resultado.style.color = "yellow";
            cambio = 50;
        } else {
            resultado.textContent = "NO CONOCES DE FAMILIAS DE MAG@S NOBLES...PIERDES 50 PUNTOS";
            resultado.style.color = "red";
            cambio = -50;
        }
    }

    //PREGUNTA 4
    if (pregunta === 4) {
        if (opcion === 'c') {
            resultado.textContent = "CORRECTO, ES BUCKBEAK, GANAS 50 PUNTOS";
            resultado.style.color = "yellow";
            cambio = 50;
        } else {
            resultado.textContent = "VUELVE A VER LA PELICULA MUGGLE, PIERDES 50 PUNTOS";
            resultado.style.color = "red";
            cambio = -50;
        }
    }

    //PREGUNTA 5
    if (pregunta === 5) {
        if (opcion === 'b') {
            resultado.textContent = "CORRECTO, RON WEASLEY, TIENE 6 HERMANOS WEASLY, GANAS 50 PUNTOS";
            resultado.style.color = "yellow";
            cambio = 50;
        } else {
            resultado.textContent = "TE OLVIDASTE CUANTOS HERMANOS TIENE?, PIERDES 50 PUNTOS";
            resultado.style.color = "red";
            cambio = -50;
        }
    }

    //PREGUNTA 6
    if (pregunta === 6) {
        if (opcion === 'b') {
            resultado.textContent = "CORRECTO,WOOD SE LO MENCIONA EM LA PIEDRA FILOSOFAL, GANAS 50 PUNTOS";
            resultado.style.color = "yellow";
            cambio = 50;
        } else {
            resultado.textContent = "INCORRECTO, SIGUE ESTUDIANDO, PIERDES 50 PUNTOS";
            resultado.style.color = "red";
            cambio = -50;
        }
    }

    //PREGUNTA 7
    if (pregunta === 7) {
        if (opcion === 'a') {
            resultado.textContent = "CORRECTO,AUNQUE PRIMERO SE LO OFRECE A AMOS, EL LO RECHAZA, GANAS 50 PUNTOS";
            resultado.style.color = "yellow";
            cambio = 50;
        } else {
            resultado.textContent = "INCORRECTO, ACASO ERES UN MUGGLE?, PIERDES 50 PUNTOS";
            resultado.style.color = "red";
            cambio = -50;
        }
    }

    //PREGUNTA 8
    if (pregunta === 8) {
        if (opcion === 'c') {
            resultado.textContent = "CORRECTO, ES EL HECHIZO CON EL QUE ROBABA HAZAÑAS A OTROS MAGOS, GANAS 50 PUNTOS";
            resultado.style.color = "yellow";
            cambio = 50;
        } else {
            resultado.textContent = "INCORRECTO, DEBES ESTUDIAR MAS, PIERDES 50 PUNTOS";
            resultado.style.color = "red";
            cambio = -50;
        }
    }

    //PREGUNTA 9
    if (pregunta === 9) {
        if (opcion === 'b') {
            resultado.textContent = "CORRECTO, ESTE LIBRO ES PROPIEDAD DEL PRINCIPE MESTIZO GANAS 50 PUNTOS";
            resultado.style.color = "yellow";
            cambio = 50;
        } else {
            resultado.textContent = "INCORRECTO, Y ASI TE HACES LLAMAR MAG@, PIERDES 50 PUNTOS";
            resultado.style.color = "red";
            cambio = -50;
        }
    }

    //PREGUNTA 10
    if (pregunta === 10) {
        if (opcion === 'a') {
            resultado.textContent = "CORRECTO, ERES UN VERDADERO FAN DE H.P. GANAS 50 PUNTOS";
            resultado.style.color = "yellow";
            cambio = 50;
        } else {
            resultado.textContent = "INCORRECTO, ERES UN SANGRE SUCIA INMUNDA, PIERDES 50 PUNTOS";
            resultado.style.color = "red";
            cambio = -50;
        }
    }

    //SUMAR 
    puntos += cambio;
    document.getElementById("puntos").textContent = puntos;

    //ANIMACION
    resultado.style.transform = "scale(1.1)";
    setTimeout(() => {
        resultado.style.transform = "scale(1)";
    }, 300);

    //PROGRESO 
    respondidas++;
    let progreso = (respondidas / 10) * 100;

    let barra = document.getElementById("barra");
    barra.style.width = progreso + "%";

    //COLOR
    if (progreso < 40) {
        barra.style.backgroundColor = "red";
    } 
    else if (progreso < 80) {
        barra.style.backgroundColor = "orange";
    } 
    else {
        barra.style.backgroundColor = "limegreen";
    }

    //MENSAJE FINAL
    if (respondidas === 10) {
        let mensajeFinal = "FELICIDADES, ERES UN GRAN FAN DE HARRY POTTER";

        if (puntos >= 400) {
            mensajeFinal = "¡ERES UN VERDADERO MAG@ DE HOGWARTS!";
        } 
        else if (puntos >= 200) {
            mensajeFinal = "SABES BASTANTE DEL MUNDO MAGICO";
        } 
        else {
            mensajeFinal = "NECESITAS ESTUDIAR MAS MAGIA";
        }

        document.getElementById("resultadoFinal").textContent =
            "Juego terminado. Puntos: " + puntos + " - " + mensajeFinal;
    }
}