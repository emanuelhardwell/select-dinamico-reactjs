import React, { useState } from "react";
import Swal from "sweetalert2";

const informacion = [
  {
    claves: {
      id: 0,
      nombre: "preliminares",
    },
    productos: [
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
    claves: {
      id: 1,
      nombre: "azotea",
    },
    productos: [
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
    claves: {
      id: 2,
      nombre: "estructura primer nivel",
    },
    productos: [
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

export const SelectScreen = () => {
  const [arrayProductos, setArrayProductos] = useState([]);

  let initialState = {
    clave: "",
    producto: "",
    descripcion: "",
    unidad: "",
    cantidad: "",
    total: "",
  };

  const [data, setData] = useState(initialState);
  let { clave, producto, descripcion, unidad, cantidad, total } = data;

  const handleCargarProductos = (e) => {
    const opcion = e.target.value;

    setData({
      ...data,
      producto: "",
      cantidad: "",
      total: "",
      descripcion: "",
      unidad: "",
    });

    const resultado = informacion.find((item) => item.claves.nombre === opcion);
    if (resultado !== undefined) {
      const resultadoFinal = resultado.productos;
      // console.log(resultadoFinal);
      setArrayProductos(resultadoFinal);
    }
  };

  const handleVerificarProducto = (e) => {
    setData({
      ...data,
      cantidad: "",
      total: "",
      descripcion: "",
      unidad: "",
    });
  };

  const handleCargarTotal = (e) => {
    let cantidad = e.target.value;
    let productoFinal = producto;

    const resultado = arrayProductos.find(
      (item) => item.nombre === productoFinal || item.nombre === "otro"
    );
    let res = resultado.precio * cantidad;
    let unidadFinal = resultado.unidad;
    console.log(unidadFinal);
    setData({
      ...data,
      cantidad: cantidad,
      total: res,
      unidad: unidadFinal,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (clave === "" || clave === "-1" || clave === -1) {
      return Swal.fire("Error", "Selecciona una clave y producto", "error");
    }

    if (producto === "") {
      return Swal.fire("Error", "Selecciona una clave y producto", "error");
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
                    name="clave"
                    value={clave}
                    onChange={handleInputChange}
                    onClick={handleCargarProductos}
                  >
                    <option value={-1}> Selecciona tu clave </option>
                    {informacion.map((item, i) => (
                      <option key={i} value={item.claves.nombre}>
                        {item.claves.nombre}
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
                    name="producto"
                    value={producto}
                    onChange={handleInputChange}
                    onClick={handleVerificarProducto}
                  >
                    <option value=""> Selecciona tu producto </option>
                    {arrayProductos.map((item, i) => (
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

                <h3> Unidad </h3>
                <div className="form-floating mb-2">
                  <input
                    disabled={true}
                    type="text"
                    className="form-control"
                    id="floatingInput3"
                    placeholder="a"
                    name="unidad"
                    value={unidad}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="floatingInput3"> Unidad </label>
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
