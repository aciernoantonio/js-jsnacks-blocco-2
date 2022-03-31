//chiedi all'utente un numero per 5 volte

sum = 0;

//ciclo for

for (let i = 0; i < 5; i++) {
    let num = parseInt(prompt("inserisci un numero"));

    sum = sum + num;
}

console.log(sum);