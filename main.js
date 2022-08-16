class producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

const producto1 = new producto("silla", "50", 5);
const producto2 = new producto("mesa", "100", 5);
const producto3 = new producto("televisor", "150", 5);
const producto4 = new producto("lampara", "25", 5);
const producto5 = new producto("cocina", "200", 5);

function selecProd() {
  let costo = prompt(
    "Seleccione un producto de la lista \n -silla \n -mesa \n -televisor \n -lampara \n -cocina "
  );

  switch (costo) {
    case producto1.nombre:
      costo = Number(producto1.precio);
      alert("Ha agregado $" + producto1.precio);
      console.log("Agregaste $" + producto1.precio);
      break;
    case producto2.nombre:
      costo = Number(producto2.precio);
      alert("Ha agregado $" + producto2.precio);
      console.log("Agregaste $" + producto2.precio);
      break;
    case producto3.nombre:
      costo = Number(producto3.precio);
      alert("Ha agregado $" + producto3.precio);
      console.log("Agregaste $" + producto3.precio);
      break;
    case producto4.nombre:
      costo = Number(producto4.precio);
      alert("Ha agregado $" + producto4.precio);
      console.log("Agregaste $" + producto4.precio);
      break;
    case producto5.nombre:
      costo = Number(producto5.precio);
      alert("Ha agregado $" + producto5.precio);
      console.log("Agregaste $" + producto5.precio);
      break;
    default:
      alert("No está en la lista");
      break;
  }
  return costo;
}

const listaCosto = [];
let cantidad = 5;
do {
  let entrada = Number(selecProd());
  listaCosto.push(entrada);
  console.log(listaCosto);
} while (listaCosto.length != cantidad);

let precioFinal =
  listaCosto[0] + listaCosto[1] + listaCosto[2] + listaCosto[3] + listaCosto[4];
alert("El total de tu compra es " + precioFinal);
console.log("El total de tu compra es " + precioFinal);
