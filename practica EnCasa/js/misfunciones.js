
$(document).ready(function(){
	var a=0;
	$("#imgSasha").animate({width:'30%' });

	$("#btn-1").click(function(event){
		 
		//alert("hola");
		//$("#imgSasha").hide();
		 if (a==0) {
			 //$("#imgSasha").hide();
			 //$("#imgSasha").fadeOut(200);
			 $("#imgSasha").slideUp(200);
			 //$("#imgSasha").height(200);
			// $("#imgSasha").animate({width:'50%' }); 
		 	a=1;
		 } else if (a==1) {
			 //$("#imgSasha").show();
			 //$("#imgSasha").fadeIn(300);
			 $("#imgSasha").slideDown(300);
			 // $("#imgSasha").animate({width:'30%' });
	 	    a=0;
		 }
		 
	});
	
	/*$("#img").click(function(event){
		$("#img").attr("src","imagen/uno.jpg");
		var ancho = $("#img").width();
		var alto = $("#img").height();
		$("#resultado").html("El ancho es: "+ancho+" y el alto es: " +alto);
	});*/

	//---------------



	//----------------

	// var arreglo = new Array ("imagen/dos.jpg","imagen/tres.jpg","imagen/cuatro.jpg","imagen/cinco.jpg");
	// var i = 0;
	// 	$("#img").click(function(event){
			
			
	// 		if(i==arreglo.length-1) {
	// 			i=0;
	// 		}else {
				
	// 			$("#img").attr("src",arreglo[i]);
	// 			i++;
	// 		}
	// 	});
		
	// 	$("#btn").click(function(event){
	// 				$("#img").attr("src",arreglo[arreglo.length-1]);			
	// 	});
		
	// 	// $("#btn-siguiente").click(function(event){
	// 	// 	$("#img").attr("src",arreglo[i++ % arreglo.length]); //reinicio
	// 	// });

	// 	$("#btn-siguiente").click(function(event){
	// 		$("#img").attr("src",arreglo[++i % arreglo.length]); //reinicio
	// 	});

	// 	$("#pr").click(function(event){
	// 				$("#img").attr("src",arreglo[0]);			
	// 	});
});
