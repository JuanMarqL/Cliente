function datos(){

    let nombre = "juan";
    let edad = 24;

    document.open();
    document.write(" Mi nombre es " + nombre + "<br>" +" y tengo " + edad + " años ");
    document.close();

    }

    function imrpimir( nomEmpleado, sueldo){

        nomEmpleado="marco";
        sueldo=200;


        document.write(" El nombre del empleado es " + nomEmpleado + " y su sueldo es " + sueldo);
    }


function correo(){

    let usuario = prompt("Introduce tu nombre de usuario");
    let contraseña = prompt("Introduce tu contraseña");
    document.write("El usuario es " + usuario + " y su contraseña es " + contraseña);
}
    

function cuadrado(){

    let lado = prompt("Introduce el lado del cuadrado");
    let resultado=0;

    resultado = lado*4;

    document.write("El perimetro del cuadrado es: " + resultado);

}

function calculo(){

    let num1 = prompt("Introduce el primer numero");
    let num2 = prompt("Introduce el segundo numero");
    let num3 = prompt("Introduce el tercer numero");
    let num4 = prompt("Introduce el cuarto numero");

    let resultado1= parseInt(num1) + parseInt(num2);
    let resultado2= num3 * num4;

    //Arreglar la suma
    document.write("La suma de los dos primeros numero es: " + (resultado1));
    document.write("La multiplicacion de los dos ultimos numero es: " + resultado2);
    
}

function Cpromedio(){

    let nota1 = prompt("Introduce el primer numero");
    nota1=parseInt(nota1);
    let nota2 = prompt("Introduce el segundo numero");
    nota2=parseInt(nota2);
    let nota3 = prompt("Introduce el tercer numero");
    nota3=parseInt(nota3);

    let suma= nota1 + nota2 + nota3;

   let promedio= suma/3;

   if (promedio >= 7 ) {
       alert("Promocionado");
   }

   document.write("El promedio de las notas es : " + promedio);

   let clave1 = prompt("Introduce una clave");
   let clave2 = prompt("Introduce otra clave");

   if (clave1 == clave2) {
       
    alert("Las claves son iguales");

   }else{
       alert("Las claves no son iguales");
   }

}