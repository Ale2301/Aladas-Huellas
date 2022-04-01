
function escribir(elemento,texto,delay) {
	temporal = document.getElementById(elemento).innerHTML;
	temporal = temporal.concat(texto.charAt(0));
	document.getElementById(elemento).innerHTML = temporal;
	if (texto.length > 1) {
		texto = texto.substr(1);
		setTimeout(escribir,delay,elemento,texto,delay);
	}
    else{
        repetirFuncion()
    }
}
function repetirFuncion(){
    if (repetir == 0){
        escribir("autoTextDos","Por esa razón entendemos que debemos tratar con el mismos respeto a nuestros más fieles compañeros...",40)
        repetir ++;
    }
}
let temporal = 0;
let repetir = 0;
escribir("autoText","112 años de trayectoria en el rubro avalan nuestras prestación, siempre con calidad y distinción de forma personalizada.",40)
