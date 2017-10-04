function principal2(palabra){
	do{
		var respuesta = prompt("Elige una opcion:1)Cifrar -2)Decifrar");
		if(respuesta != ""){
			if(respuesta == "1") {
				Cifrar();
			} else if (respuesta == "2") {
				Decifrar();
			} else {
				alert("Ingrese una opción válida");
			}
		}
	} while (respuesta == "" || (respuesta != "1" && respuesta != "2"));
}

function Cifrar(){
	     opcionUno=prompt("Escribe una palabra");
	     document.write(opcionUno.chartCodeAt(33));
	     		}	
	     			     

function Decifrar(){
	      opcionDos=prompt("Escribe una palabra");
	      document.write(opcionDos.chartCodeAt())
	
}

principal2();