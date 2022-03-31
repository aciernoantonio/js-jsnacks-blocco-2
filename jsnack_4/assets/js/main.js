//crea array di numeri interi

const int_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

//somma tutti gli elementi in posizione dispari

for (let i = 0; i < 10; i++) {

    if (int_num [i] % 2 == 0) {
        sum = sum + int_num [i];
    }
}

console.log(sum);