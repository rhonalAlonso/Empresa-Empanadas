function crearEtiquetaTienda(identificadorInput, valorMin){
    //crear las etiquetas <p>
    let etiquetaParrafo = document.createElement("p");
    //crear la etiqueta <label>
    let etiquetaLabel = document.createElement("label");
    etiquetaLabel.innerText = identificadorInput + ": ";
    //crear etiqueta <input>
    let etiquetaInput = document.createElement("input");
    //conectar con la etiqueta input
    etiquetaLabel.setAttribute("for", identificadorInput);
    //establecer atributos a la etiqueta input
    etiquetaInput.setAttribute("type", "number");
    etiquetaInput.setAttribute("id", identificadorInput);
    etiquetaInput.setAttribute("min", valorMin);
    etiquetaInput.setAttribute("value", 0);
    //agregar las etiquetas label e input a la etiqueta p
    etiquetaParrafo.appendChild(etiquetaLabel);
    etiquetaParrafo.appendChild(etiquetaInput);
    //devolver la etiqueta parrafo
    return etiquetaParrafo; 
}

function crearTiendas(contenedorId, min, cantidadTiendas){
    //Encontrar contenedor por Id
    let etiquetaContenedor = document.getElementById(contenedorId);
    //Loop para crear tiendas segun lo pida el cliente
    for(let conteoTiendas= 1; conteoTiendas <= cantidadTiendas; conteoTiendas++){
        //Crear texto de etiqueta label
        let textoEtiqueta ="Tienda " + conteoTiendas;
        //Lammar funcion para crear inputs
        let parrafoTienda = crearEtiquetaTienda(textoEtiqueta,min);
        //agregar la etiqueta p al contenedor
        etiquetaContenedor.appendChild(parrafoTienda);
    }
}

// function extraer_numero_desde_elemento(identificador){
//     let texto = identificador.value;
//     let numero = Number(texto);

//     return numero;
// }

// //function calcular(){
//     let ventas1, ventas2, ventas3, ventas4, ventas5;
//     ventas1 = extraer_numero_desde_elemento("venta_tienda_1");
//     ventas2 = extraer_numero_desde_elemento("venta_tienda_2");
//     ventas3 = extraer_numero_desde_elemento("venta_tienda_3");
//     ventas4 = extraer_numero_desde_elemento("venta_tienda_4");
//     ventas5 = extraer_numero_desde_elemento("venta_tienda_5");

//     let total_ventas = ventas1 + ventas2 + ventas3 + ventas4 + ventas5;

//     let mensaje_salida = "Total ventas: " + total_ventas;
//     document.getElementById("resultado").textContent = mensaje_salida;
// //}


// function calcular(){
//     let ventas= [];
//     ventas[0] = extraer_numero_desde_elemento("venta_tienda_1");
//     ventas[1] = extraer_numero_desde_elemento("venta_tienda_2");
//     ventas[2] = extraer_numero_desde_elemento("venta_tienda_3");
//     ventas[3] = extraer_numero_desde_elemento("venta_tienda_4");
//     ventas[4] = extraer_numero_desde_elemento("venta_tienda_5");

//     let total_ventas = sumar_total(ventas);
//     let venta_mayor = calcular_mayor(ventas);
//     let venta_menor = calcular_menor(ventas);

//     let mensaje_salida = "Total ventas: " + total_ventas +
//                          " / Venta Mayor: " +  venta_mayor +
//                          " / Venta Menor: " + venta_menor;
//     document.getElementById("resultado").textContent = mensaje_salida;
// }
function calcular(){
    let ventas= [];
    let posicionVentas = 0;
    let elementoVentas = document.getElementById("itemsTiendas");

    for(let item of elementoVentas.children){
        let valorVenta = +item.children[1].value;
        ventas[posicionVentas] = valorVenta;
        posicionVentas = posicionVentas + 1;
    }

    let total_ventas = sumar_total(ventas);
    let venta_mayor = calcular_mayor(ventas);
    let venta_menor = calcular_menor(ventas);

    for(let item of elementoVentas.children){
        let valorVenta = +item.children[1].value;
        item.children[1].className = "inputNormal";
        if(valorVenta == venta_mayor){
            item.children[1].className = "inputMayor";
        }
        if(valorVenta == venta_menor){
            item.children[1].className = "inputMenor";
        }
    }

    let mensaje_salida = "Total ventas: " + total_ventas;
    document.getElementById("resultado").textContent = mensaje_salida;
}

function sumar_total(array_ventas){
    let total = 0;
    for(let venta of array_ventas){
        total += venta;
    }
    return total;
}

function calcular_mayor(array_ventas){
    let maximo = array_ventas[0];
    for(let ventaMayor of array_ventas){
        if(ventaMayor > maximo){
            maximo = ventaMayor;
        }   
    }
    return maximo;
}

function calcular_menor(array_ventas){
    let minimo = array_ventas[0];
    for(let ventaMenor of array_ventas){
        if(ventaMenor < minimo){
            minimo = ventaMenor;
        }
    }
    return minimo;
}