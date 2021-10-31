//Definimos la clase hospital
class hospital {

    constructor (nombre, ciudad, numPacientes) {
    // Atributos de la clase hospitasl
        this.nombre = nombre;
		this.ciudad = ciudad;
        //Aqui guardaremos el array de pacientes
		this.arrayPacientes = new Array();

        	// Codigo inicializador del pacientes
		for (let i = 0; i < numPacientes; i++) {
			// Creamos el paciente con id i, nombre pacientei y emfermedadi
			this.arrayPacientes[i] = new paciente(i, "paciente" + i, "asmas",i);
		}
    }

    //Definicion de metodos de la clase

    consultarPaciente(){
        let p = window.prompt("Indique el dni del paciente para consultar");
        this.arrayPacientes[p].consulta();
    }

    altaPaciente(){
        let p = window.prompt("Indique el dni del paciente que quieres dar de alta");
           //El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
           this.arrayPacientes = this.arrayPacientes.slice(p);
    }
}

class paciente{

    constructor(dni, nombre, enfermedad){
    // Atributos de la clase paciente
        this.dni = dni;
		this.nombre = nombre;
		this.enfermedad = enfermedad;
    }

    //Funcion de la clase paciente
    consulta(){
        alert("El paciente con dni " + this.dni + "Tiene una " + this.enfermedad);
     
    }
 
}  

function main(){

    let hospi = new hospital("Frontela", "El puerto de santa maria", 5);

    let siguiente = new Boolean(true);

    let menu;

    while (siguiente) {
        menu = window.prompt("1. Consultar Paciente " + " 2. Alta Paciente" + " 3. Salir");
 
        switch(menu) {
            case '1':
                hospi.consultarPaciente();
              break;
            case '2':
                hospi.altaPaciente();
              break;
            case '3':
                siguiente = false;
            default:
             alert("Introduce una de las opciones correcta");
          } 

    }
}
main();