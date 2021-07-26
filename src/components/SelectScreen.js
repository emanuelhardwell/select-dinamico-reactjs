import React, { useState } from "react";
import Swal from "sweetalert2";

const informacion = [
  {
    categorias: {
      id: 0,
      nombre: "preliminares",
    },
    articulos: [
      {
        nombre: "suministro y colocacion de letrero",
        unidad: "pza",
        precio: 3500,
      },
      {
        nombre: "trazo y nivelacion de terreno en estructuras",
        unidad: "m2",
        precio: 9,
      },
      { nombre: "otro", unidad: "pza", precio: 0 },
    ],
  },
  {
    categorias: {
      id: 1,
      nombre: "azotea",
    },
    articulos: [
      { nombre: "excavacion a cielo abierto", unidad: "m3", precio: 212 },
      { nombre: "retiro de material de excavacion", unidad: "m3", precio: 296 },
      {
        nombre: "plantilla de concreto hecho en obra",
        unidad: "m2",
        precio: 165,
      },
      { nombre: "zapata corrida de concreto", unidad: "m2", precio: 854 },
      { nombre: "zapata aislada de concreto", unidad: "pza", precio: 1460 },
      { nombre: "contratrabe de concreto", unidad: "ml", precio: 567 },
      { nombre: "trabe de liga de concreto", unidad: "ml", precio: 567 },
      { nombre: "dado armado con 8 varillas", unidad: "ml", precio: 2084 },
      { nombre: "castillo k armado con 4 varillas", unidad: "ml", precio: 292 },
      {
        nombre: "castillo k2 armado con 4 varillas",
        unidad: "ml",
        precio: 405,
      },
      {
        nombre: "castillo k3 armado con 6 varillas",
        unidad: "ml",
        precio: 479,
      },
      { nombre: "muro de enrase de tabicon", unidad: "m2", precio: 501 },
      {
        nombre: "cadena de desplante armada con 6 varillas",
        unidad: "ml",
        precio: 479,
      },
      {
        nombre: "relleno con material producto de excavacion",
        unidad: "m3",
        precio: 155,
      },
      {
        nombre: "suministro y rellenado con material",
        unidad: "m3",
        precio: 415,
      },
      { nombre: "otro", unidad: "pza", precio: 0 },
    ],
  },
  {
    categorias: {
      id: 2,
      nombre: "estructura primer nivel",
    },
    articulos: [
      { nombre: "castillo k armado con 4 varillas", unidad: "ml", precio: 292 },
      {
        nombre: "castillo k2 armado con 4 varillas ",
        unidad: "ml",
        precio: 405,
      },
      {
        nombre: "castillo k3 armado con 6 varillas",
        unidad: "ml",
        precio: 479,
      },
      { nombre: "columna de 30cm de diametro", unidad: "ml", precio: 918 },
      {
        nombre: "muro de tabicon de 14cm de espesor",
        unidad: "m2",
        precio: 401,
      },
      { nombre: "dala armada con 4 varillas", unidad: "ml", precio: 373 },
      {
        nombre: "cadena de cerramiento armada con 6 varillas",
        unidad: "ml",
        precio: 415,
      },
      {
        nombre: "trabe armada armada con 4 varillas",
        unidad: "ml",
        precio: 453,
      },
      {
        nombre: "losa de entrepiso concreto armado",
        unidad: "ml",
        precio: 844,
      },
      { nombre: "otro", unidad: "m2", precio: 0 },
    ],
  },
];
// console.log(informacion[0]);

export const SelectScreen = () => {
  const [articulos, setArticulos] = useState(-1);

  let initialState = {
    categoria: "",
    articulo: "",
    descripcion: "",
    cantidad: "",
    total: "",
  };

  const [data, setData] = useState(initialState);
  let { categoria, articulo, descripcion, cantidad, total } = data;

  const handleCargarArticulos = (e) => {
    const opcion = e.target.value;
    // console.log(opcion);
    setArticulos(opcion);
  };

  const handleCargarTotal = (e) => {
    console.log(e.target.value);
    let cantidad = e.target.value;
    let l = categoria;
    let j = articulo;
    let arrayArticulos = informacion[l].articulos;
    console.log(arrayArticulos);

    const resultado = arrayArticulos.find(
      (item) => item.nombre === j || item.nombre === "otro"
    );
    let res = resultado.precio * cantidad;
    // total = res;
    setData({ ...data, cantidad: cantidad, total: res });
    console.log(resultado);
    console.log(res);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // let index = e.target.selectedIndex;
    // let dato = e.target.options[index].text;
    // let datoPro = e.target.options[index].getAttribute("data-key");
    // console.log(e.target);
    setData({ ...data, [name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (categoria === "" || categoria === -1) {
      return Swal.fire("Error", "Selecciona una categoria y articulo", "error");
    }

    if (articulo === "") {
      return Swal.fire("Error", "Selecciona una categoria y articulo", "error");
    }

    console.log(data);
  };

  // return ********************************
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmitForm}>
                <h3> Categoria</h3>
                <div className="form-floating mb-2">
                  <select
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                    name="categoria"
                    value={categoria}
                    onChange={handleInputChange}
                    onClick={handleCargarArticulos}
                  >
                    <option value={-1}> Selecciona tu categoria </option>
                    {informacion.map((item, i) => (
                      <option key={i} value={item.categorias.id}>
                        {item.categorias.nombre}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="floatingSelect"> Categorias </label>
                </div>

                <h3>Productos</h3>
                <div className="form-floating mb-2">
                  <select
                    className="form-select"
                    id="floatingSelect2"
                    aria-label="Floating label select example"
                    name="articulo"
                    value={articulo}
                    onChange={handleInputChange}
                  >
                    <option value=""> Selecciona tu articulo </option>
                    {articulos > -1 &&
                      informacion[articulos].articulos.map((item, i) => (
                        <option key={i} value={item.nombre}>
                          {item.nombre}
                        </option>
                      ))}
                  </select>
                  <label htmlFor="floatingSelect2"> Articulos </label>
                </div>

                <h3> Descripción </h3>
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput3"
                    placeholder="a"
                    name="descripcion"
                    value={descripcion}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="floatingInput3"> Descripción </label>
                </div>

                <h3> Cantidad </h3>
                <div className="form-floating mb-2">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInput9"
                    placeholder="a"
                    name="cantidad"
                    value={cantidad}
                    onChange={(e) => {
                      handleInputChange(e);
                      handleCargarTotal(e);
                    }}
                  />
                  <label htmlFor="floatingInput9"> Cantidad </label>
                </div>

                <h3> total </h3>
                <div className="form-floating mb-2">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInput1"
                    placeholder="a"
                    name="total"
                    value={total}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="floatingInput1"> Total </label>
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">
                    <i className="far fa-save me-2"></i>
                    <span> Agregar </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* col-md-6 */}
        <div className="col-md-6">
          <h3> hola menu </h3>
        </div>
      </div>
    </>
  );
};
