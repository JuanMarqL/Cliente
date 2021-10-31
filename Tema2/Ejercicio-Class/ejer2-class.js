// definimos la clase aeropuerto
class Aeropuerto{

    constructor(nombre, ciudad, numVuelosDiarios){
        //Atributos de la clase Aeropuerto
        this.nombre = nombre;
        this.ciudad = ciudad;
        //Aqui guardaremos el array del numero de vuelos diarios
        this.arrayNumVuelosDiarios = new Array();

        // bucle inicializador de num de vuelos	
		for (let i = 0; i < numVuelosDiarios; i++) {
			// Creamos el vuelo 
			this.arrayNumVuelosDiarios[i] = new vuelo (i, 10, 12); //10 - hora de llegada , 12- hora de salida
		}
    }

    consultaVueloSalida(){

        let cod = window.prompt("Introduce el codigo del vuelo de salida");
        this.arrayNumVuelosDiarios[cod].consultarHoraSalida();
    }

    consultaVueloLlegada(){

        let cod = window.prompt("Introduce el codigo del vuelo de llegada");
        this.arrayNumVuelosDiarios[cod].consultarHoraLlegada();
    }

    modificarHoraSalida(){

        let cod = window.prompt("Introduce el codigo del vuelo de salida");
        let nuevaHoraS = window.prompt("Introduzca una nueva hora para el vuelo de salida");
        this.arrayNumVuelosDiarios[cod].cambiarHoraSalida(nuevaHoraS);
    }

    modificarHoraLlegada(){

        let cod = window.prompt("Introduce el codigo del vuelo de llegada");
        let nuevaHoraLle = window.prompt("Introduzca una nueva hora para el vuelo de llegada");
        this.arrayNumVuelosDiarios[cod].cambiarHoraLlegada(nuevaHoraLle);
    }


}

//definimos la clase vuelo
class vuelo {

    constructor(codigo, hora_llegada, hora_salida){
           //Atributos de la clase Vuelo
        this.codigo = codigo;
        this.hora_llegada = hora_llegada;
        this.hora_salida = hora_salida;
    }

    //Funciones de la clase vuelo

    consultarHoraSalida() {
        alert("El vuelo " + this.codigo + " sale a las " + this.hora_salida);
    }

    consultarHoraLlegada() {
        alert("El vuelo " + this.codigo + " llega a las " + this.hora_llegada);
    }

    cambiarHoraSalida(nuevaHoraSalida) {
        this.hora_salida = nuevaHoraSalida;
    }

    cambiarHoraLlegada(nuevaHoraLlegada) {
        this.hora_llegada = nuevaHoraLlegada;
    }

 

}

  function main(){

    // creo un aeropuerto
    let aero = new Aeropuerto("wis", "malaga", 5);

    
    let siguiente = new Boolean(true);

    let menu;

    while (siguiente) {
        menu = window.prompt("1. Consultar hora de salida " + " 2. Consultar hora de llegda" + " 3. Modificar hora de llegada" + "4. Modificar hora de salida" + "5. Salir o Terminar");
 
        switch(menu) {
            case '1':
                aero.consultaVueloSalida();
               
              break;
            case '2':
                aero.consultaVueloLlegada();
              break;
              case '3':
                  aero.modificarHoraLlegada();
                  break;
                  case '4':
                      aero.modificarHoraSalida();
                    break;
            case '5':
                siguiente = false;
                break;
            default:
             alert("Introduce una de las opciones correcta");
          } 

    }
}
main();
  
 
 












 /* Volver a mirar
  //fumciones clase aeropuerto

    modificarVueloLlegada(codigoTeclado, nuevaHora_llegada){
        
        for(let i = 0; i < this.numVuelosDiarios.length; i++){

            if(this.numVuelosDiarios[i].codigo == codigoTeclado){
                this.numVuelosDiarios[i].hora_llegada == nuevaHora_llegada;
            }
        }

    }

    modificarVueloSalida(codigoTeclado, nuevaHora_salida){
        
        for(let i = 0; i < this.numVuelosDiarios.length; i++){

            if(this.numVuelosDiarios[i].codigo == codigoTeclado){
                this.numVuelosDiarios[i].hora_llegada == nuevaHora_salida;
            }
        }
    
    }*/ 