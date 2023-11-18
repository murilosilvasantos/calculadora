function insert(num) {
    let numero = document.getElementById('mostrar').innerHTML;
    document.getElementById('mostrar').innerHTML = numero + num;
}

function calcular() {
    let numero = document.getElementById('mostrar').innerHTML;
    document.getElementById('mostrar').innerHTML = numero - num;
}

function apagar() {
    document.getElementById('mostrar').innerHTML  = " ";
}

function back() {
    var resultado = document.getElementById('mostrar').innerHTML;
    document.getElementById('mostrar').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() {
    var resultado = document.getElementById('mostrar').innerHTML;
    if(resultado)
    {
        document.getElementById('mostrar').innerHTML = eval(resultado);
    } else {
        document.getElementById('mostrar').innerHTML = "Sem número!"
    }
}