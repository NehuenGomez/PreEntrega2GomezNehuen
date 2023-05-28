// FUNCION CONSTRUCTORA
class Compra {
    constructor(carritoDeCompras) {
      this.carritoDeCompras = carritoDeCompras;
    }
  
    verValorSubTotal() {
      if (this.carritoDeCompras.length > 0) {
        return this.carritoDeCompras.reduce(
          (acc, producto) => acc + parseInt(producto.precio),
          0
        );
      } else {
        return 'Algo salió mal.';
      }
    }
  
    finalizarCompra() {
      const valorSubTotal = this.verValorSubTotal();
      if (valorSubTotal !== 'Algo salió mal.') {
        return `Se confirmó el pago de $ ${valorSubTotal}. \n¡Gracias por confiar en Nosotros!`;
      } else {
        return 'Hubo un error en el pago. Intentá nuevamente en unos minutos.';
      }
    }
  }
  
  // ARRAY DE PRODUCTOS
  const ARRAY_PRODUCTOS = [
    { id: '1', marca: 'Apple', precio: 200000, modelo: 'Iphone 11' },
    { id: '2', marca: 'Samsung', precio: 180000, modelo: 'Galaxy S20' },
    { id: '3', marca: 'Motorola', precio: 160000, modelo: 'Moto Edge 20' },
    { id: '4', marca: 'Xiaomi', precio: 175000, modelo: 'Mi 11' },
    { id: '5', marca: 'Samsung', precio: 120000, modelo: 'Galaxy A52' },
    { id: '6', marca: 'Motorola', precio: 125000, modelo: 'Moto G71' },
  ];
  
  // MENSAJE INICIAL
  const mensajeInicial =
    'Hola, ingresá el número correspondiente al producto que deseas adquirir:\n' +
    '1) Apple Iphone 11 \n' +
    '2) Samsung Galaxy S20 \n' +
    '3) Motorola Moto Edge 20 \n' +
    '4) Xiaomi Mi 11 \n' +
    '5) Samsung Galaxy A52 \n' +
    '6) Motorola Moto G71';
  
  function buscarProducto(codigo) {
    return ARRAY_PRODUCTOS.find((producto) => producto.id === codigo);
  }
  
  const carritoDeCompras = [];
  
  function verCarrito() {
    console.table(carritoDeCompras);
  }
  
  function finalizarCompra() {
    const shopping = new Compra(carritoDeCompras);
    if (carritoDeCompras.length > 0) {
      const valorTotal = shopping.verValorSubTotal();
      alert(`El valor total es de $ ${valorTotal}`);
      const respuesta = confirm('Ir a Pagar');
      if (respuesta) {
        alert(shopping.finalizarCompra());
        carritoDeCompras.length = 0;
      } else {
        alert('No hay ningún producto en el carrito.');
      }
    } else {
      alert('No hay ningún producto en el carrito.');
    }
  }
  
  function comprar() {
    const codigo = prompt(mensajeInicial);
    if (!parseInt(codigo)) {
      alert('Ingresá un código válido.');
      const respuesta = confirm('¿Volver a intentar?');
      if (respuesta) {
        comprar();
      }
      return;
    }
    const productoSeleccionado = buscarProducto(codigo);
    if (productoSeleccionado) {
      alert(
        `El producto "${productoSeleccionado.modelo}" se agregó con éxito al carrito, valor $` + `${productoSeleccionado.precio}`
      );
      carritoDeCompras.push(productoSeleccionado);
      const respuesta = confirm('¿Deseas adquirir otro producto?');
      if (respuesta) {
        comprar();
      } else {
        finalizarCompra();
      }
    } else {
      alert('Ingresá un código válido.');
      const respuesta = confirm('¿Volver a intentar?');
      if (respuesta) {
        comprar();
      }
    }
  }
  console.log(comprar())