// let nombre="daiana"
// let apellido="melo"
// console.log(nombre+ apellido)
// let frutas=["anana","sandia","mango","uvas","higos"]
// for (let i = 0; i < frutas.length; i++) 
// { console.log('Las frutas que hay en la ensalada son:'+frutas[i])}
// let edad = [2, 4, 5, 8, 1, 10]
// let sumado = 0
// let promedio = 0


//divido edad.length
// for (let i = 0; i < edad.length; i++) {
//     sumado += edad[i]
// }
// promedio = sumado / edad.length;
// console.log("el promedio es " + promedio)

// const amigo = ["Ryan", "Kieran", "Mark", "Miguel"]
// let bffs = [];
// for (let i = 0; i < amigo.length; i++) {
//     if (amigo[i].length === 4) {
//         bffs.push(amigo[i]);
//     }
// }
// console.log(bffs)

// const listaDeSuper = ["jabon", "pasta", "azucar", "arroz", "tomates"];
// listaDeSuper.push("fideos") //aniado elemento al inicio
// listaDeSuper.shift()//para sacarle primer elemnto al inicio del array
// console.log(listaDeSuper)
// console.log(listaDeSuper.length)//consultar el largo del array
// console.log(listaDeSuper.indexOf("azucar"))//consultar si esxiste un elemnto en el array

// function saludo() {
//     nombre = prompt("cual es tu nombre?")//creo variable pa guardar el imput
//     alert("bienvenido " + nombre)//lo uso para saludarlo
// }


// function calculoMayor(num1, num2) {
//     if (num1 > num2) {
//         alert("el mayor es " + num1)

//     }
//     if (num2 > num1) {
//         alert("el mayor es " + num2)

//     } else {
//         alert("somos iguales")
//     };


// };
// calculoMayor(1, 2)



// const amigo1 = ['Ryan', 'Kieran', 'Mark', 'Miguel']
// const amigo2 = ['Ringo', 'Jhon', 'Paul', 'George', 'Ada', 'Marie']
// const result1 = amigo1.filter(filtrarAmigos);
// const result2 = amigo2.filter(filtrarAmigos)

// function filtrarAmigos(arr) {
//     let bffs = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length === 4) {
//             bffs.push(arr[i]);
//         }
//     }
//     console.log(bffs)

// }
// filtrarAmigos(amigo1)
// filtrarAmigos(amigo2)


// function tirarDado() {
//     const dado = [1, 2, 3, 4, 5, 6];
//     const aleatorio = dado[Math.floor(Math.random() * dado.length)];
//     console.log(aleatorio)
// };

// tirarDado()
// var toDoList = {
//     "tipo de tarea": "compras",
//     dia: "sabado",
//     productos: ["agua", "chocolate", "papitas", "carne"],
//     "cantidad de productos": 10,
//     estado: "pendiente",
//     notificacion: function prioridad() {
//         alert("esta tarea tiene prioridad urgente")
//     },
// }

// console.log(toDoList.dia);
// console.log(toDoList["tipo de tarea"]);
// console.log(toDoList["cantidad de productos"]);
// console.log(toDoList.notificacion())



const superHeroes = {
    "squadName": "Super Hero Squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [{
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": ["Million tonne punch", "Damage resistance", "Superhuman reflexes"]
        }
    ]
}

console.log(superHeroes.squadName)
console.log(superHeroes.members[1].name)
console.log(superHeroes.members[1].powers[2])