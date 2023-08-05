var fechaInicio = new Date('2016-07-23').getTime();
var fechaFin    = new Date('2016-08-01').getTime();

var diff = (fechaFin - fechaInicio)/(1000*60*60*24);

console.log(diff);