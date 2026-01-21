//Estilización de la barra zona de pruebas en el DevTools en el navegador
console.log("%cEjercicio 04: Objetos ",style_console);

console.warn("1. Propiedades de un Objeto")
// Esto no es un objeto son variables independientes que no se encuentran asociadas
let propertyID = 1;
let propertyName = "Departamento en el Centro de Ciudad de México";
let propertyDescription = "Hermoso departamento de 3 recámaras , 1 baño y 1 cajón de estacionamiento ubicado en el Centro de Ciudad de México, Ubicado en un tercer piso."
let propertyType = "D";     // H: House  D: Deparment T: Terrain L: Locale  W: Warehouse  C: Cabain
let propertyIsSaleable = false;    // Se vende?
let propertyIsRentable = true;    // Se renta?
let propertyPrice = 7500.00;
let propertyLat = 19.4283813;
let propertyLong = -99.1020177;
let propertyToken = Symbol("D-12558-CDMX-MX-S");
let propertyIncludedServices = ["Agua", "Luz", "Gas"];
let propertyImage = null
let propertyOwnerID = 32412
let propertyStatus = "Good"

console.log(`Datos de la propiedad en RENTA:
    Nombre: ${propertyName}
    Descripción:  ${propertyDescription}
    Tipo: ${propertyType}
    Precio: ${propertyPrice}
    Ubicación:  Latitud: ${propertyLat}  Longitud: ${propertyLong} 
    Servicios incluidos: ${propertyIncludedServices}
    En renta:  ${propertyIsRentable}
    En venta: ${propertyIsSaleable}
    Token:  ${propertyToken.description}
    Dueño: ${propertyOwnerID}
    Imagen: ${propertyImage}`);

//2. Declaración de un objeto 
/* Para declarar un objeto en JS es necesario asignarle un nombre y todas sus propiedades irán entre {} y separadas por coma en el order clave : valor */
console.warn("2. Declaración de el objeto property1")
property1 = {
    id: 1,
    name: "Departamento en el Centro de Ciudad de México", 
    description:"Hermoso departamento de 3 recámaras , 1 baño y 1 cajón de estacionamiento ubicado en el Centro de Ciudad de México, Ubicado en un tercer piso.", 
    type: "D", 
    price:7500.00, 
    isRentable: true,
    isSaleable: false,
    includedServices :  ["Agua", "Luz", "Gas"],
    lat: 19.4283813,
    long: -99.1020177,
    status: "Good", 
    token: Symbol("D-12558-CDMX-MX-S") ,
    ownerID: 32412

}


// Impresión del obejto en formato tabla
console.table(property1)