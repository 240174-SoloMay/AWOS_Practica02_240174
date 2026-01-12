// Personalizacióbn de salidas a Consola
const bg = "linear gradient"

//  1.Declaración de variables utilizando el prefijo VAR
var minombre = "Marianna Mayte";
var miapellido;

//Utilizaremos  la función "console.log" para imprimir el valor de la variable en la consola del navegador.
console.log("El valor de la variable minombre es = :", minombre);
console.log("El valor de la variable apellido es = :", miapellido)
//  2.que la variable no se ha sido inicializada, es decir no se ha asignado un valor que almacene.

miapellido= "Gutiérrez Gayosso";
//En este momento la variable ya tiene un valor almacenado por que al imprimirle debera de mosrtrar el dicho dato
console.log("El valor de la variable mi apellido es = :", miapellido);

//Para actualizar el valor de una variable previamente definifida solo basta con igualar al nuevo valor
minombre = "Marianna Mayte";
console.log("Hola, ", minombre , miapellido);
//Para actualizar
console.warn("--Declaración de Variables utilizando el prefijo CONST --");

 /* La palabra reservada CONST nos permite a nivel mundial memoria reservar espacio para almacenar datos de una constante que diferencia
  de una variable esta no puede cambiar su valor durante la ejecución del programa, de igual manera no se pueden declarar constantes
  sin obligatoriamente iniciarlas, es decir; asignarles un valor especifico por ejemplo... */
 const miMatricula = "240174"
 //Imprimir el valor de la constante
 console.log("El valor actual de la constante miMatricula es",miMatricula)
 //const miEdad; // --estom ocasiona un erroe porque la variable no fue inicializada
 //miMatricula=240174; --Ocasiona un error porque el valor constante no puede cambiar una vez sido asignado.
 // 3. Declaración de Variables utilizando el prefijo LET

 /* La palabra reservada LET en JavaScript nos permite declarar variables de una manera muy similar a VAR,
 con la diferencia del alcance (SCOPE) */
 var miFechaNacimiento = new Date("2006-11-28");

 function calcularEdad(fechaNacimiento) {
    //Para calcular la edad requerimos de la fecha del día de hoy
    let fechaHoy = new Date();

    /*Dato que los datos de fecha son almacenados en milisegundos por default en JavaScript, necesitamos
    una variable que nos permita saber el numero de milisegundos al dia */
    let milisegundosPorDia = 24*60*60*1000;

    /*Ya que tenemos los milisegundos por día tenemos que restar a la fecha de hoy,
    la fecha en que nacimos para calcular los milisegundos que hemos vivido.*/
    let diasVividos = (fechaHoy - fechaNacimiento)/milisegundosPorDia;

    //invocamos el método matemático de la función piso (FLOOR)
    let edad = diasVividos /365.25
    edad = Math.floor(edad);

    return edad;
 }
 var miEdad = calcularEdad(miFechaNacimiento);
 console.warn("--Declaración de Variables utilizando LET--")
 console.log("--El valor de la variable miFechaNacimiento es:", miFechaNacimiento);
 var miEdad = calcularEdad(miFechaNacimiento);
 console.log("Después de ejecutar la función calcularEdad(), puedo saber que tienes: ", miEdad, " años. ");

 if(miEdad >= 18)
 {
    var esMayordeEdad = true;
    let esMenordeEdad = false;
 }
 else
 {
    esMayordeEdad = false;
    let esMenordeEdad = true;
 }

 console.log("En base a tu edad puedo deducir que el valor de esMayordeEdad es: ",
 esMayordeEdad, "y el valor de esMenordeEdad es:", esMenordeEdad);

 // interpolacion de datos

 /* Para interpolar datos en JavaScript, es decir mezclar información estatica, que no cambia con datos
 dinamicos que pueden cambiar durante la ejecución del programa se requiere comenzar la cadena con un backtic (') y
 los datos que son dinamicos estarán encerrados en llaver curvas {} atendidos por un signo de dolar $*/

console.warn("-- Interpolación de Datos --");
console.log(`Hola, ${miNombre} ${misApellidos} se que tienes: ${miEdad} años; por lo que eres: ${esMayordeEdad?' mayor de edad': ' menor de edad'}.`)
