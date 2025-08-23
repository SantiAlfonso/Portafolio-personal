let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){

    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible=true;
    }

}

function seleccionar(){
    //oculto el menu una vez que selecciono una opción
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

//Función que aplica las animaciones a las skills

function efectoSkills(){
    var skills = document.getElementById("skills");
    var distacia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distacia_skills>=300){
        let skills = document.getElementsByClassName("progreso")
        skills[0].classList.add("javascript")
        skills[1].classList.add("cplusplus")
        skills[2].classList.add("php")
        skills[3].classList.add("SQL")
        skills[4].classList.add("kotlin")
        skills[5].classList.add("htmlycss")
        skills[6].classList.add("R")
        skills[7].classList.add("python")
        skills[8].classList.add("comunicacion_verbal")
        skills[9].classList.add("comunicacion_escrita")
        skills[10].classList.add("trabajo_equipo")
        skills[11].classList.add("creatividad")
        skills[12].classList.add("dedicacion")
        
    }
}
//Se tiene que detectarl el scroll down para aplicar la animación
window.onscroll = function(){
    efectoSkills();
}