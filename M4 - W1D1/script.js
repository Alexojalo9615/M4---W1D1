// 1) Crea  una funzione che controlli due numeri interi. Ritorna 'true' se uno dei due è 50 o se la somma dei due è 50.

let primo = document.getElementById("primo");
let secondo = document.getElementById("secondo");



function numInteri() {
    if (primo.value == 50 || secondo.value == 50) {

        let cont = document.getElementById("cont");
        let btn = document.createElement("button");
        btn.classList.add("btn");
        cont.appendChild(btn);
        btn.innerText = "True"

        console.log("true");


    }

    else if ((parseInt(primo.value) + parseInt(secondo.value)) == 50) {

        let cont = document.getElementById("cont");
        let btn = document.createElement("button");
        btn.classList.add("btn");
        cont.appendChild(btn);
        btn.innerText = "True"

        console.log("true");

    }

    else {

        let cont = document.getElementById("cont");
        let btn = document.createElement("button");
        btn.classList.add("btn");
        cont.appendChild(btn);
        btn.innerText = "False"

        console.log("false");

    }
}

// 2) Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.



// 3) Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.

let num1 = document.getElementById("primo3");
let num2 = document.getElementById("secondo3");


function verifica() {


    if ((num1.value >= 40 && num1.value <= 60 && num2.value >= 40 && num2.value <= 60)) {

        let cont3 = document.getElementById("cont3");
        let newBtn = document.createElement("button");
        newBtn.classList.add("btn");
        cont3.appendChild(newBtn);
        newBtn.innerText = "True"

        console.log("true");
    }

    else if ((num1.value >= 70 && num1.value <= 100 && num2.value >= 70 && num2.value <= 100)) {

        let cont3 = document.getElementById("cont3");
        let newBtn = document.createElement("button");
        newBtn.classList.add("btn");
        cont3.appendChild(newBtn);
        newBtn.innerText = "True"

        console.log("true");

    }

    else {


        let cont3 = document.getElementById("cont3");
        let newBtn = document.createElement("button");
        newBtn.classList.add("btn");
        cont3.appendChild(newBtn);
        newBtn.innerText = "False"

        console.log("false");

    }

}

// 4) Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con "Los" o "New", altrimenti ritorni `false`.

let nameCity = document.getElementById("primo4");
let btn4 = document.getElementById("btn4")

function city(nameCity) {

    nameCity = nameCity.value

    if (nameCity.startsWith("Los") || (nameCity.startsWith("New"))) {


        console.log("Los Angeles");

        return nameCity

    }

    else {

        console.log("false");

        return false
    }


}

btn4.addEventListener("click", () => {
    city(nameCity)
})

// 5) Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato come parametro.


let array = []
let numeroEl = 10
let max = 100

function somma(array) {

    for (i = 0; i < numeroEl; i++) {

        array.push(Math.floor(Math.random() * max))

    }
    console.log(array);


    let somme = 0

    array.forEach(numero => {
        somme = somme + numero
    })

    let son = document.getElementById("son");
    let par = document.createElement("p");
    son.appendChild(par);
    par.innerText = somme

    console.log(somme);

    return somme;

}


// 6) Crea una funzione che controlli che una array NON contenga i numeri 1 o 3. Se NON li contiene, ritorna `true`, altrimenti ritorna `false`.

let array2 = []
let numeroEl2 = 10 // Numero di elementi da generare
let max2 = 20 // Massimo valori dei numeri generati


function prova() {

    for (j = 0; j < numeroEl2; j++) {

        array2.push(Math.floor(Math.random() * max2))

    }
    console.log(array2);
}

function contenitore(arr) {

    // Restituisce "true" se l'array contiene 1 o 3, altrimenti "false"

    return arr.includes(1) || arr.includes(3);
}

function verificaArr() {

    prova(); // Genera l'array

    if (!contenitore(array2)) {

        console.log("L'array non contiene 1 o 3 ");
        let son2 = document.getElementById("son2")
        let pro = document.createElement("p")
        son2.appendChild(pro)
        pro.innerText = `L'array non contiene 1 o 3`

    } else {

        console.log("L'array contiene 1 o 3");
        let son2 = document.getElementById("son2")
        let pro = document.createElement("p")
        son2.appendChild(pro)
        pro.innerText = `L'array contiene 1 o 3`

    }
}


// 7) Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
// Angolo acuto: meno di 90° => ritorna "acuto"
// Angolo ottuso: tra i 90° e i 180° => ritorna "ottuso"
// Angolo retto: 90° => ritorna "retto"
// Angolo piatto: 180° => ritorna "piatto"

function angolo(gradi) {

    if (gradi < 90) {

        console.log("acuto");
        return "acuto"

    }

    else if (gradi > 90 && gradi < 180) {

        console.log("ottuso");
        return "ottuso"

    }

    else if (gradi === 90) {

        console.log("retto");
        return "retto"

    }

    else if (gradi === 180) {

        console.log("piatto");
        return "piatto"

    }
    else {
        console.log("valore nullo");
        return "valore nullo"

    }
}

function calcolaAng() {

    const angoloInput = document.getElementById("ang");
    const risultatoOutput = document.getElementById("risultato");
    const valoreAngolo = parseFloat(angoloInput.value);

    if (isNaN(valoreAngolo) || valoreAngolo < 0) {
        risultatoOutput.innerText = "Inserisci un valore valido !"

    }
    else {
        const angolo2 = angolo(valoreAngolo);
        risultatoOutput.innerText = `L'angolo è: ${angolo2}`
    }

}

// 8) Crea una funzione che crei un acronimo a partire da una frase. Es. "Fabbrica Italiana Automobili Torino" deve ritornare "FIAT".

function acronimo() {

    const azienda = document.getElementById("az").value;


    if (!azienda) {

        let risultato2 = document.getElementById("risultato2")
        risultato2.innerText = `Risultato non valido, riprova!`
    }

    else {

        let risultato2 = document.getElementById("risultato2")
        let ris = azienda;
        console.log(azienda);

        let ris2 = ris.split(' ')
        console.log(ris2);
        let ris3 = ''

        for (let i = 0; i < ris2.length; i++) {

            ris3 = ris3 + ris2[i][0]
            console.log(ris3);
        }

        console.log(ris3);
        risultato2.innerText = ris3
    }
}