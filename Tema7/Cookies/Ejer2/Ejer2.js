
//W3sc
//Primero, creamos una functionvariable que almacena el nombre del visitante en una cookie.
//Los parámetros de la función anterior son el nombre de la cookie (cname), el valor de la cookie (cvalue) y el número de días hasta que caduque la cookie (exdays)
//La función establece una cookie sumando el nombre de la cookie, el valor de la cookie y la cadena de expiración.
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//Luego, creamos una functionque devuelve el valor de una cookie específica
/*Tome el nombre de la cookie como parámetro (cname).

Cree una variable (nombre) con el texto a buscar (cname + "=").

Decodificar la cadena de cookies, para manejar cookies con caracteres especiales, por ejemplo, '$'

Divida document.cookie en punto y coma en una matriz llamada ca (ca = decodedCookie.split(';')).

Recorra la matriz ca (i = 0; i < ca.length; i++) y lea cada valor c = ca[i]).

Si se encuentra la cookie (c.indexOf(name) == 0), devuelva el valor de la cookie (c.substring(name.length, c.length).

Si no se encuentra la cookie, devuelva ""*/ 
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(cname) {
	document.cookie = cname+'=; expires=Thu, 26 Jan 2021 12:06:15 GMT;path=/';
}

// Funcion para eliminar nuestra Cookie
function eliminarCookie(){
    //llamamos al lafuncion deletecookie y le pasamos por parametro el nombre de la cookie
	deleteCookie("visitas");
}


// cuando cargue la pagina para poder obtener la cookie

window.onload=function (){
    
    //creamos una variable para guardar el id del boton que creamos en el html
	let boton = document.getElementById("botonEliminar");
	boton.onclick= eliminarCookie;
	
    let miCookie=getCookie("visitas");
	// Si no esta establecida, la pongo a 0 y si lo esta sumo 1, para luego re-establecerla
	if(miCookie===""){
		miCookie="0";
	}else{
		miCookie=(parseInt(miCookie)+1).toString();	
	}
	setCookie("visitas",miCookie);
	
	document.getElementById("divVisitas").innerHTML=miCookie;
}

