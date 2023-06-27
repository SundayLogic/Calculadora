import React, { useState } from "react";

// Definimos los tipos de valores que los botones pueden tener
type ButtonValue =
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

  // Esta función maneja lo que sucede cuando se hace clic en un botón
  const handleButtonClick = (value: ButtonValue): void => {
    // Si el resultado es "0" o "Error", el resultado se convierte en el valor del botón
    // De lo contrario, agregamos el valor del botón al resultado actual
    if (resultado === "0" || resultado === "Error") {
      setResultado(value);
    } else {
      setResultado(resultado + value);
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
  const reset = (): void => {
    setResultado("0");
  };
  // El componente de la calculadora que se renderiza en la pági
  return (
    <table className="table-fixed border-collapse w-[30vw] rou">
      <tbody>
        <tr className="bg-black text-white">
          <td
            colSpan={4}
            className="border border-black p-2 text-4xl font-sans text-right"
          >
            {resultado}
          </td>
        </tr>
        <tr className="bg-slate-100">
          {["7", "8", "9", "*"].map((value, index) => (
            <td
              key={index}
              className="border border-black p-2 text-4xl font-sans text-center cursor-pointer"
              onClick={() => handleButtonClick(value as ButtonValue)}
            >
              {value}
            </td>
          ))}
        </tr>
        <tr className="bg-slate-100">
          {["4", "5", "6", "-"].map((value, index) => (
            <td
              key={index}
              className="border border-black p-2 text-4xl font-sans text-center cursor-pointer"
              onClick={() => handleButtonClick(value as ButtonValue)}
            >
              {value}
            </td>
          ))}
        </tr>
        <tr className="bg-slate-100">
          {["1", "2", "3", "+"].map((value, index) => (
            <td
              key={index}
              className="border border-black p-2 text-4xl font-sans text-center cursor-pointer"
              onClick={() => handleButtonClick(value as ButtonValue)}
            >
              {value}
            </td>
          ))}
        </tr>
        <tr>
          <td
            colSpan={2}
            className="border border-black p-2 text-4xl font-sans text-center cursor-pointer"
            onClick={() => handleButtonClick("0")}
          >
            0
          </td>
          <td
            className="border border-black p-2 text-4xl font-sans text-center cursor-pointer bg-orange-400"
            onClick={reset}
          >
            R
          </td>
          <td
            className="border border-black p-2 text-4xl font-sans text-center cursor-pointer"
            onClick={calcular}
          >
            =
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Calculadora;
