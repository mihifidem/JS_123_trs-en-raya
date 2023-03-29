
/*
1 Hacemos el código HTML del ejercicio.
2 Cuando pulso en un botón, este cambia su color.
3 Cuando pulso en un botón y el contador de tiradas es par, pinto el botón de verde, si no, lo pinto de rojo.
4 Tendremos un array de 9 posiciones (cada una de las posiciones del tablero), y cada vez que el jugador pulsa sobre una celda, rellenamos ese array con un valor (puede ser 0 para el jugador A, y 1 para el jugador B).
5 Cada vez que un jugador mueve, evaluamos si ha ganado.
*/

// const btnPulsado = () => {
//     alert(1)
// }
let turno = 0;
const tablero = [];

const btnPulsado = (e, pos) => {
    turno++;
    const btn = e.target;
    const color = turno % 2 ? 'green' : 'yellow';
    btn.style.backgroundColor = color;
    //alert(pos);
    tablero[pos] = color;
    if (haGanado()) {
        // alert('Enhorabuena player '+ color);
        const jugador1 = "Ganador : "+document.getElementById('p1').value;
        const jugador2 = "Ganador : "+document.querySelector("#p2").value;
        if (color == "green") document.getElementById("gana").innerHTML = jugador1;
        else document.getElementById("gana").innerHTML = jugador2;
    }

}

const haGanado = () => {
    if (tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]) {
        return true;
    } else if (tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]) {
        return true;
    } else if (tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]) {
        return true;
    } else if (tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]) {
        return true;
    } else if (tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]) {
        return true;
    } else if (tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]) {
        return true;
    } else if (tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]) {
        return true;
    } else if (tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2]) {
        return true;
    }
    return false;
}

function jugar(){
    const jugador1 = "Ganador : "+document.getElementById('p1').value;
        const jugador2 = "Ganador : "+document.querySelector("#p2").value;
    if (jugador1!="" || jugador2!="") $("#container").show("slow");

}



$("#container").hide("slow");
var arr = document.querySelectorAll('button');
arr.forEach(
    (obj, i) => obj.addEventListener('click', (e) => btnPulsado(e, i)));



