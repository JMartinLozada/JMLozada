const express = require("express");
const app = express();

let modulo = require("./Contenedor.js");
let contenedor = new modulo.Contenedor("productos.txt");

app.get("/productos", (req, res) => {
  contenedor.getAll().then((result) => {
    let array = [];

    for (let i = 0; i < result.length; i++) //Asigna al array los productos de cada objeto
      array[i] = result[i].title;

    res.send(array);
  });
});

app.get("/productoRandom", (req, res) => {
  let productoRandom = parseInt(Math.random() * 10); //Convierte los valores de 0 a 1 en enteros

  contenedor.getById(productoRandom).then((result) => {
    if (result) res.send(result);
    else res.send("No se encuentra el Id");
  });
});

app.listen(8080, () => {
  console.log("Servidor levantado");
});

