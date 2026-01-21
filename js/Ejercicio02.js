// Tipos de datos en Java Script

console.log("%cEjercicio 02: Tipos de Datos ",style_console);

// 1. Undefined - valor por defecto asignado a variables declaradas pero no inicializadas, no es igual a NULL.
console.warn("1.-  UNDEFINED (No Definido)")
let usuarioLogeado; 
var rolUsuario;
const ultimoAcceso = undefined;   

console.log("Valores actuales de las variables");
console.log(`usuarioLogeado = ${usuarioLogeado}`);
console.log(`rolUsuario = ${rolUsuario}`);
console.log(`ultimoAcceso = ${ultimoAcceso}`);

/* En java script existe el método typeof() que nos devuelve el tipo de dato de una variable preficamente declarada.*/


console.log("Tipos de dato de las varibles declaradas:");
console.log(`usuarioLogeado = ${typeof(usuarioLogeado)}`);
console.log(`rolUsuario = ${typeof(rolUsuario)}`);
console.log(`ultimoAcceso = ${typeof(ultimoAcceso)}`);

// Supongamos que un usuario denominado MarcoRamirez99 se ha logeado exitosamente, el valor de la variable debera actualizarce a su username

usuarioLogeado = "SoloMay";

// pero no solo cambiará su valor , también cambiará su tipo

console.log(`El valor de la variable usuarioLogeado es: ${usuarioLogeado}  y su nuevo tipo de dato es: ${typeof(usuarioLogeado)}`);


// 2. BOOLEAN  (TRUE/FALSE) - Verdadero o Falso
console.warn("2.-  BOOLEAN (TRUE/FALSE)")
var hayUsuarioLogeado;

/* Supongamos que nuestra app tendrá un menu específico para los usuarios registrados , en el podrán visualizar sus mensajes o estado de sus publicaciones de renta o venta de propiedades, a diferencia de un usuario que entra de manera incognita a visualar las propiedades. */


function validacionUsuarioLogeado(){
    console.log(`El valor de la variable hayUsuarioLogeado es: ${hayUsuarioLogeado} , que es de tipo: ${typeof(hayUsuarioLogeado)}`);

    if(hayUsuarioLogeado === true)
    {
        console.log("Dado que se ha logeado un usuario la app mostrará el menú de usuario");
    }
    else if(!hayUsuarioLogeado)
    {
        console.log("Dado que no hay usuario logeado la app no mostrara el menú de usuario.");
    }    
    else {
        console.log("No puedo procesar este tipo de dato, requiero de un booleano.");
    }
}

// test1  : usuario logeado = true
hayUsuarioLogeado= true; 
console.log("Test 1")
validacionUsuarioLogeado();

// test2 : usuario logeado = false 
console.log("Test 2")
hayUsuarioLogeado= false; 
validacionUsuarioLogeado();

// test3 : usuario logeado = a cualquier otra cosa
console.log("Test 3")
hayUsuarioLogeado= 52.5; 
validacionUsuarioLogeado();

// 3. NUMBER (Numéricos)
console.warn("3.- NUMBER (NUMÉRICOS)")
/* Es importante saber que Java Script a diferencia de otros lenguajes no diferencia los datos de tipo númerico, lo que para otros leguajes de programación lo que un ENTERO (INT), FLOTANTE (FLOAT), DECIMAL , DOBLE (DOUBLE), para el solo son números (NUMBER)*/

let userID_Owner = 225
let priceProperty = 125000.50
let latGPS = 20.240508
let longGPS =-97.952881
let altGPS = 1180

console.log(`Los valores de las variables declaradas para los datos de la propiedad son:
                    ID del Usuario propietario: ${userID_Owner} 
                    Precio de la propiedad: ${priceProperty}
                    Latitud (GPS) : ${latGPS}
                    Longitud (GPS) : ${longGPS}
                    Altitud (GPS) : ${altGPS}`);

console.log(`Los tipos de datos de las variables declaradas para los datos de la propiedad son:
                    ID del Usuario propietario: ${typeof(userID_Owner)} 
                    Precio de la propiedad: ${typeof(priceProperty)}
                    Latitud (GPS) : ${typeof(latGPS)}
                    Longitud (GPS) : ${typeof(longGPS)}
                    Altitud (GPS) : ${typeof(altGPS)}`);


//4.- STRING (Cadena de Caractéres)

var fullnameOwner = "Marianna Mayte";
let nameProperty = "Hermosa Casa en la Playa de Puerto Vallarta";
let descriptionProperty = "CASA de 2 pisos, 4 HABITACIONES, 2 BAÑOS completos y estacionamiento para 2 AUTOMOVILES a orilla del MAR.";
var statusProperty = "Disponible";
const typeProperty="C";
var addressProperty;

/* Los tipos de datos STRING son un palabras , valores cualitativos de las entidades de nuestra aplicación,  que no tienen un tamaño máximo  y que estan conformadas por carácteres alfabéticos , caracteres especiales como acentos o símbolos de algun idioma*/

console.warn("4. STRING (CADENA DE CARÁCTERES , PALABRAS");

console.log(`El usuario: ${fullnameOwner},
     esta vendiendo o rentando: ${nameProperty}
     que consiste en: ${descriptionProperty}
     actualmente esta en estado: ${statusProperty} y es del tipo: ${typeProperty}`);
console.log(`Las variables declaradas son del tipo:
                fullnameOwner :  ${typeof(fullnameOwner)}
                nameProperty :  ${typeof(nameProperty)}
                descriptionProperty:  ${typeof(descriptionProperty)}
                statusProperty :  ${typeof(statusProperty)}
                typeProperty :  ${typeof(typeProperty)}`);
