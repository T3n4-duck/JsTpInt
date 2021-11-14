const cantidadEntradas = document.getElementById('Cantidad');
const botoncalcular = document.getElementById('botonRe');
const categoria = document.getElementById('inputState');
const totalCompra = document.getElementById('totalFinal');

function calcularEntradas(){
    console.log(categoria.value);
    console.log(cantidadEntradas.value);
    cantidadEntradas.value;

    if(categoria.value == 1){                                            //Estudiantes
        const total = ( 200 * 0.2 ) * cantidadEntradas.value;
        totalCompra.innerHTML = "Total a pagar: $"+total;
    }
    else if(categoria.value == 2){                                       //Trainer
        const total = ( 200 * 0.5) * cantidadEntradas.value;
        totalCompra.innerHTML = "Total a pagar: $"+total;
    }
    else if(categoria.value == 3){                                       //Junior
        const total = ( 200 * 0.85) * cantidadEntradas.value;
        totalCompra.innerHTML = "Total a pagar: $"+total;
    }
    return false
}

function reset(){
    document.getElementsById("myForm").reset();
    document.getElementById("totalFinal").reset();
    return false
}