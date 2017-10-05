function principal(palabra){
	do{
		var respuesta = prompt("Elige una opcion:1)Cifrar -2)Decifrar");
		if(respuesta != ""){
			if(respuesta == "1") {
				cifrar();
			} else if (respuesta == "2") {
				decifrar();
			} else {
				alert("Ingrese una opción válida");
			}
		}
	} while (respuesta == "" || (respuesta != "1" && respuesta != "2"));
}

function cifrar (palabra){
	     opcionUno=prompt("Escribe una palabra");
	 }
	

function  decifrar (palabra){
	     opcionDos=prompt("Escribe una palabra");}
	    
principal();