//Selecciona todos los elementos del html que tienen la clase .acordeon__item.
const lista_items = document.querySelectorAll(".acordeon__item");
//Recorre cada elemento con el forEach
lista_items.forEach(item => {
    // en todos lo item, agrega eventListener y escuha cuando hace click
    item.addEventListener("click", () => {
        //Cuando se hace click en un item, elimina la clase open para que se cierren los que esten abiertos
       lista_items.forEach(item => item.classList.remove("open"));
       //Agrega la clase open al elemento clicado
       item.classList.add("open");
    });
    
});
