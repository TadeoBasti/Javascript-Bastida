let total = 0;

while (true) {
    const juego = prompt("¿Qué juego deseas comprar? (Presiona Cancelar para finalizar)");

    if (juego === null) {
        break; // se sale del bucle
    }

    const precio = prompt(`Cuánto vale "${juego}" en Steam:`);
    const precioSteam = parseFloat(precio);

    if (!isNaN(precioSteam)) {
        const impuesto = precioSteam * 0.75;
        const valorConElImpuesto = precioSteam + impuesto;
        total += valorConElImpuesto;
        
        console.log(`Estarías pagando $${impuesto.toFixed(2)}`);
        console.log(`El valor de "${juego}" es de $${valorConElImpuesto.toFixed(2)}`);
        console.log("-----------------------------------")
        console.log(`El total de todos los juegos es de $${total.toFixed(2)}`);

        const continuar = confirm("¿Deseas agregar otro juego al carrito?");
        if (!continuar) {

            break; // deja de agregar juegos y se sale del bucle
            
        }
    } else {
        alert("Por favor, ingresa un valor numérico válido para el precio del juego.");
    }
}
