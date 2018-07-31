
$(document).ready(function(){
	/*$("#img").click(function(event){
		$("#img").attr("src","imagen/uno.jpg");
		var ancho = $("#img").width();
		var alto = $("#img").height();
		$("#resultado").html("El ancho es: "+ancho+" y el alto es: " +alto);
	});*/
	var arreglo = new Array ("imagen/dos.jpg","imagen/tres.jpg","imagen/cuatro.jpg","imagen/cinco.jpg");
	var i = 0;
		$("#img").click(function(event){
			
		
		if(i==arreglo.length-1) {
			i=0;
		}else {
			
			$("#img").attr("src",arreglo[i]);
			i++;
		}
			});
			$("#btn").click(function(event){
				$("#img").attr("src",arreglo[arreglo.length-1]);			
			});
			$("#pr").click(function(event){
				$("#img").attr("src",arreglo[0]);			
			});
		});
