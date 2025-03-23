let articulos = []; // Inicializa la lista de artículos
let articulosDisponibles = []; // Lista de artículos disponibles
let indiceSugerenciaSeleccionada = -1; // Inicializa el índice de sugerencia seleccionada

// Cargar datos desde lista.json
fetch('lista.json')
  .then(response => response.json())
  .then(data => {
    articulosDisponibles = data; // Asigna los datos a la variable articulosDisponibles
  })
  .catch(error => console.error('Error al cargar los datos:', error));

function Ordenarname() {
  articulos.sort((a, b) => {
    if (a.name < b.name) return -1; // a va antes que b
    if (a.name > b.name) return 1;  // a va después que b
    return 0; // son iguales
  });
  actualizarLista(); // Actualizar la lista después de ordenar
}

function Ordenarprice() {
  articulos.sort((a, b) => a.price - b.price);
  actualizarLista(); // Actualizar la lista después de ordenar
}

function actualizarLista() {
  const listaCompra = document.getElementById("listacompra");
  listaCompra.innerHTML = ""; // Limpiar la lista
  articulos.forEach((articulo) => mostrarArticulos(articulo)); // Mostrar todos los artículos
}

function mostrarArticulos(articulo) {
  const listaCompra = document.getElementById("listacompra");
  const tarjeta = document.createElement("div");
  tarjeta.className = "card mb-2";
  tarjeta.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${articulo.name}</h5>
            <p class="card-text">Precio Unitario: $${articulo.price}</p>
            <p class="card-text">Cantidad: ${articulo.cantidad}</p>
            <p class="card-text">Total: $${articulo.price * articulo.cantidad}</p>
            <button class="btn btn-danger" onclick="borrarArticulo('${articulo.id}')">Borrar</button>
        </div>
    `;
  listaCompra.appendChild(tarjeta);
}

function borrarArticulo(id) {
  const idString = String(id);
  const index = articulos.findIndex(articulo => String(articulo.id) === idString);
  if (index !== -1) {
    articulos.splice(index, 1); // Eliminar el artículo encontrado
    actualizarLista(); // Actualizar la lista después de borrar
    actualizarResumen();
  }
}

function Agregar() {
  const nombreArticulo = document.getElementById("inputTextoNombreArticulo").value;
  const cantidadArticulo = parseInt(document.getElementById("inputNumeroCantidadArticulo").value);

  if (!nombreArticulo || !cantidadArticulo || isNaN(cantidadArticulo) || cantidadArticulo <= 0) {
    alert("Por favor, ingrese un nombre de artículo válido y una cantidad mayor a cero.");
    return;
  }

  const articuloEncontrado = articulosDisponibles.find(articulo => articulo.name === nombreArticulo);

  if (articuloEncontrado && cantidadArticulo > 0) {
    const nuevoArticulo = {
      id: articuloEncontrado.id,
      name: articuloEncontrado.name,
      price: articuloEncontrado.price,
      cantidad: cantidadArticulo,
    };
    articulos.push(nuevoArticulo);
    actualizarLista(); // Mostrar el nuevo artículo
    actualizarResumen();
    limpiarform();
  } else {
    alert("Artículo no encontrado o cantidad inválida.");
  }
}

function actualizarResumen() {
  const totalArticulos = articulos.reduce((index, articulo) => index + articulo.cantidad, 0);
  const precioTotal = articulos.reduce((index, articulo) => index + articulo.price * articulo.cantidad, 0);

  const numeroDeArticulos = document.getElementById("numeroDeArticulos");
  const precioTotalTodos = document.getElementById("precioTotalTodos");

  numeroDeArticulos.textContent = totalArticulos;
  precioTotalTodos.textContent = precioTotal;
}

function limpiarform() {
  document.getElementById("inputTextoNombreArticulo").value = "";
  document.getElementById("inputNumeroCantidadArticulo").value = "";
}

function filtrarArticulos() {
  const textoFiltro = document.getElementById("inputTextoNombreArticulo").value.toLowerCase();
  const articulosFiltrados = articulosDisponibles.filter(articulo => articulo.name.toLowerCase().startsWith(textoFiltro));

  const listaArticulos = document.getElementById("listaArticulos");
  listaArticulos.innerHTML = ""; // Limpiar la lista
  indiceSugerenciaSeleccionada = -1; // Reiniciar el índice de sugerencia seleccionada

  if (articulosFiltrados.length > 0) {
    listaArticulos.style.display = "block"; // Mostrar el menú desplegable
    articulosFiltrados.forEach((articulo, index) => {
      const item = document.createElement("div");
      item.className = "dropdown-item";
      item.textContent = articulo.name;
      item.onclick = () => seleccionarArticulo(articulo.name);
      item.dataset.index = index;
      listaArticulos.appendChild(item);
    });
  } else {
    listaArticulos.style.display = "none"; // Ocultar el menú desplegable si no hay coincidencias
  }
}

function seleccionarArticulo(nombre) {
  document.getElementById("inputTextoNombreArticulo").value = nombre;
  document.getElementById("listaArticulos").style.display = "none"; // Ocultar el menú desplegable
}

// Escuchar eventos de clic en el documento
document.addEventListener('click', function(event) {
  const listaArticulos = document.getElementById("listaArticulos");
  const inputTextoNombreArticulo = document.getElementById("inputTextoNombreArticulo");
  
  if (!inputTextoNombreArticulo.contains(event.target) && !listaArticulos.contains(event.target)) {
    listaArticulos.style.display = "none"; // Ocultar el menú desplegable si se hace clic fuera
  }
});

function actualizarSugerenciaSeleccionada(items) {
  for (let i = 0; i < items.length; i++) {
    if (i === indiceSugerenciaSeleccionada) {
      items[i].classList.add("active");
    } else {
      items[i].classList.remove("active");
    }
  }
}
