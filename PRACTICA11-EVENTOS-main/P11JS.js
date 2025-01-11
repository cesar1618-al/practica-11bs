function accion (elEvento){
    var evento= elEvento;
    switch(evento.type){
        case 'mousemove':
            document.getElementById('raton').style.color = 'floralwhite';
            var coordenadaX, coordenadaY;
            coordenadaX = evento.clientX;
            coordenadaY = evento.clientY;
            document.getElementById('CoordX').value = coordenadaX;
            document.getElementById('CoordY').value = coordenadaY;
            break;
        case 'keypress':
            document.getElementById('teclado').style.color = 'dodgerblue';
            var Caracter = evento.keyCode
            var letra = String.fromCharCode(Caracter);
            document.getElementById('Caracter').value = letra;
            document.getElementById('Codigo').value = Caracter;
            break;
        case 'click':
            document.getElementById('raton').style.color = 'dodgerblue';
            break;
        case 'keyup':
            document.getElementById('teclado').style.color = 'floralwhite';
            break;
    }

}
document.onkeypress = accion;
document.onmousemove = accion;
document.onkeyup = accion;
document.onclick = accion;