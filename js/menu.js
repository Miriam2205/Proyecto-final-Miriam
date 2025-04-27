//selecciona el id del icono de la hamburguesa de nav
//selecciona el menu horizontal que el es que se va a mostrar y ocultar
const hamburguesa = document.querySelector("#nav__hamburguesa");
const menuhorizontal = document.querySelector("#nav__horizontal");


//detecta el click al hacerselo a la hamburguesa y le dice si el el menu tiene la clase activo oculta el menu, si no la tiene se la agrega
hamburguesa.addEventListener("click", ()=>{
    if(menuhorizontal.classList.contains("activo")) {
        menuhorizontal.classList.remove("activo");
    } else {
        menuhorizontal.classList.add("activo");
    }
});