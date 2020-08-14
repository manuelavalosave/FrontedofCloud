$("#ocultar").click(function () {
	// $( ".file-manager-content-details" ).toggle();
	$(".file-manager-content-details").toggle("slow", function () {
		$('.file-manager-content-files').width('100%'); // add 240 to the wi
	});
});
var cn = 0;
$("#listado").click(function () {
	if (cn == 0) {
		$('.file-wrapper').css('display', 'block');
		console.log("Ejecutando");
		cn = 1;
	} else {
		$('.file-wrapper').css('display', 'grid');
		console.log("Restablecio");
		cn = 0;
	}
});
$('#input-file-now').file_upload();