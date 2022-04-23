console.log("si puedes leer esto alejo no hizo su trabajo :/")
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
function colorAzar(){
    if (checkColor == "blanco"){
        checkColor = "negro"
        return ("negro")
    }
    else{
        checkColor = "blanco"
        return ("blanco")
    }
}
function cambiarColores(colorcito){
    let color = document.getElementById("autoTextTres")
    color.classList.add(colorcito);
    setTimeout(() => {
        color.classList.remove(colorcito)
        let colores = colorAzar()
        cambiarColores(colores)
    }, 500);
}
let checkColor = 0;
function repetirFuncion(){
    if (repetir == 0){
        escribir("autoTextTres","Aladas huellas siempre acompaña.",40)
        repetir ++;
        checkColor = "blanco";
        cambiarColores("blanco")
    }
}
let temporal = 0;
let repetir = 0;
escribir("autoText","112 años de trayectoria en el rubro avalan nuestra prestación,siempre con calidad y distinción, acompañando y entendiendo que debemos tratar con el mismo respeto a nuestros mas fieles compañeros, nuestras queridas mascotas.",40);