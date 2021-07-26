import React, { useState } from "react";
import Swal from "sweetalert2";

const informacion = [
  {
    categorias: {
      id: 1,
      nombre: "preliminares",
    },
    articulos: [
      { nombreArticulo: "castillo k armado con 4 varillas", unidad: "ml" },
      { nombreArticulo: "castillo k2 armado con 4 varillas ", unidad: "ml" },
      { nombreArticulo: "castillo k3 armado con 6 varillas", unidad: "ml" },
      { nombreArticulo: "columna de 30cm de diametro", unidad: "ml" },
      { nombreArticulo: "muro de tabicon de 14cm de espesor", unidad: "m2" },
      { nombreArticulo: "dala armada con 4 varillas", unidad: "ml" },
      {
        nombreArticulo: "cadena de cerramiento armada con 6 varillas",
        unidad: "ml",
      },
      { nombreArticulo: "trabe armada armada con 4 varillas", unidad: "ml" },
      { nombreArticulo: "losa de entrepiso concreto armado", unidad: "ml" },
      { nombreArticulo: "otro", unidad: "m2" },
    ],
  },
  {
    categorias: {
      id: 2,
      nombre: "azotea",
    },
    articulos: [
      { nombreArticulo: "dala armada con 4 varillas", unidad: "ml" },
      { nombreArticulo: "castillo k armado con 4 varillas", unidad: "ml" },
      { nombreArticulo: "muro de tabicon de 14cm", unidad: "m2" },
      {
        nombreArticulo: "cadena de cerramiento armada con 6 varillas",
        unidad: "ml",
      },
      { nombreArticulo: "rotulo", unidad: "lote" },
      { nombreArticulo: "nivelacion de losa de  azotea", unidad: "m2" },
      { nombreArticulo: "otro", unidad: "ml" },
    ],
  },
];
// console.log(informacion);

export const SelectScreen = () => {
  const [articulos, setArticulos] = useState(-1);

  const initialState = {
    categoria: "",
    articulo: "",
  };

  const handleCargarArticulos = (e) => {
    const opcion = e.target.value;
    console.log(opcion);
    setArticulos(opcion);
  };

  const [data, setData] = useState(initialState);
  const { categoria, articulo } = data;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let index = e.target.selectedIndex;
    let dato = e.target.options[index].text;
    let datoPro = e.target.options[index].getAttribute("data-key");
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
                      <option key={i} value={i} data-key={item.nombre}>
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
                    <option value="hola"> Selecciona tu articulo </option>
                    {articulos > -1 &&
                      informacion[articulos].articulos.map((item, i) => (
                        <option
                          key={i}
                          value={item.nombreArticulo}
                          data-key={item.nombreArticulo}
                        >
                          {item.nombreArticulo}
                        </option>
                      ))}
                  </select>
                  <label htmlFor="floatingSelect2"> Articulos </label>
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
