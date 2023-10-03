// exporto mi función y me traigo lo que vimos en la clase de itemcount.js, lo primeor es importar mis estados en la primera linea :

// linea 5 recibe como parametro el productosA desde App
import { useEffect, useState } from "react"; //1
export const useCounter = (productosA) => {
  //2  me traigo mis estados ya hechos cortandolos y pegandolos:
  const [cuenta, setCuenta] = useState(0);
  const [disabled1, setDisable1] = useState(false);
  const [disabled2, setDisable2] = useState(true);

  // 3 me traigio mi funcion de incrementar y decrementar

  const increase = () => {
    // if (productosA[0].stock > cuenta) {
    setCuenta(cuenta + 1);
    //   setDisable2(false);
    // } else {
    //   setDisable1(true);
    // }
  };

  const decrease = () => {
    // if (cuenta === 0) {
    //   setDisable2(true);
    //   setDisable1(false);
    // } else {
    setCuenta(cuenta - 1);
    // }
  };

  // 4 me traigo mi funcion que me desactiva los botones si llegan hasta cierto numero :

  useEffect(() => {
    if (cuenta == 0) {
      setDisable2(true);
      setDisable1(false);
    } else if (cuenta >= 1) {
      setDisable2(false);
    }
    if (cuenta === productosA[0].stock) {
      setDisable1(true);
      setDisable2(false);
    }
  }, [cuenta]); //**

  // 5 ahora le digo lo que quiero retornar, en este caso seria la funcion increase y decrease + los estados :

  return { increase, decrease, disabled1, disabled2, cuenta };
};
