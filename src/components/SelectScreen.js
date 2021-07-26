import React, { useState } from "react";

const categorias = [
  {
    nombre: "audio y video",
    articulos: ["monitor led", "parlante bluetoo", "samrt tv"],
  },
  {
    nombre: "ferreteria",
    articulos: ["martillo pequeño", "taladro percusión", "serrucho corte fino"],
  },
  {
    nombre: "verdura",
    articulos: ["calabacitas", "cebolla", "ajo en polvo"],
  },
];
// console.log(categorias);

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
    console.log(e.target.value);
    setData({ ...data, [name]: value });
  };

  // return ********************************
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <h3> Categoria</h3>
          <div className="form-floating">
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
              {categorias.map((item, i) => (
                <option key={i} value={i}>
                  {item.nombre}
                </option>
              ))}
            </select>
            <label htmlFor="floatingSelect"> Categorias </label>
          </div>
        </div>
        {/* col-md-6 */}
        <div className="col-md-6">
          <h3>Productos</h3>
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelect2"
              aria-label="Floating label select example"
              name="articulo"
              value={articulo}
              onChange={handleInputChange}
            >
              <option value="hokla"> Selecciona tu articulo </option>
              {articulos > -1 &&
                categorias[articulos].articulos.map((item, i) => (
                  <option key={i} value={i}>
                    {item}
                  </option>
                ))}
            </select>
            <label htmlFor="floatingSelect2"> Articulos </label>
          </div>
        </div>
      </div>
    </>
  );
};
