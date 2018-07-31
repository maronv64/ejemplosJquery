function CargarPeliculas(){
$.ajax({
url:'',
type:'GET',
dataType:'json',
})
.done(function(data,textStatus,jqXHR){
debugger
console.log(data);
})
.fail(function(data,textStatus,jqXHR){
debugger
console.log("error");
});
}
/*
$.ajax({
	type: 'GET',
	url: 'https://www.themoviedb.org/movie',
	dataType: "JSON", // data type expected from server
	success: function (data) {
		console.log(data);
	},
	error: function() {
	    console.log('Error: ' + data);
	}
});

*/
