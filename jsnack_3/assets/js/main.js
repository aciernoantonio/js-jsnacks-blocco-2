const first_name = [`antonio`, `fabio`, `carmine`, `osvaldo`];
const last_name = [` frizzi`, ` pitti`, ` ceri`, ` quasi`];

let full_name;

let fake_list = [];

//generare una lista di nomi e cognomi

let choice = prompt("vuoi aggiungere un nome e cognome alla fake list? [y/n]")

while (choice == `y`) {
    
    full_name = first_name[Math.floor(Math.random() * 3)] + last_name[Math.floor(Math.random() * 3)];
    
    fake_list.push(full_name);
    console.log(fake_list);

    choice = prompt("vuoi aggiungerne un'altro? [y/n]")
}

