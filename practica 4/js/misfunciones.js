
$(document).ready(function(){
	var a=0;
	$("#imgSasha").animate({width:'30%' });

	$("#btn-1").click(function(event){
		 
		//alert("hola");
		//$("#imgSasha").hide();
		 if (a==0) {
			 //$("#imgSasha").hide();
			 //$("#imgSasha").fadeOut(200);
			 //$("#imgSasha").slideUp(200);
			 //$("#imgSasha").height(200);
			 $("#imgSasha").animate({width:'50%' }); 
		 	a=1;
		 } else if (a==1) {
			 //$("#imgSasha").show();
			 //$("#imgSasha").fadeIn(300);
			 //$("#imgSasha").slideDown(300);
			  $("#imgSasha").animate({width:'30%' });
	 	    a=0;
		 }
		 
	});
});
