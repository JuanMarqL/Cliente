/*const numAleatorio = valor => Math.trunc(Math.random() * valor ) +1;
document.write(numAleatorio(10));*/

 /*function suma (a , b ){

  let a = prompt("Introduce un numero");

  let b = prompt("Introduce un numero");
  
  let result = parseInt(a) + parseInt(b);

  document.write(result);

};*/

/*let suma = () =>{

  let num1 = prompt("introduce el primer numero");
  let num2 = prompt("Introduce el segundo numero");

  let resultado = parseInt(num1) + parseInt(num2);

  document.write(resultado);
}

let resta = () =>{

  let num1 = prompt("introduce el primer numero");
  let num2 = prompt("Introduce el segundo numero");

  let resultado = parseInt(num1) - parseInt(num2);

  document.write(resultado);
}


let division = () =>{

  let num1 = prompt("introduce el primer numero");
  let num2 = prompt("Introduce el segundo numero");

  let resultado = parseInt(num1) / parseInt(num2);

  document.write(resultado);
}


let multiplicacion = () =>{

  let num1 = prompt("introduce el primer numero");
  let num2 = prompt("Introduce el segundo numero");

  let resultado = parseInt(num1) * parseInt(num2);

  document.write(resultado);
}*/

let ciudad = new Map([
  ['malaga', 500],
  ['cordoba', 350],
  ['cadiz',    50]
]);

mostrarCiudad = () =>{
  
  ciudad.forEach( (value, key, Map) => {
    alert(`${key}: ${value}`); // cadiz : 50 
  });
 

}

cantidadCiudad = () =>{
  alert("Existe " + ciudad.size + " ciudades");
}

borrarCiudad = () =>{
  let key = prompt("Introduce la ciudad que quieres eliminar")

  alert("la ciudad " + ciudad.delete(key) + " ha sido eliminada")
}

añadirCH = () =>{

  let ciudades = prompt("Introduce una ciudad")
  let habitantes = prompt("Introduce el numero de habitantes")
  alert(ciudad.set(ciudades,habitantes));

}

/*mostrarCiudad = () => {
  let result = "";
  for (let [key, value] of ciudad) {
          result += key + " = " + value + "; ";
  }
  alert (result);
}*/








