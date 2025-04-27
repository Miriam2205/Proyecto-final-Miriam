//En este JS trabajaremos la parte de la página de producto individual.

//Seleccionamos el producto seleccionado  que el usuario ha eligido desde alguna página de productos. 
const producto = JSON.parse(localStorage.getItem('productoSeleccionado'));
console.log(producto);

//Selecciona el id de informacion del DOM en la que se muestra la información importante del producto
const detalleDiv = document.getElementById('informacion');

//Si hay un producto crea un div con las característcas del ptroducto, botones de + y - para sumar o restar productos y un boton para añadir producto
if (producto && detalleDiv) {
  const productoHTML = document.createElement("div");
  productoHTML.classList.add("producto");
  productoHTML.innerHTML = `
    <img src="${producto.imagenProducto}" class="producto_img">
    <div class="producto__compra">
        <h2 class="producto__titulo">${producto.titulo}</h2>
        <p class="producto__parrafo">${producto.descripcion}</p>
        <p class="producto__cantidad"></p>
        
      <div class="producto__cantidad>
        <button class="producto__compra--resta">-</button>
        <input type="number" class="inputNumber" id="inputNumber" value="0">
        <button class="producto__compra--suma">+</button>
      </div>
        <p class="precio__producto">${producto.precio} €</p>
        <button class="producto__compra--carrito" id="producto_compra_carrito">
            Añadir carrito
        </button>
    </div>
  `;
  detalleDiv.appendChild(productoHTML);

  //declaramos las variables  para que funcione los botones de suma y restar
  let cantidad = 0;

  const suma = productoHTML.querySelector(".producto__compra--suma");
  const resta = productoHTML.querySelector(".producto__compra--resta");
  const inputNumber = productoHTML.querySelector("#inputNumber");
  const btnCarrito = productoHTML.querySelector(".producto__compra--carrito");

  suma.addEventListener("click", sumar);
  resta.addEventListener("click", restar);
  btnCarrito.addEventListener("click", carrito);

  function sumar() {
    cantidad++;
    inputNumber.value = cantidad;
  }

  function restar() {
    if (cantidad > 0) {
      cantidad--;
      inputNumber.value = cantidad;
    }
  }

  //Funcion para que al hacer click en el boton de añadir carrito, se guarde los datos del producto seleccionado
  function carrito() {
    const titulo = document.querySelector('.producto__titulo').innerText;
    const descripcion = document.querySelector('.producto__parrafo').innerText;
    const cantidad = parseInt(document.querySelector('#inputNumber').value);
    const precioTexto = document.querySelector('.precio__producto').innerText;
    const imagen = document.querySelector('.producto_img').getAttribute('src');
    const precio = parseFloat(precioTexto.replace(',', '.'));

    const producto = { titulo, descripcion, cantidad, precioTexto, imagen, precio };

    //si el carrito está vacio devuelve la lista vacía
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    window.location.href = "carrito.html";
  }
}