//comienzo guardando en variables algunos elementos HTML que me seran necesarios//

let body = document.body;
let boton = document.getElementById("btnModo");
let texto = document.getElementById("texto");

//creo una variable booleana que servira como intgerruptor on/off//
let modoClaro = true;

//agrego al boton una función de escucha/alerta para cuando le clickee. Añado una función para que realice los cambios.//
boton.addEventListener("click", () => {
    if (modoClaro == true) {
        body.classList.remove("bg-light", "text-dark");
        body.classList.add("bg-dark", "text-light");

        texto.innerText = "Estamos en Modo OSCURO 🌙";
        boton.innerText = "☀️ Modo CLARO";
        boton.classList.remove("btn-outline-light");
        boton.classList.add("btn-outline-warning");

        modoClaro = false;
    } else {
        body.classList.remove("bg-dark", "text-light");
        body.classList.add("bg-light", "text-dark");

        texto.innerText = "Estamos en Modo CLARO ☀️";
        boton.innerText = "🌙 Modo OSCURO";
        boton.classList.remove("btn-outline-warning");
        boton.classList.add("btn-outline-light");

        modoClaro = true;
    }
})