var nombre = $('#1').val();
var apellido = $('#2').val();
var correo = $('#3').val();
var cedula = $('#4').val();
var telefono = $('#5').val();
var direccion = $('#6').val(); 
var campo;
var datos;
$('#btn2').click(function(){
	$.get("http://192.168.7.102/services/listpersonas.php", function(data, status){
        //alert("Data: " + data + "\nStatus: " + status);
    	for (var i = 0; i <= data.length-1; i++) {
    		var user = data[i];
    		console.log(user.id);
    		console.log(user.nombres);
    		console.log(user.apellidos);
    		console.log(user.correo);
    		console.log(user.cedula);
    		console.log(user.telefono);
    		console.log(user.direccion);
    	};
    });
});
$('#btn').click(function(){
	for (var i = 1; i <= 6; i++) {
		campo = document.getElementById(i);
		if (campo.value === "") {
			alert('El campo '+campo.name+" esta vacio");
			return;
		};
	};
	datos = {"nombres":nombre,
						"apellidos":apellido,
						"correo":correo,
						"cedula":cedula,
						"tel":telefono,
						"dir":direccion};
	new_user(datos);
});

function new_user(datos){
	// $.delete('http://192.168.7.102/services/regpersonas.php',{id:13},function(data,	 status){
//          console.log("Data: " + data + "\nStatus: " + status)});
	$.post('http://192.168.7.102/services/regpersonas.php',{datos:datos},function(data,	 status){
        console.log("Data: " + data + "\nStatus: " + status);
    });	
};
// function genera_tabla() {
  
//   var body = document.getElementsByTagName("body")[0];
 
  
//   var tabla   = document.createElement("table");
//   var tbhead   = document.createElement("thead");
//   var hilera = document.createElement("tr") ;
//   var celda = document.createElement("th");
//   var textoCelda = document.createTextNode("nombre");
//       celda.appendChild(textoCelda);
//       hilera.appendChild(celda);
//       tbhead.appendChild(hilera);
//        tabla.appendChild(tbhead);
//         var celda = document.createElement("th");
//   var textoCelda = document.createTextNode("apellido");
//       celda.appendChild(textoCelda);
//       hilera.appendChild(celda);
//       tbhead.appendChild(hilera);
//        tabla.appendChild(tbhead);
//         var celda = document.createElement("th");
//   var textoCelda = document.createTextNode("cedula");
//       celda.appendChild(textoCelda);
//       hilera.appendChild(celda);
//       tbhead.appendChild(hilera);
//        tabla.appendChild(tbhead);
//         var celda = document.createElement("th");
//   var textoCelda = document.createTextNode("correo");
//       celda.appendChild(textoCelda);
//       hilera.appendChild(celda);
//       tbhead.appendChild(hilera);
//        tabla.appendChild(tbhead);
//   var tblBody = document.createElement("tbody");
 
  
//   for (var i = 0; i < 2; i++) {
    
//     var hilera = document.createElement("tr") ;
//  		usser = usuario[i]
//     for (var j = 0; j < 4; j++) {
    
//       var celda = document.createElement("td");
//       if (j==0) {
//       var textoCelda = document.createTextNode(usser.nombre);
//       celda.appendChild(textoCelda);
//       hilera.appendChild(celda);
//       };
//       if (j==1) {
//       	var textoCelda = document.createTextNode(usser.apellido);
//       celda.appendChild(textoCelda);
//       hilera.appendChild(celda);
//       };
//       if (j==2) {
//       	var textoCelda = document.createTextNode(usser.cedula);
//       celda.appendChild(textoCelda);
//       hilera.appendChild(celda);
//       };
//       if (j==3) {
//       	var textoCelda = document.createTextNode(usser.correo);
//       celda.appendChild(textoCelda);
//       hilera.appendChild(celda);
//       };
//     }
 
    
//     tblBody.appendChild(hilera);
//   }
 
  
//   tabla.appendChild(tblBody);
  
//   body.appendChild(tabla);
  
//   tabla.setAttribute("border", "3");
// }
// genera_tabla();
