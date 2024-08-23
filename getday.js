
//Creamos un objeto Date para obtener la fecha actual
let fechaActual = new Date();

// Obtener el dia de semana (0 = domingo, hasta eñ 6 = sabado)
let diaSemana = fechaActual.getDay();

// Creamos un arreglo para mapear los numeros de dias a los nombre de los dias
let nombreDias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

// Obtenemos el nombre del dia correspondinte al numero obtenido
let nombreDia = nombreDias[diaSemana];

// Imprimir el nombre del dia en la consola
console.log(`Hoy es: ${nombreDia}`);