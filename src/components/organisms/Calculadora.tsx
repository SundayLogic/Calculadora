import React, { useState } from "react";

// Definimos los tipos de valores que los botones pueden tener
type ValorBoton =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "+"
  | "-"
  | "*"
  | "="
  | "R";

const Calculadora: React.FC = () => {
  const [resultado, setResultado] = useState<string>("0");

  // Esta función maneja lo que sucede cuando se hace click en un botón
  const manejarClickBoton = (valor: ValorBoton): void => {
    // Si el resultado es "0" o "Error", el resultado se convierte en el valor del botón
    // De lo contrario, agregamos el valor del botón al resultado actual
    if (resultado === "0" || resultado === "Error") {
      setResultado(valor);
    } else {
      setResultado(resultado + valor);
    }
  };

  // Esta función se encarga de calcular el resultado de la expresión matemática actual
  const calcular = (): void => {
    // Usamos la función eval para calcular la expresión matemática
    try {
      setResultado(eval(resultado).toString());
    } catch (error) {
      // Si hay un error (por ejemplo, la expresión no es válida), establecemos el resultado como "Error"
      setResultado("Error");
    }
  };

  // Esta función se encarga de restablecer el resultado a "0"
  const resetear = (): void => {
    setResultado("0");
  };

  // El componente de la calculadora que se renderiza en la página
  return (
    <table className="table-fixed border-collapse w-[30vw] rou">
      <tbody>
        <tr className="bg-black text-white">
          {/* Mostrando el resultado */}
          <td
            colSpan={4}
            className="border border-black p-2 text-4xl font-sans text-right"
          >
            {resultado}
          </td>
        </tr>
        <tr className="bg-slate-100">
          {/* Para cada fila, mapeamos un array de valores de botones y creamos una celda para cada uno */}
          {["7", "8", "9", "*"].map((valor, indice) => (
            <td
              key={indice}
              className="border border-black p-2 text-4xl font-sans text-center cursor-pointer"
              onClick={() => manejarClickBoton(valor as ValorBoton)}
            >
              {/* Cuando se hace clic en un botón, llamamos a la función manejarClickBoton con el valor del botón */}
              {valor}
            </td>
          ))}
        </tr>
        <tr className="bg-slate-100">
          {/* Para cada fila, mapeamos un array de valores de botones y creamos una celda para cada uno */}
          {["4", "5", "6", "-"].map((valor, indice) => (
            <td
              key={indice}
              className="border border-black p-2 text-4xl font-sans text-center cursor-pointer"
              onClick={() => manejarClickBoton(valor as ValorBoton)}
            >
              {/* Cuando se hace clic en un botón, llamamos a la función manejarClickBoton con el valor del botón */}
              {valor}
            </td>
          ))}
        </tr>
        <tr className="bg-slate-100">
          {/* Para cada fila, mapeamos un array de valores de botones y creamos una celda para cada uno */}
          {["1", "2", "3", "+"].map((valor, indice) => (
            <td
              key={indice}
              className="border border-black p-2 text-4xl font-sans text-center cursor-pointer"
              onClick={() => manejarClickBoton(valor as ValorBoton)}
            >
              {/* Cuando se hace clic en un botón, llamamos a la función manejarClickBoton con el valor del botón */}
              {valor}
            </td>
          ))}
        </tr>
        <tr>
          <td
            colSpan={2}
            className="border border-black p-2 text-4xl font-sans text-center cursor-pointer"
            onClick={() => manejarClickBoton("0")}
          >
            0
          </td>
          <td
            className="border border-black p-2 text-4xl font-sans text-center cursor-pointer bg-orange-400"
            onClick={resetear}
          >
            {/* El botón "R" llama a la función resetear */}R
          </td>
          <td
            className="border border-black p-2 text-4xl font-sans text-center cursor-pointer"
            onClick={calcular}
          >
            {/* El botón "=" llama a la función calcular */}=
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Calculadora;
