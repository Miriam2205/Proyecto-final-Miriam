//En este JS vamos a trabajar la página de carrito, dónde veremos los productos que han sido seleccionados y la suma total de pedido

//el código solo se ejecuta cuando todo el DOM esté cargado
window.addEventListener('DOMContentLoaded', function () {
  //busca los productos en container
  const contenedor = document.getElementById("container");
  //obtiene el carrito guardado en localStorage
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  //si el carrito está vacio muestra un mensaje que diga: Tu carrito está vacío
  if (carrito.length === 0) {
    contenedor.innerHTML = "<p>Tu carrito está vacío.</p>";
    return;
  }

  //Código: para mostrar cada producto en la página
  //Declaramos que por defecto el precio es 0.
  let sumaTotal = 0;
  //Recorre en el carrito todos los productos y crea un div con las características de los productos(imagen, titulo, etc)
  //Hacemos el innerHTML para imprimir las caracteristicas que se van a mostrar en pantalla del producto, con ${}.
  carrito.forEach((producto, index) => {
    const div = document.createElement("div");
    div.className = "producto";
    div.id = `producto${producto.id}`;
    div.innerHTML = `
      <div id="container" class="container">
        <div class="container__imagen">
            <img class="carrito__imagen" src="${producto.imagenProducto}" alt="${producto.titulo}">
        </div>
        <div class="container__descripcion">
          <span class="material-symbols-outlined delete-icon" data-id="${producto.id}"> delete </span>
            <h3 class="carrito__titulo">${producto.titulo}</h3>        
            <p class="carrito__descripcion">${producto.descripcion} </p>
            <p><strong>Cantidad:</strong> ${producto.cantidad}</p>
            <p class="carrito__precio"><strong>Precio:</strong>${producto.precio}</p>
        </div>
      </div>

    `;
    //Suma el precio total multiplicado por la cantidad de cada producto
    if (producto.precio != null) {
      sumaTotal += (parseFloat(producto.precio) * producto.cantidad);
    }
    contenedor.appendChild(div);
  });




  //En esta parte hacemos que funcione el icono de la papelera para eliminar productos de la página carrito
  //Seleccionamos todos los elementos que tienen la clase delete-icon y recorre un forEach, que guarda en un EventListener al recibir que ha sido clickado. 
  document.querySelectorAll(".delete-icon").forEach(icon => {
    icon.addEventListener("click", (e) => {
      //Cuando se hace click, se toma el id del producto(data-id).
      const id = parseInt(e.target.dataset.id);
      //Se usa splice para eliminar el producto de la lista
      carrito.splice(id, 1);
      //Se guarda las actualizaciones en el carrito,  si hemos eliminado productos en el localStorage. Busca la clase .producto y lo elimina del DOM
      localStorage.setItem("carrito", JSON.stringify(carrito));
      const productoDiv = e.target.closest(".producto");
      productoDiv.remove();

      let nuevoTotal = 0;
      carrito.forEach(p => {
        nuevoTotal += p.precio * p.cantidad;
      });
      document.getElementById("total").textContent = nuevoTotal;
      //Recorre todos los iconos con la clase delete-icon y actualiza el id y precio total 
      document.querySelectorAll(".delete-icon").forEach((icon, newIndex) => {
        icon.setAttribute("data-id", newIndex);
      });
    });
  });
});