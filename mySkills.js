//Funcion que aplica las animaciones de las MisHabilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_habilidades >= 300){
        let MisHabilidades = document.getElementsByClassName("progreso");
        MisHabilidades[0].classList.add("htmlcss");
        MisHabilidades[1].classList.add("javascript");
        MisHabilidades[2].classList.add("nodejs");
        MisHabilidades[3].classList.add("laravelphp");
        MisHabilidades[4].classList.add("reactjs");
        MisHabilidades[5].classList.add("vue");
        MisHabilidades[6].classList.add("comunicacion");
        MisHabilidades[7].classList.add("trabajo");
        MisHabilidades[8].classList.add("creatividad");
        MisHabilidades[9].classList.add("resolucion");
        MisHabilidades[10].classList.add("aprendizaje");
        MisHabilidades[11].classList.add("orientacion");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de MisHabilidades
window.onscroll = function(){
    efectoHabilidades();
} 