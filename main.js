//------------------------------------------//
//             Arrays and Maps
//------------------------------------------//
//variables
const nombre = ["H", "a", "n", "n", "s"];
const apellido = ["J", "u", "a", "r", "e", "z"];


//ejercicio #1
for(i = 0; i < nombre.length; i++){

    console.log(nombre[i]);
}


//ejercicio #2
for(i = 0; i < nombre.length; i++){

    let vocales = ["a", "e", "i", "o", "u"];
    let consonantes = ["b", "c", "d", "f", "g", "h", "j", "k", "m", "n","p", "q", "r", "s", "t","v", "w", "x", "y", "z"];

    if(vocales.includes(nombre[i])){
        console.log("He encontrado la vocal " + nombre[i]);

    } else if(consonantes.includes(nombre[i].toLowerCase())){
        console.log("He encontrado la consonante " + nombre[i]);
    
    } else{
        console.log("Los nombres en pantalla, no contienen el numero " + nombre[i]);
    }
}

//ejercicio #3
var myMap = new Map();

nombre.forEach( letter => {
        
    if (myMap.has(letter)){
        // get the value and asigned to "letter_count"
        let letter_count = myMap.get(letter);
        // adding values to the map
        myMap.set(letter, letter_count + 1);

    }else{
    // adding values to the map
        myMap.set(letter, 1);    
    }
})


console.log(myMap);


//ejercicio #4
//combine 2 or more arrays
const fullname = [...nombre," " , ...apellido];
console.log(fullname);



//ejercicio #6


const str = "'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email"; 
const buscar_correo = /[a-zA-z0-9ñ._-]+@[a-zA-z0-9ñ._-]+[a-zA-z0-9-_]/g;
const resultado_busqueda = str.match(buscar_correo);
console.log(resultado_busqueda);


























