
const bg= "linear-gradient(45deg, rgba(52, 152, 219, 1) 0%, rgba(26, 188, 156, 1) 50%)";
const style_console = `background: ${bg}; color:white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold`
console.log("%c1.- Ejercicio 01: Declaración de Variables ",style_console);


// 1. Declaración de variables utilizando el prefijo VAR
var miNombre = "Marianna Mayte";
var misApellidos;

console.warn("-- Declaracion de Variables utilizando el prefijo VAR -- ")

//utilizaremos la funcion console.log para imprimir el valor actual de la variable
console.log("El valor de la variable miNombre es =", miNombre);
console.log("El valor de la variable misApellidos es =", misApellidos);
//esto arroja un undefined dado que la variable no ha sido inicializada, es decir no se le ha asignado un valor que almacenar

misApellidos= "Gutiérrez Gayosso";
// En este momento la variable ya tiene un valor almacenado por que al imprimirlo deberá mostrar dicho dato
console.log("El valor de la variable misApellidos es =", misApellidos);

//Para actualizar el valor de una variable previamente definida solo basta con igualar el nuevo valor 
miNombre = "Marianna Mayte";
console.log("Hola, ", miNombre, misApellidos);


// 2. Declaración de Variables utilizando el prefijo CONST
console.warn("-- Declaración de Variables utilizando el prefijo CONST -- ");

/* La palabra reservada CONST nos permite a nivel memoria reservar espacio para almacenar datos de una constante que a diferencia de una VARIABLE esta no puede camibar su valor durante la ejecución del programa, de igual manera no se pueden declarar constantes sin obligatoriamente inicializarlas, es decir asignarles un valor específico, por ejemplo:*/

 const miMatricula = "240174"

// Imprimir el valor de una constante
console.log("El valor actual de la constante miMatricula es: ", miMatricula);

//const miEdad; //   -- Esto ocasiona un error por que la constante no fue inicializada

//miMatricula = "240174";  //   -- Ocasiona un error por que el valor de una CONSTANTE no puede cambiar una vez a sido asignado.


// 3. Declaración de Variables utilizando el prefijo LET

/* La palabra reservada LET en JavaScript nos permite declarar variables de una manrera muy similar a VAR, con la diferencia del alcance (SCOPE) de la misma, es decir aquellas variables declaradas con var tienen un alange global durante la ejecución y la let se limitan a funciones, ciclos o bloques de código , eliminando los valores almacenado una vez cumplen su función */

 var miFechaNacimiento = new Date("2006-11-28");

function calcularEdad(fechaNacimiento)
{
    //Para calcular la edad requerimos de la fecha del día de hoy
    let fechaHoy = new Date();

    // Dado que los datos de fecha son almacenados en milisegundos por default en JavaScript, necesitamos una variable que nos permite saber el numero de milisegundos por día
    let milisegundosPorDia = 24*60*60*1000;

    //Ya que tenemos los miliseguntos por día tenemo que restar a la fecha de hoy, la fecha en que nacimos para calcular los milisegundos que hemos vivido.
    let diasVividos = (fechaHoy - fechaNacimiento)/milisegundosPorDia;

    // invocamos el método matemático de la función piso (FLOOR)
     let edad = diasVividos /365.25
     edad = Math.floor(edad);

     return edad;
}

console.warn("-- Declaración de Variables utilizando LET --")
console.log("El valor dela variable miFechaNacimiento es: ", miFechaNacimiento);
var miEdad = calcularEdad(miFechaNacimiento);
console.log("Después de ejecutar la función calcularEdad(), puedo saber que tienes: ",
    miEdad, " años. ");   
    
    
if(miEdad >= 18)
    {
        var esMayordeEdad = true;
        var esMenordeEdad = false;
    }   
    else
    {
        esMayordeEdad= false;
        esMenordeEdad = true;
    }

console.log("En base a tu edad puedo deducir que el valor de esMayordeEdad es: ", esMayordeEdad, "y el valor de esMenorDeEdad es:", esMenordeEdad);

 // interpolacion de datos

 /* Para interpolar datos en JavaScript, es decir mezclar información estatica, que no cambia con datos
 dinamicos que pueden cambiar durante la ejecución del programa se requiere comenzar la cadena con un backtic (') y
 los datos que son dinamicos estarán encerrados en llaver curvas {} atendidos por un signo de dolar $*/

console.warn("-- Interpolación de Datos --");
console.log(`Hola, ${miNombre} ${misApellidos} se que tienes: ${miEdad} años; por lo que eres: ${esMayordeEdad?' mayor de edad': ' menor de edad'}.`)

