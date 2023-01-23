function validate() {
  const captureInput = document.getElementById("cardnumber").value;

  // Aplicar sin espacio el valor del input
  let formattCaptureInput = captureInput.replaceAll(" ", "");
  document.getElementById("cardnumber").value = formattCaptureInput;

  if (formattCaptureInput.length === 0) {
    return alert("Ingrese un número de tarjeta de crédito / débito");
  }

  if (/^[0-9]+$/i.test(formattCaptureInput) === false) {
    return alert("Ingresar solo números");
  }

  if (formattCaptureInput.length > 18 || formattCaptureInput.length < 13) {
    return alert("Ingresar de 13 a 18 digitos");
  }

  const forValidateInput = isValid(formattCaptureInput);

  if (forValidateInput) {
    return alert("La tarjeta fue validada exitosamente gracias a Francis");
  } else {
    return alert("Lo siento pero lamento informar que su tarjeta se clonó");
  }
}  

 
function isValid(creditNumber) {

    // Convertir en array con el split e invertir los elementos
    let arrayInvertido = creditNumber.split("").map(Number).reverse();
    console.log("Mi Array inverso es:", arrayInvertido);

    // Identificar los numeros pares
    arrayElementPar = arrayInvertido.filter(function (element, indice) {
      if (indice % 2 === 1) return element;
    });

    arrayElementImpar = arrayInvertido.filter(function (element, indice) {
      if (indice % 2 === 0) return element;
    });

    console.log("Mi array par:", arrayElementPar);
    console.log("Mi array impar:", arrayElementImpar);

    // Multiplicar *2 y validar si son >= 10 para sumar sus digitos
    arrayFormattPar = arrayElementPar.map(function (element) {
      let operacionElement = element * 2;

      if (operacionElement >= 10) {
        let arrayDigitos = operacionElement.toString().split("").map(Number);

        let sumaArrayDigitos = arrayDigitos.reduce(function (a, b) {
          return a + b;
        });
        // console.log('arrayDigitos: ', arrayDigitos);
        // console.log('sumaArrayDigitos: ', sumaArrayDigitos);
        return sumaArrayDigitos;
      } else {
        return operacionElement;
      }
    });

    console.log("mi array formatt par:", arrayFormattPar);

    let nuevoArray = [...arrayFormattPar, ...arrayElementImpar];
    console.log("nuevo Array: ", nuevoArray);

    let sumaFinal = nuevoArray.reduce(function (a, b) {
      return a + b;
    });
    console.log("suma final: ", sumaFinal);

    if (sumaFinal % 10 === 0) {
      return true;
    } else {
      return false;
    }
}

