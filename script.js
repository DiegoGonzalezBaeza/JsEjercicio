do{ 
    var menu = prompt("Necesidades: \n1.- Alimentacion \n2.- Gastos Básicos \n3.- Salud \n4.- Entretenimiento\n5.- Salir");

    switch (menu){
    case "1":
     opcion1();

    break;
    case "2":
     opcion2();
    break;
    case "3":
        alert("A seleccionano 3 Salud")
    break;
    case "4":
        alert("A seleccionano 4 Entretenimiento")
    break;        
    case "5":
        alert("Saliendo del Sistema")
    break;
    default:
        alert("Selecciono un valor erroneo")
    break;

    
}
} while (menu != "5");


function opcion1() {
    var alimentacion = parseInt(prompt("Que tipo de alimento deseas? \n 1-Carne \n 2-Vegano \n 3-Vegetariano")); 
    if (alimentacion === 1) { alert("a Seleccionado 1 Carne"); } 
    else if (alimentacion === 2) { alert("a Seleccionado 2 Vegano"); } 
    else if (alimentacion === 3) { alert("a Seleccionado 3 Vegetariano"); } 
    else { alert("Opcion Invalida"); };
    }
function opcion2() {
    var alimentacion = parseInt(prompt("Que tipo de alimento deseas? \n 1-Carne \n 2-Vegano \n 3-Vegetariano")); 
    if (alimentacion === 1) { alert("a Seleccionado 1 Carne"); } 
    else if (alimentacion === 2) { alert("a Seleccionado 2 Vegano"); } 
    else if (alimentacion === 3) { alert("a Seleccionado 3 Vegetariano"); } 
    else { alert("Opcion Invalida"); };
    }