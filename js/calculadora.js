// Limpiar la pantalla
document.querySelector("#limpiar").addEventListener("click", () => {
  document.querySelector("#display").value = " ";
});

// Borrar último número de la pantalla
const borrarUltimo = () => {
  const num = document.querySelector("#display").value.slice(0, -1); // Ver info de método slice()
  document.querySelector("#display").value = num;
};
