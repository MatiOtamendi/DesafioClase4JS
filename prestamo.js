alert("Bienvenido, esto es una calculadora de intereses de préstamo.")
let nombre = prompt("Ingrese su nombre")
let montoPedido = parseInt(prompt("Por favor, igresá el monto a pedir prestado (Dato numérico, redondo, sin puntos ni comas.)"))
let cuotas = parseInt(prompt("Por favor, igresá la cantidad de cuotas para devolver el préstamo (Dato numérico, puede ser en 6, 12, 18 o 24 cuotas solamente.)"))
const seiscuotas = montoPedido*1.15
const docecuotas = montoPedido*1.30
const diecicuotas = montoPedido*1.50
const veinticuotas = montoPedido*2
const en6 = seiscuotas/6
const en12 = docecuotas/12
const en18 = diecicuotas/18
const en24 = veinticuotas/24

function prestamo() {
    if (cuotas === 6) {
        alert("Esto pagarías en 6 cuotas: $" + seiscuotas + ". Serían 6 cuotas de $" + en6)
      }
    else if (cuotas === 12){
        alert("Esto pagarías en 12 cuotas: $" + docecuotas + ". Serían 12 cuotas de $" + en12)
    }
    else if (cuotas === 18){
        alert("Esto pagarías en 18 cuotas: $" + diecicuotas + ". Serían 18 cuotas de $" + en18)
    }
    else if (cuotas === 24){
        alert("Esto pagarías en 24 cuotas: $" + veinticuotas + ". Serían 24 cuotas de $" + en24)
    }
    else if (cuotas !=6 && cuotas !=12 && cuotas != 18 && cuotas !=24){
        alert("No se puede hacer en esa cantidad de cuotas. Solo 6, 12, 18 o 24.")
        alert("Vuelve a empezar.")
        

    }

}
prestamo()

alert("Gracias " + nombre +" por participar :)")