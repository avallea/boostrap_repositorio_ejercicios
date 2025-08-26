let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

/* ARRAY */

let lista = [ 1,2,3,4,5 ];
console.log (lista [3]); /* indica la tercera posicion de la lista en este caso el 4 porque cuenta desde la posicion 0 no la 1*/
console.log (lista-length);

/*bucle o recorrido, es como un if condicional, de las 3 secciones la primera es la variable, la siguiente la condicional y por ultimo en tercer lugar lo que sucede mientras se cumpla esa condicional, se va a cumplir la condicional hasta que la condicion deje de ser la definida en este caso hasta que i sea diferente a < que  lista.length*/

for (let i = 0; i < lista.length; i++){
    console-log(i);
}

let fruta =["melocorton","melon","manzana","platano", "kiwi"];

function rederizadoFrutas(){
    let listafrutas = document.getElementById("lista");
    listafrutas.innerHTML ="";
    fruta.forEach( fruta => {
        listafrutas.innerHTML += 
        `<li class="list-group-item">${fruta}</li>`;

    });
}

document.getElementById("btnfruta").addEventListener("click", () =>{
    
    renderizadoFrutas();
});

let amigos = ["Javi", "David", "Eli", "Dionisio"];
let contenido ="";
for (let i = 0; i< amigos.length; i++){ /*todo esto nos lo ahorramos previamente con las frutas con el forEach*/
contenido += `<li class="list-group-item">${amigos[i]}</li>`;
}
document.getElementById("btnamigos").addEventListener("click", () =>{
    document.getElementById("listaamigos").innerHTML=contenido;
});
