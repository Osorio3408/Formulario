// resultado = document.querySelectorAll("#formulario input").value;
// let nombre_p = $("#nombre").value;
// let precio_p = $("#precio").value;
// let cantidad_p = $("#cantidad").value;
// let tipo_p = $("#tipo").value;
// let registrar_p = $("#registrar").value;
// 
// 
// for (let i = 0; i < resultado.length; i++) {
    // function mostrar_codigoP(){
        // // document.getElementById("formulario").value = resultado[i];
    // }
// }
// 
// 



// function escribir(){ 
    // escribe = document.getElementById("caja")
    // nombre_p = document.getElementById("nombre").value;
    // document.getElementById("caja").value = nombre_p;
    // precio_p = document.getElementById("precio").value;
    // document.getElementById("caja").value = precio_p;
    // cantidad_p = document.getElementById("cantidad").value;
    // document.getElementById("caja").value = cantidad_p;
    // tipo_p = document.getElementById("tipo").value;
    // document.getElementById("caja").value = tipo_p;
// 
    // final = escribe.innerHTML = nombre_p + precio_p + cantidad_p + tipo_p;
    // return final;
// }


// function escribe() {
    // var escribir = document.getElementById("caja")
            // miTitulo = "<h1>" + document.rellenar.codigo.value + "</h1>"
            // miClave = "<h3>" + document.rellenar.nombre.value + "</h3>"
            // miTexto = "<p>" + document.rellenar.precio.value + "</p>"
            // escribir.innerHTML = miTitulo + miClave + miTexto
            // }
// window.onload = function() {
// document.rellenar.ver.onclick = escribe
// }   

// function nombreP(){
    //  document.getElementById("codigo").value = resultado;
// }
// 

function mostrar(){
    var escribir = document.getElementById("caja")
    var valor1 = document.getElementById("codigo").value;
    var r1 = ("El codigo es: "+valor1+"<br>")
    var valor2 = document.getElementById("nombre").value;
    var r2 = ("El nombre del producto es: "+valor2+"<br>")
    var valor3 = document.getElementById("precio").value;
    var r3 = ("El precio del producto es: "+valor3+"<br>")
    var valor4 = document.getElementById("cantidad").value;
    var r4 = ("La cantidad es: "+valor4+"<br>")
    var valor5 = document.getElementById("tipo").value;
    var r5 = ("El tipo de producto es: "+valor5+"<br>")
    if(Empanada.checked == true){
        var valor6 = document.querySelector("#Empanada").value;
        var r6 = ("Seleccionó: "+valor6+"<br>")
    }else{
        r6 = ("No seleccionó "+"<br>");
    }

    if(Arepa.checked == true){
        var valor7 = document.querySelector("#Arepa").value;
        var r7 = ("Seleccionó: "+valor7+"<br>")
    }else{
        r7 = ("No seleccionó "+"<br>");
    }

    if(Hamburguesa.checked == true){
        var valor8 = document.querySelector("#Hamburguesa").value;
        var r8 = ("Seleccionó: "+valor8+"<br>")
    }else{
        r8 = ("No seleccionó "+"<br>");
    }

    if(terminosy.checked == true){
        var valor9 = document.querySelector("#terminosy").value;
        var r9 = ("Aceptó los Terminos y condiciones"+"<br>")
    }else{
        r9 = ("No aceptó Terminos y condiciones"+"<br>");
    }
  

    escribir.innerHTML = r1 + r2 + r3 + r4 + r5 + r6+ r7 + r8 + r9;
}

























































