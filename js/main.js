(function(){
"use strict";


var regalo = document.getElementById('regalo');

document.addEventListener('DOMContentLoaded', function(){

if(document.querySelector('#mapa') ) {
  // el código del mapa aqui
  var map = L.map('mapa').setView([19.419973, -99.151611], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([19.419973, -99.151611]).addTo(map)
    .bindPopup('Te estamos esperando!')
    .openPopup();
}






//datos usuario
var nombre = document.getElementById('nombre');
var apellido  = document.getElementById('apellido');
var email = document.getElementById('email');

//campos pase
var pase_dia = document.getElementById('pase_dia');
var pase_dosdias = document.getElementById('pase_dosdias');
var pase_completo = document.getElementById('pase_completo');

//botones y div

var calcular = document.getElementById('calcular');
var errorDiv = document.getElementById('error');
var botonRegistro = document.getElementById('btnRegistro');
var lista_productos = document.getElementById('lista-productos');
var suma = document.getElementById('suma-total');

calcular.addEventListener('click', calcularMontos);
pase_dia.addEventListener('blur', mostrarDias);
pase_dosdias.addEventListener('blur', mostrarDias);
pase_completo.addEventListener('blur', mostrarDias);

nombre.addEventListener('blur', validarCampos);
apellido.addEventListener('blur', validarCampos);
email.addEventListener('blur', validarCampos);
email.addEventListener('blur', validarEmail);




function validarEmail(){
	if (this.value.indexOf("@") > -1) {
		errorDiv.style.display = 'none';
		this.style.border = ' 1px solid #cccccc';
	}else{
errorDiv.style.display ='block';
		errorDiv.innerHTML = "ingresa un correo valido";
		this.style.border = '1px solid red';
		errorDiv.style.border = '1px solid red';
	}
}

	
function validarCampos(){
	if(this.value == ''){
		errorDiv.style.display ='block';
		errorDiv.innerHTML = "este campo es obligatorio";
		this.style.border = '1px solid red';
		errorDiv.style.border = '1px solid red';
	}else{
		errorDiv.style.display = 'none';
		this.style.border = ' 1px solid #cccccc';
	}
}


var cantEtiquetas = document.getElementById('etiquetas');
var cantCamisas = document.getElementById('camisa_evento');


function calcularMontos(event){
	event.preventDefault();
	if(regalo.value==''){
alert("debes elegir un regalo");
regalo.focus();
	}
	else{
		var boletosDia=parseInt(pase_dia.value,10) || 0,
		 	boletos2Dias=parseInt(pase_dosdias.value,10) || 0,
		 	boletosCompleto=parseInt(pase_completo.value,10) || 0,
		 	cantEtiquetas=parseInt(etiquetas.value,10) || 0,
		 	cantCamisas=parseInt(camisa_evento.value,10) || 0;


	var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletosCompleto *50)+ ((cantCamisas * 10) * .93) + (cantEtiquetas * 2); 
	console.log(totalPagar);	

	var listadoProductos = [];

if(boletosDia >=1) listadoProductos.push(boletosDia + " Pase por un dia");
if(boletos2Dias >=1)	listadoProductos.push(boletos2Dias + " Pase por dos dias");
if(boletosCompleto >=1)	listadoProductos.push(boletosCompleto + " Pase completo");
if(cantEtiquetas >=1)	listadoProductos.push(cantEtiquetas + " Etiquetas");
if(cantCamisas >=1)	listadoProductos.push(cantCamisas + " camisas del evento");
console.log(listadoProductos);

lista_productos.style.display ="block";
lista_productos.innerHTML = '';


for (var i = 0; i < listadoProductos.length; i++) {
	
	lista_productos.innerHTML += listadoProductos[i] + '<br/>';
}

suma.innerHTML = "$ " + totalPagar.toFixed(2);




		/*console.log(pase_dia.value);
		console.log(pase_dosdias.value);
		console.log(pase_completo.value);*/
	
	}	

}



function mostrarDias(){
	var boletosDia=parseInt(pase_dia.value,10) || 0,
		 	boletos2Dias=parseInt(pase_dosdias.value,10) || 0,
		 	boletosCompleto=parseInt(pase_completo.value,10) || 0;

	var diasElegidos = [];

	if(boletosDia > 0) diasElegidos.push('viernes');
	if(boletos2Dias > 0) diasElegidos.push('viernes','sabado');
	if(boletosCompleto > 0) diasElegidos.push('viernes','sabado','domingo');

	for (var i = 0; i < diasElegidos.length; i++) {
		document.getElementById(diasElegidos[i]).style.display = "block";
	}
}



}); //dom content loaded


})();




$(function(){


//lettering
$('.nombre-sitio').lettering();



//$('div.ocultar').hide();
//programa de conferencias
$('.programa-evento .info-curso:first').show();
$('.menu-programa a:first').addClass('activo');

$('.menu-programa a').on('click',function(){
	$('.menu-programa a').removeClass('activo');
	$(this).addClass('activo');

	$('.ocultar').hide();

	var enlace = $(this).attr('href');
	$(enlace).fadeIn(1000);

	return false;

});




//animaciones para los dias
$('.resumen-evento li:nth-child(1) p').animateNumber({number:6}, 20200);
$('.resumen-evento li:nth-child(2) p').animateNumber({number:15}, 20200);
$('.resumen-evento li:nth-child(3) p').animateNumber({number:3}, 20200);
$('.resumen-evento li:nth-child(4) p').animateNumber({number:9}, 20200);


//animaciones para la cuenta regresiva

$('.cuenta-regresiva').countdown('2021/12/10 09:00', function(event){
$('#dias').html(event.strftime('%D'));
$('#horas').html(event.strftime('%H'));
$('#minutos').html(event.strftime('%M'));
$('#segundos').html(event.strftime('%S'));
});


//animacion para las letras


});