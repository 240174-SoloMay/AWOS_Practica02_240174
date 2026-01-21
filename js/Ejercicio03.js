
// FUNCIONES ANÓNIMAS, FUNCIONES FLECHA (ARROW, FUNCIONES LAMBADA)
/* A diferencia de las funciones nombradas este tipo de funciones no suelen ser reutilizadas en el código
solo se ejecutan una sola vez, dando velocidad, individualidad y privacidad a los datos utilizados en el proceso.*/

// 5. Función aninima sin parámetros
isNewUser = function(){
    const hoy = new Date();

    return (
        lastLogin.getFullYear() === hoy.getFullYear() &&
        lastLogin.getMonth() === hoy.getMonth() &&
        lastLogin.getDate() === hoy.getDate()
    );
};

console.warn("5. Funcines Anonimas, sin parámtros")

console.log("Test 1 - Fecha de ultimo acceso es igual a la fecha de hoy");
console.log(`La fecha del último acceso es: ${lastLogin}`);
console.log(`El usuario logeado es: ${isNewUser()?"Nuevo Usuario": "Usuario Antiguo."}`);

console.log("----------------------------------------------------");
lastLogin = new Date("2026/01/19");
console.log("Test 2 - Fecha de ultimo acceso es diferente a la fecha de hoy");
console.log(`La fecha del último acceso es: ${lastLogin}`);
console.log(`El usuario logeado es: ${isNewUser()?"Nuevo Usuario": "Usuario Antiguo"}`);

// 6. Funciones Anónimas con Parámetros  (Versión Arrow o Lambda)

const sumar =  (a, b) =>{
    let resultado= a+b;
    return resultado;
}

console.warn("6. Funciones Anónima con Parámetros")
console.log(`El resultado de la suma de 15 + 83 es: ${sumar(15,83)}`);

/* Cuando la función anónima tiene solo una línea de operación se puede usar una versión simplificada que no usa {} llaves , ni la palabra reservada (return) */

const multiplicar = (a,b) => a*b;
console.log(`El resultado de la suma de 15 + 125 es: ${multiplicar(15,125)}`);

// 7. Funciones Callback (Regreaso de llamado)
console.warn("7. Funciones Anónimas Callback (Respuesta)")
const recoverPassword = function(email, callback)
{

    // Generamos el código a enviar al usuario.
    const recoveryCode= Math.floor(1000000 + Math.random()*900000)

    console.log(`
=======================================================================
Solicitud de recuperación recibida
Correo del usuario sollicitante: ${email}
Generando Código de Recuperación...
Código de Seguridad Generado: ${recoveryCode}
Enviando el correo al usuario...
Correo Enviado a : ${email}, con el código de seguridad: ${recoveryCode}
=======================================================================`);

// definiendo la respues del sistema
const response ={
    status: "OK",
    message: "Código de recuperación enviado satisfactoriamente."
};

callback(response);
};

// Invocación de una función callback
recoverPassword("solomay@gmail.com", 
    function(systemResponse){
        console.log("Respuesta del sistema: ");
        console.log(systemResponse.message);
    });