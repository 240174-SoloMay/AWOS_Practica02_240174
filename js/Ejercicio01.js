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

