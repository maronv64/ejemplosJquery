$(document).ready(function() {
	$('#btnInicio').click(function(event){
		$("#pagresultado").load('inicio.html');
	});

//----------------------------------
$('#btnNosotros').click(function(event) {

	$("#pagresultado").load('nosotros.html');

	$.ajax({
	url: 'https://api.themoviedb.org/3/movie/popular?api_key=91bedc32724f0ee8a9d8c3eac21b02d3',
	type: 'GET',
	dataType: 'json',
	
	})

	.done(function(data,textStatus,jqXHR) {
		debugger
		console.log(data.results);

		$.each(data.results, function(index, val) {
			$('#pagresultado').append(val.original_title) ;
		});
	})
	.fail(function(jqXHR,textStatus) {
		debugger
		console.log("error");
	})
});


//-------------------------------
	
    $('#text').keydown(function(event) {
		$('#text').css({
			background: '#000',
			color: '#fff'
		});
    });
    
    $('#text').keyup(function(event) {
		$('#text').css({
			background: '#fff',
			color: '#000'
		});
    });


 $('#ca1').mouseover(function(event) {
		$('#ca1').css({
			background: 'blue',
			color: '#fff'
		});
    });

 $('#ca1').mouseleave(function(event) {
		$('#ca1').css({
			background: '#000',
			color: '#fff'
		});
    });

$('#ca2').mouseover(function(event) {
		$('#ca2').css({
			background: 'blue',
			color: '#fff'
		});
    });

 $('#ca2').mouseleave(function(event) {
		$('#ca2').css({
			background: '#000',
			color: '#fff'
		});
    });

$('#ca3').mouseover(function(event) {
		$('#ca3').css({
			background: 'blue',
			color: '#fff'
		});
    });

 $('#ca3').mouseleave(function(event) {
		$('#ca3').css({
			background: '#000',
			color: '#fff'
		});
    });

 $('#ca4').mouseover(function(event) {
		$('#ca4').css({
			background: 'blue',
			color: '#fff'
		});
    });

 $('#ca4').mouseleave(function(event) {
		$('#ca4').css({
			background: '#000',
			color: '#fff'
		});
    });


/*$('#nuevo').click(function(event) {
	contador+=1;
		var fila="<tr><td>"+contador+"</td><td>22</td><td>33</td><td>44</td></tr>";
		$('#tabla').append(fila);
    });
*/





var contador=0;
  


});



var contador=0;

function crear() {
	$('#nuevo').click(function(event) {
	contador+=1;
		var fila="<tr id='"+contador+"'><td>"+contador+"</td><td>Cristhian</td><td>Zambrano</td> <td><button type='button' class='btn btn-info' onClick='eliminar("+contador+")'><i class='fa fa-check'>eliminar</i></button></td></tr>";
		$('#tablaDatos').append(fila);
    });

}

function eliminar(id){
  alert(id);
   $('#'+id).hide();
}
