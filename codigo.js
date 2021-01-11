var x = 1;
var hola = "hola";
document.getElementById("btnCalcular").addEventListener('click', function(){
    var xxxx = document.getElementById("txtNombre");
    if(xxxx.value == ""){
        xxxx.style.backgroundColor="red";
        xxxx.style.color="white";
    }else{
        xxxx.style.backgroundColor="green";
        xxxx.style.color="black";
        document.getElementById("miText").innerHTML = "Bienvenido " + xxxx.value;
        xxxx.value = "";
    }
}); 
document.getElementById("txtNombre").addEventListener('keyup', function(){
    var xxxx = document.getElementById("txtNombre");
    document.getElementById("miText").innerHTML = "Bienvenido " + xxxx.value;
    });
function miFuncion(){
    var todo = "";
    for(var y = 0; y<x; y++){
        todo = todo + "<button>Hola soy el boton " + x + "<button>";
    }
    document.getElementById("miText").innerHTML = todo;
    x++;
}