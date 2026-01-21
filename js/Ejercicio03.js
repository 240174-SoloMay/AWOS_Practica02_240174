// Personalizamos el separador del ejercicio 03
console.log("%cEjercicio 03: Funciones ", style_console);

//1.- Funciones Procedurares, funciones vacias (VOID) o funciones que no retornan un valor
function saludar()
{
    console.log("Bienvenid@, al Sistema de Bienes Raices");
}

console.warn("1.- Funciones Procedulares")
saludar();

/* 2.- Funciones Procedulares, con parámetros de entrada, es decir que reciben datos para funcionar*/

function saludarUsuario(nombreUsuario, generoUsuario)
{
    if(generoUsuario == "H")
        console.log(`Bienvenido, ${nombreUsuario} al Sistema de Bienes Raíces`);
    else if(generoUsuario == "M")
        console.log(`Bienvenida, ${nombreUsuario} al Sistema de Bienes Raíces`);
    else
    console.log(`Bienvenid@, ${nombreUsuario} al Sistema de Bienes Raíces`);
}

console.warn("2.- Funciones Procedurales con parámetros de entrada")
// Test1
console.log("nombreUsuario = Ax, generoUsuario = H")
saludarUsuario("Ax", "H");
// Test2
console.log("nombreUsuario = May, generoUsuario = M")
saludarUsuario("May", "M");
// Test3
console.log("nombreUsuario = Binarie, generoUsuario = null")
saludarUsuario("Binarie", null);

/* 3. Funciones que retornan un valor para que no reciben parámetros (datos de entrada) */
function fechaActual()
{
    const fecha = new Date ()//milisegundos 
    const dias = ["Domingo", "Lunes","Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const fecha_formatoMX = `${dias[fecha.getDay()]}, ${fecha.getDate()} de {meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;

    return fecha_formatoMX
}

console.warn("3. Funciones que retornan un valor, pero o tienen parámetros de entrada")
let hoy = fechaActual();
console.log(fechaActual);
console.log(typeof(fechaActual));
console.log(hoy);

// 4. Funciones que retornan un valor y que reciiben parámetros de entrada

function login(username, password)
{
    let userValidation = false;
    if(username==="admin" && password==="12345"){
        userValidation = true;
        console.log("Bienvenido usuario admin!")
        }
    else if(username==="admin" && password!=="12345"){
        userValidation = false;
        console.log("Lo sentimos la contraseña es incorrecta.")
        }
    else if(username!="admin" && password==="12345"){
        userValidation = false;
        console.log("Lo sentimos el nombre de usuario no existe.")
        }
    else if (username!="admin" && password!=="12345"){
        userValidation = false;
        console.log("Por favor verifica el nombre de usuario y la contraseña")
        }
    return userValidation;
}

console.warn("4. Funciones que retornan un dato, pero también reciben parametros de entrada");
var loginStatus;
//Test 1 - Usuario y contraseña correctos
console.log("Test 1 - usuario: admin, password: 12345")
loginStatus = login("admin", "12345");
console.log(`${loginStatus?"El usuario admin se ha logueado satisfactoriamente.":"Hubo un error en el login del usuario admin}"}`);

//Test 2 - Usuario y contraseña correctos
console.log("Test 2 - usuario: administrador, password: 12345")
loginStatus = login("administrador", "12345");
console.log(`${loginStatus?"El usuario admin se ha logueado satisfactoriamente.":"Hubo un error en el login del usuario admin}"}`);

//Test 3 - Usuario y contraseña correctos
console.log("Test 3 - usuario: admin, password: 1234567890")
loginStatus = login("admin", "1234567890");
console.log(`${loginStatus?"El usuario admin se ha logueado satisfactoriamente.":"Hubo un error en el login del usuario admin}"}`);

//Test 4 - Usuario y contraseña correctos
console.log("Test 4 - usuario: marcor, password: mipassword")
loginStatus = login("marcor", "mipassword");
console.log(`${loginStatus?"El usuario admin se ha logueado satisfactoriamente.":"Hubo un error en el login del usuario admin}"}`);
