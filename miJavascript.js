/*declara e inicializa 2 variables
llamadas Nombre de tipo String, Edad de tipo Numero Entero*/

let nombre = "Alberto";
let edad = 39;

/* crea una operacion sencilla con la variable edad,
declara una variable llamada SUMA y que guarde la suma de
edad mas 5 */

let suma = edad + 5;

document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("mensaje").innerText =
        `Hola ${nombre}, dentro de 5 años tendrás${suma} años.`;
    document.getElementById("mensaje").classList.remove("alert - danger");
    document.getElementById("mensaje").classList.add("alert-success");
});