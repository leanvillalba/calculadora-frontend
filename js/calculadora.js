//Variables
const limpiar = document.querySelector("#limpiar");
const display = document.querySelector("#display");

// Limpiar la pantalla
limpiar.addEventListener("click", () => (display.value = " "));

// Borrar último número de la pantalla
const borrarUltimo = () => {
  const num = display.value.slice(0, -1); // Ver info de método slice()
  display.value = num;
};

// Función nro Uno
const uno = () => {
  if (display.value == " ") {
    display.value = "1";
  } else {
    display.value = display.value + "1";
  }
};

// Función nro Dos
const dos = () => {
  if (display.value == " ") {
    display.value = "2";
  } else {
    display.value = display.value + "2";
  }
};

// Función nro Tres
const tres = () => {
  if (display.value == " ") {
    display.value = "3";
  } else {
    display.value = display.value + "3";
  }
};

// Función nro Cuatro
const cuatro = () => {
  if (display.value == " ") {
    display.value = "4";
  } else {
    display.value = display.value + "4";
  }
};

// Función nro Cinco
const cinco = () => {
  if (display.value == " ") {
    display.value = "5";
  } else {
    display.value = display.value + "5";
  }
};

// Función nro Seis
const seis = () => {
  if (display.value == " ") {
    display.value = "6";
  } else {
    display.value = display.value + "6";
  }
};

// Función nro Siete
const siete = () => {
  if (display.value == " ") {
    display.value = "7";
  } else {
    display.value = display.value + "7";
  }
};

// Función nro Ocho
const ocho = () => {
  if (display.value == " ") {
    display.value = "8";
  } else {
    display.value = display.value + "8";
  }
};

// Función nro Nueve
const nueve = () => {
  if (display.value == " ") {
    display.value = "9";
  } else {
    display.value = display.value + "9";
  }
};

// Función nro Cero
const cero = () => {
  if (display.value == " ") {
    display.value = "0";
  } else {
    display.value = display.value + "0";
  }
};

// Función punto
const punto = () => {
  if (display.value == " ") {
    display.value = ".";
  } else {
    display.value = display.value + ".";
  }
};
