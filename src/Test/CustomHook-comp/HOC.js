import React from "react";
//2 importar el useCounterHOC
import { useCounter } from "./useCounterHOC";

// Un High order component es una funcion de Javascript que recibe como parametro un componente y devuelve un componente con una funcionalidad

// 1 voy hacer un HOC con mi componente contador, es decir voy a quitarle la logica al custo hook y lo a convertir el HOC
export const HOC = (Componente, productosA) => {
  //todo se trabaja dentro del nuevo componente
  //3 me traigo desde app toda la logica de mi contador desde APP
  //4 una vez lo tengo (const {incease...}) puedo o traer los productosA o pasarlos por parametros dentro de const HOC
  function NewComponent() {
    const { increase, decrease, disabled1, disabled2, cuenta } =
      useCounter(productosA);
    //5 y return va devolver componente con props, la cual va a recibir Componente, ejecuta la funcion y devuelve Componente con props
    //*** la diferencia con un CustomHook es que a este LE PUEDO agregar JSX mientras que al customHook NO

    return (
      <>
        <h1>MI HOC</h1>
        <Componente
          increase={increase}
          decrease={decrease}
          disabled1={disabled1}
          disabled2={disabled2}
          cuenta={cuenta}
        />
      </>
    );
  }

  //6 en el return  de la funcion HOc vamos a devolver el NewComponent
  return NewComponent;
};
