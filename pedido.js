const productos = [
  { nombre: 'Milanesa de Pollo + Coca 500 ml', precio: 4000 },
  { nombre: 'Pancho con Papas + Coca 500 ml', precio: 2700 },
  { nombre: 'Hamburguesa con Cheddar + Coca 500 ml', precio: 3700 },
  { nombre: 'Jugo Estancia los Naranjos', precio: 2200 },
  { nombre: 'Gelatina', precio: 1000 },
  { nombre: 'Flan de Vainilla', precio: 1500 }
];

const itemsDiv = document.getElementById('items');
const totalP = document.getElementById('total');
const resumenDiv = document.getElementById('resumen');

const cantidades = new Array(productos.length).fill(0);

function actualizarVista() {
  itemsDiv.innerHTML = '';
  let total = 0;
  productos.forEach((prod, i) => {
    const div = document.createElement('div');
    div.className = 'pedido-item';
    const nombre = document.createElement('span');
    nombre.textContent = `${prod.nombre} - $${prod.precio}`;
    const menos = document.createElement('button');
    menos.textContent = '-';
    menos.onclick = () => {
      if (cantidades[i] > 0) cantidades[i]--; actualizarVista();
    };
    const cant = document.createElement('span');
    cant.textContent = cantidades[i];
    const mas = document.createElement('button');
    mas.textContent = '+';
    mas.onclick = () => { cantidades[i]++; actualizarVista(); };
    div.appendChild(nombre);
    div.appendChild(menos);
    div.appendChild(cant);
    div.appendChild(mas);
    itemsDiv.appendChild(div);
    total += cantidades[i] * prod.precio;
  });
  totalP.textContent = `Total: $${total}`;
}

actualizarVista();

document.getElementById('ver-resumen').onclick = () => {
  let resumen = '';
  productos.forEach((prod, i) => {
    if (cantidades[i] > 0) {
      resumen += `${cantidades[i]} x ${prod.nombre} - $${cantidades[i] * prod.precio}\n`;
    }
  });
  resumen += `\nTotal: $${cantidades.reduce((acc, c, i) => acc + c * productos[i].precio, 0)}`;
  resumenDiv.textContent = resumen;
  resumenDiv.style.display = 'block';
};
