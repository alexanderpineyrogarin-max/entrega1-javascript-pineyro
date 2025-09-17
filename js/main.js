function agregarProducto(lista, producto) {
    if (producto && producto.nombre) {
        lista.push(producto);
    }
}

function calcularValorTotal(lista) {
    let valorTotal = 0;
    for (const producto of lista) {
        valorTotal += producto.cantidad * producto.precio;
    }
    return valorTotal;
}

function mostrarResumen(lista, valorTotal) {
    console.log("----------------------------------------");
    console.log(" RESUMEN FINAL DEL INVENTARIO ");
    console.log("----------------------------------------");

    if (lista.length === 0) {
        console.log("El inventario está vacío.");
    } else {
        lista.forEach(producto => {
            console.log(`- Producto: ${producto.nombre} | Cantidad: ${producto.cantidad} | Precio: $${producto.precio.toFixed(2)}`);
        });
        console.log("----------------------------------------");
        console.log(`VALOR TOTAL DEL INVENTARIO: $${valorTotal.toFixed(2)}`);
    }
    console.log("----------------------------------------");
}

function ingresarDatosProducto() {
    const nombre = prompt("Ingresa el nombre del producto:");
    if (!nombre) return null;

    const cantidad = parseInt(prompt("Ingresa la cantidad:"));
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Cantidad no válida. El producto no será agregado.");
        return null;
    }

    const precio = parseFloat(prompt("Ingresa el precio unitario:"));
    if (isNaN(precio) || precio <= 0) {
        alert("Precio no válido. El producto no será agregado.");
        return null;
    }
    
    return { nombre, cantidad, precio };
}

function iniciarSimulador() {