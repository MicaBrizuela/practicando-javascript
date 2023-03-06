console.log("hello")
//son las notas de la clase para ver el comportamiento de las variables de js y lo importante que es saber como asignarlas.

var myGlobal = 10; //se ve en todo el codigo

function fun1() {
	oopsGlobal = 5; //es global
	var NotGlobal = 8; // no es global
  console.log("NotGlobal_1: " + NotGlobal)
} 

function fun2() {
	var output = "";
	if (typeof myGlobal != "undefined") {
	output += "myGlobal: " + myGlobal + "\n";
	}
	if (typeof oopsGlobal != "undefined") {
	output += "oopsGlobal: " + oopsGlobal;
	}
  if (typeof NotGlobal != "undefined") { //no se ve porque no esta definida en esta funcion
	output += "NotGlobal_2: " + NotGlobal;
	}
	console.log(output);
}
fun1();
fun2();