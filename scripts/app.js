; (function ($) {
	var app = $.sammy(function () {
		this.get('/', function () {
			$('#content').load('home.html');
		});
		this.get('#/contactenos', function () {
			$('#content').load('contactenos.html');
		});
		this.get('#/platos', function () {
			$('#content').load('platos.html');
		});
		this.get('#/calidad', function () {
			$('#content').load('calidad.html');
		});
		this.get('#/atencion', function () {
			$('#content').load('atencion.html');
		});
	});

	$(function () {
		app.run();
	});
	
})(jQuery);

