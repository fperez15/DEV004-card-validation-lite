function validate() {
  //capturar el valor de mi input
  let captureInput = document.getElementById("cardnumber").value;

  //verificar si fue ingresa un valor en el input
  if (captureInput.length === 0) {
    return alert("Ingrese un número de tarjeta de crédito / débito");
  } else if ( captureInput.length > 18 || captureInput.length < 13) {
    document.getElementById("cardnumber").value = "";
    return alert("Ingresar solo números y que sean de 13 a 18 digitos");
  } else {
    //aplicar sin espacio el valor del input
    let withoutSpace = captureInput.replaceAll(" ", "");
    document.getElementById("cardnumber").value = withoutSpace;
    console.log("mi array del input es", withoutSpace);

    // Convertir en array con el split e invertir los elementos
    let arrayInvertido = withoutSpace.split("").map(Number).reverse();
    console.log("MI Array inverso es:", arrayInvertido);

    // Como ya tengo mi array invertido necesito saber si tiene alguna letra(NaN)
    let arrayFilterLetras = arrayInvertido.filter(function (element) {
      return isNaN(element);
    });

    console.log("Mi array filter letras: ", arrayFilterLetras);

    // Si tengo en mi arrayFilterLetras algún elemento significa que tiene letras
    if (arrayFilterLetras.length !== 0) {
      document.getElementById("cardnumber").value = "";
      return alert("Por favor solo ingrese números");
    } else {
      // Identificar los numeros pares
      arrayElementPar = arrayInvertido.filter(function (element, indice) {
        if (indice % 2 === 1) return element;
      });

      arrayElementImpar = arrayInvertido.filter(function (element, indice) {
        if (indice % 2 === 0) return element;
      });

      console.log("mi array par:", arrayElementPar);
      console.log("mi array impar:", arrayElementImpar);

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
        alert("Tarjeta validada correctamente gracias a Francis");
      } else {
        alert("Lo siento pero tu tarjeta está clonada");
      }
    }
  }
}
