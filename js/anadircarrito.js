//En este JS vamos a crear el array con todos nuestros productos.Además creamos una función para ver los productos, otra funcion para agregar al carrito y funciones de operación para que funcione el input.

//Creamos una lista de productos, cada producto contiene un id, título, descripción, categoría, precio y imagen de producto
const divproducto = document.getElementById('producto');
const listaProductos = [
  { id: 1, titulo: "Donut de Lotus", descripcion: "Donut con crema por encima de Lotus con nata y galleta por encima", categoria: "donuts", precio: "3,50", imagenProducto: "../img/donuts/donuts__lotus.png" },
  { id: 2, titulo: "Donut de Pistacho", descripcion: "Donut de pistacho con trozitos crujientes de pistacho", categoria: "donuts", precio: "3,50", imagenProducto: "../img/donuts/donuts__pistacho.png", },
  { id: 3, titulo: "Donut", descripcion: "Donut clásico recubierto de una capa fina y cruijiente de glaseado", categoria: "donuts", precio: "2,00", imagenProducto: "../img/donuts/donuts__glaseado.png", },
  { id: 4, titulo: "Berlina rellena de mermelada de fresa", descripcion: "Berlina rellena de mermelada de frutos rojos", categoria: "donuts", precio: "3,40", imagenProducto: "../img/donuts/berlina__glaseada.png", },
  { id: 5, titulo: "Donuts de chocolate con birutas de pistacho", descripcion: "Donut cubierto por encima de chocolate con birutas de pistacho", categoria: "donuts", precio: "2,50", imagenProducto: "../img/donuts/donuts.png", },
  { id: 6, titulo: "Donut de kinder", descripcion: "Donut con gran sabor de avellana con una chocolatina por encima", categoria: "donuts", precio: "3,20", imagenProducto: "../img/donuts/donut__kinder.png", },
  { id: 7, titulo: "Donut Oreo", descripcion: "Donut con crema blanca de oreo con galleta por encima", precio: "3,20", categoria: "donuts", imagenProducto: "../img/donuts/donut__oreo.png", },
  { id: 8, titulo: "Croissants clásico", descripcion: "Croissant de mantequilla básico con hojaldre crujiente", categoria: "croissants", precio: "2,00", imagenProducto: "../img/croissants/croissants_clasico.png" },
  { id: 9, titulo: "Croissants chocolate", descripcion: "Croissant de cacao con un relleno de chocolate", categoria: "croissants", precio: "2,50", imagenProducto: "../img/croissants/croissant__chocolate.png" },
  { id: 10, titulo: "Croissants Oreo", descripcion: "Croissant con un sabor intenso a la galleta Oreo, en su interior hay un relleno de crema blanca y galleta", categoria: "croissants", precio: "3,40", imagenProducto: "../img/croissants/croissant__oreo.png" },
  { id: 11, titulo: "Croissant Cheesecake", descripcion: "Croissant con un sabor a cheesecake gracias a su relleno de crema de queso y mermelada de fresa", categoria: "croissants", precio: "3,60", imagenProducto: "../img/croissants/croissants__cheesecake.png" },
  { id: 12, titulo: "Croissants Pistacho", descripcion: "Croissants con relleno de crema de pistacho y trozos de pistaho crujiente", categoria: "croissants", precio: "3,80", imagenProducto: "../img/croissants/croissants__pistacho.png", },
  { id: 13, titulo: "Cinamon Roll Clásico", descripcion: "Cinamon Roll clásico con glaseado y canela", precio: "3,80", categoria: "cinamon roll", imagenProducto: "../img/cinamonroll/cinamonroll__clasico.png", },
  { id: 14, titulo: "Cinamon Roll Oreo", descripcion: "Cinamon Roll con crema blanca de oreo y galleta trozeada por encima", categoria: "cinamon roll", precio: "3,90", imagenProducto: "../img/cinamonroll/cinamonroll__oreo.png", },
  { id: 15, titulo: "Cinamon Roll Pistacho", descripcion: "Cinamon Roll con crema de pistacho y trozos de pistacho", categoria: "cinamon roll", precio: "4,40", imagenProducto: "../img/cinamonroll/cinamonroll__pistacho.png", },
  { id: 16, titulo: "Cinamon Roll Lotus", descripcion: "Cinamon Roll de galleta lotus con crema de lotus por encima", categoria: "cinamon roll", precio: "4,20", imagenProducto: "../img/cinamonroll/cinamonroll__lotus.png", },
  { id: 17, titulo: "Cookie tradicional con pepitas de chocolate", descripcion: "Cookie tradicional con pepitas de chocolate", categoria: "cookie", precio: "3,00", imagenProducto: "../img/cookies/cookie__normal.png", },
  { id: 18, titulo: "Cookie Chocolate", descripcion: "Cookie de chocolate con pepitas de chocolate blanco", categoria: "cookie", precio: "3,30", imagenProducto: "../img/cookies/coockie__choco.png", },
  { id: 19, titulo: "Cookie caramelo y chocolate", descripcion: "Cookie de caramelo, chocolate y trozitos de cacahuete", categoria: "cookie", precio: "3,30", imagenProducto: "../img/cookies/cookie__caramelo.png", },
  { id: 20, titulo: "Cookie Lotus", descripcion: "Cookie de Lotus con crema de la galleta por dentro", categoria: "cookie", precio: "3,50", imagenProducto: "../img/cookies/cookie__lotus.png", },
  { id: 21, titulo: "Cookie Kinder", descripcion: "Cookie de chocolatina kinder", categoria: "cookie", precio: "3,30", imagenProducto: "../img/cookies/cookie__kinder.png", },
  { id: 22, titulo: "Cookie Pistacho", descripcion: "Cookie con un sabor intenso a pistacho con un toque de dulce a chocolate blanco", categoria: "cookie", precio: "3,80", imagenProducto: "../img/cookies/cookie__pistacho.png", },
]

//Funcion para que al hacer click en un producto, se vea el producto con sus características.
//Creamos una función (verProducto) y toma un id que representa el producto

//Obtener el id del producto a través de la url
const urlParams = new URLSearchParams(window.location.search);
const idProducto = urlParams.get('id');

function verProducto(id) {
  //Se encuentra el producto deseado
  const producto = listaProductos.find(p => p.id == id);
  const productoHTML = `
  <div class="producto">
  <img src="${producto.imagenProducto}" class="producto_img">
    <div class="producto__compra">
        <h2 class="producto__titulo">${producto.titulo}</h2>
        <p class="producto__parrafo">${producto.descripcion}</p>
        <p class="producto__cantidad"></p>
        
      <div class="producto__cantidad">
        <button class="producto__compra--resta">-</button>
        <input type="number" class="inputNumber" id="inputNumber" value="0">
        <button class="producto__compra--suma">+</button>
      </div>
        <p class="precio__producto">${producto.precio} €</p>
        <button class="producto__compra--carrito" id="producto_compra_carrito">
            Añadir carrito
        </button>
    </div>
  </div>`;

  divproducto.innerHTML = productoHTML;
console.log(producto);

  // Ahora declaramos las variables  para que funcione los botones de sumar, restar y agregar carrito
  let cantidad = 0;
  const suma = divproducto.querySelector(".producto__compra--suma");
  const resta = divproducto.querySelector(".producto__compra--resta");
  const inputNumber = divproducto.querySelector("#inputNumber");
  const btnCarrito = divproducto.querySelector(".producto__compra--carrito");
  //Detecta que al hacer click en sumar/restar va añadiendo cantidad 
  suma.addEventListener("click", () => {
    cantidad++;
    inputNumber.value = cantidad; 
  });
  resta.addEventListener("click", () => {
    if (cantidad > 0) {
      cantidad--;
      inputNumber.value = cantidad;
    }
  });
 //Detecta que al clickar al boton de agregar carrito redirige al usuario a la página de carrito y guarada el producto y la cantidad seleccionada
  btnCarrito.addEventListener("click", () =>{
    añadirCarrito(producto, cantidad);
    window.location.href = 'carrito.html';
  });
}

verProducto(idProducto);

//Funcion de añadir carrito
function añadirCarrito(producto, cantidad) {
  //Obtener el carrito desde el localStorage
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  //Verificar si el producto estén en el carrito
  const productoCarrito = carrito.find(item => item.id === producto.id);
  //Aumentar la cantidad si está seleccionado para el carrito
  if(productoCarrito){
    productoCarrito.cantidad += cantidad;
  } else {
    carrito.push({...producto, cantidad})
  }
  //Guardar el carrito actualizado en localStorage
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

