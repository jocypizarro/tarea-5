// TAREA 6 - GESTOR DE INVENTARIO //

const productos = [
  { nombre: "Laptop", precio: 900000, stock: 5 },
  { nombre: "Mouse", precio: 30000, stock: 0 },
  { nombre: "Monitor", precio: 300000, stock: 3 },
  { nombre: "Teclado", precio: 90000, stock: 8 }
];

console.log(productos);

console.log("Productos con stock disponible:");

const disponibles = productos.filter(producto => producto.stock > 0);

console.log(disponibles);

console.log("Productos con 15% de descuento:");

const productosConDescuento = productos.map(producto => ({
  nombre: producto.nombre,
  precio: producto.precio * 0.85,
  stock: producto.stock
}));

console.log(productosConDescuento);

console.log("Valor total del inventario:");

const valorTotal = productos.reduce(
  (total, producto) => total + producto.precio,
  0
);

console.log(valorTotal);

console.log("Producto más caro:");

const productoMasCaro = productos.find(
  producto => producto.precio === 900000
);

console.log(productoMasCaro);

console.log("Guardando inventario...");

function guardarInventario() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Inventario guardado correctamente");
    }, 2000);
  });
}


// Versión con then()

guardarInventario()
  .then(mensaje => {
    console.log(mensaje);
  })
  .catch(error => {
    console.log(error);
  });


// Versión con async/await

async function ejecutarGuardado() {
  const mensaje = await guardarInventario();

  console.log(mensaje);
}

// ejecutarGuardado();