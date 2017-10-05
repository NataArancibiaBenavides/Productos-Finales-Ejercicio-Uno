// Cifrado Cesar  
function principal(palabra){ // Se cra una función llamada principal 
	do{  // se genera un Bucle itera hasta que se de  una opcion valida
		var respuesta = prompt("Elige una opcion:1)Cifrar -2)Decifrar");// Se genera un prompt en donde el usuario ingresara una alternativa 1) Cifrar o 2)Descifrar.
		if(respuesta != ""){ // si la respuesta es vacia se pasa al siguiente if en donde el usuario tiene que responder 1) o 2)
			if(respuesta == "1") { // si la respuesta es identica a 1 .
				Cifrar(); // acá al marcar 1 la respuesta será Cifrar.
			} else if (respuesta == "2") {// si la respuesta es identica a 2 
				Decifrar();// la respuesa sera decifrar
			} else {
				alert("Ingrese una opción válida");// si no se ingresan las opciones 1, 2 o vacio.
			}
		}
	} while (respuesta == "" || (respuesta != "1" && respuesta != "2"));
}

/*var cifrar = function (palabra){ // es esta Function 
	     opcionUno=prompt("Escribe una palabra");
	     var cifrando= '';
	     for(var i =0;i <opcionUno.length;i++){
	     	var newOpcion=opcionUno[i];
	     	if(newOpcion.match(/[a-z]/i)){
	     		var aCodigoAscci=opcionUno.charCodeAt(i);}
	     		if((aCodigoAscci >=65 )&& (aCodigoAscci <= 90 )){
	     			newOpcion=String.fromCharCode(((aCodigoAscci - 65 +33)%26)+65);
	     		}else if {((aCodigoAscci>= 97)&&(aCodigoAscci<=122))
	     			newOpcion=String.fromCharCode(((aCodigoAscci - 97 +33)%26)+97);
	     		}
	     		cifrando += newOpcion;*/
	     	     
	       	     
}
var  decifrar =function (palabra){
	     opcionDos=prompt("Escribe una palabra");
	     var decifrando= '';
	     for(var i =0;i <opcionDos.length;i++){
	     	var opcionNew=opcionDos[i];
	     	if(opcionNew.match(/[a-z]/i)){
	     		var descoCodigoAscci=opcionUno.charCodeAt(i);
	     		if((descoCodigoAscci >=65 )&& (descoCodigoAscci <= 90 )){
	     			opcionNew=String.fromCharCode(((descoCodigoAscci - 65 +33)%26)+65);
	     		}else if ((descoCodigoAscci>= 97)&&(descoCodigoAscci<=122)){
	     			opcionDos=String.fromCharCode(((descoCodigoAscci - 97 +33)%26)+97);
	     		}
	     		decifrado += opcionNew;
}

principal();