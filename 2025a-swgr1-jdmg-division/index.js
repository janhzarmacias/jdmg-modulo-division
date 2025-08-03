// index.js

exports.division = (a, b) => {
  const numeroUno = Number(a);
  const numeroDos = Number(b);

  if (isNaN(numeroUno) || isNaN(numeroDos)) {
    throw new Error("No son números válidos");
  }

  if (numeroDos === 0) {
    throw new Error("No se puede dividir para cero");
  }

  return numeroUno / numeroDos;
};
