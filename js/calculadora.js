//Variables
const limpiar = document.querySelector("#limpiar");
const display = document.querySelector("#display");
display.value = "0";

// Limpiar la pantalla
limpiar.addEventListener("click", () => (display.value = " "));

// Borrar último número de la pantalla
const borrarUltimo = () => {
  const num = display.value.slice(0, -1);
  display.value = num;
};

// Ternary
// Función nro Uno
const uno = () =>
  display.value == " "
    ? (display.value = "1")
    : (display.value = display.value + "1");

// Función nro Dos
const dos = () =>
  display.value == " "
    ? (display.value = "2")
    : (display.value = display.value + "2");

// Función nro Tres
const tres = () =>
  display.value == " "
    ? (display.value = "3")
    : (display.value = display.value + "3");

// Función nro Cuatro
const cuatro = () =>
  display.value == " "
    ? (display.value = "4")
    : (display.value = display.value + "4");

// Función nro Cinco
const cinco = () =>
  display.value == " "
    ? (display.value = "5")
    : (display.value = display.value + "5");

// Función nro Seis
const seis = () =>
  display.value == " "
    ? (display.value = "6")
    : (display.value = display.value + "6");

// Función nro Siete
const siete = () =>
  display.value == " "
    ? (display.value = "7")
    : (display.value = display.value + "7");

// Función nro Ocho
const ocho = () =>
  display.value == " "
    ? (display.value = "8")
    : (display.value = display.value + "8");

// Función nro Nueve
const nueve = () =>
  display.value == " "
    ? (display.value = "9")
    : (display.value = display.value + "9");

// Función nro Cero
const cero = () =>
  display.value == " "
    ? (display.value = "0")
    : (display.value = display.value + "0");

// Función punto
const punto = () =>
  display.value == " "
    ? (display.value = ".")
    : (display.value = display.value + ".");

const igual = () => {
  if (
    display.value === "undefined" ||
    display.value === " " ||
    display.value == ""
  ) {
    display.value = "0";
  } else {
    document.calculadora.display.value = eval(calculadora.display.value);
  }
};
