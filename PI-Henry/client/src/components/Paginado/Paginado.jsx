import React, { useState, useEffect } from "react";
const PAGINAIZQUIERDA = "LEFT";
const PAGINADERECHA = "RIGHT";
const rango = (desde, hasta, contador = 1) => {
  let i = desde;
  const rango = [];

  while (i <= hasta) {
    rango.push(i);
    i += contador;
  }

  return rango;
};

export default function Paginado (props) {
  const {
    total,
    paginalimite,
    paginasdelado,
    cambiodepagina,
    current
  } = props;
  const [totalPaginas, setotalPaginas] = useState(0);
  useEffect(() => {
    setotalPaginas(Math.ceil(total / paginalimite));
  }, [setotalPaginas,total, paginalimite]);

  const obtenernumerodepaginas = () => {
    const totalNumeros = paginasdelado * 2 + 3;
    const totalBloques = totalNumeros + 2;

    if (totalPaginas > totalBloques) {
      const paginainicio = Math.max(2, current - paginasdelado);
      const paginafinal = Math.min(totalPaginas - 1, current + paginasdelado);

      let paginas = rango(paginainicio, paginafinal);

      const limiteizquierdo = paginainicio > 2;
      const limitederecho = totalPaginas - paginafinal > 1;
      const fnialdelset = totalNumeros - (paginas.length + 1);

      switch (true) {
        case limiteizquierdo && !limitederecho: {
          const paginaextra = rango(paginainicio - fnialdelset, paginainicio - 1);
          paginas = [PAGINAIZQUIERDA, ...paginaextra, ...paginas];
          break;
        }
        case limiteizquierdo && limitederecho:
        default: {
          paginas = [PAGINAIZQUIERDA, ...paginas, PAGINADERECHA];
          break;
        }
      }
      return [1, ...paginas, totalPaginas];
    }
    return rango(1, totalPaginas);
  };

  const paginas = obtenernumerodepaginas() || [];
  return (
    <div  >
      <ul >
        {paginas.map((pagina, index) => {
          if (pagina === PAGINAIZQUIERDA)
            return (
              <li  key={index}   >
                <a 
                  href="/"
                  aria-label="Previous"
                  onClick={(e) => cambiodepagina(e, paginasdelado * 2 - 1)}
                >
                  <span aria-hidden="true"> ⋘  ⋘ </span>
                </a>
              </li>
            );

          if (pagina === PAGINADERECHA)
            return (
              <li key={index} >
                <a 
                  href="/"
                  aria-label="Next"
                  onClick={(e) => cambiodepagina(e, paginasdelado * 2 + 3)}
                >
                  <span aria-hidden="true"> ⋙  ⋙</span>
                </a>
              </li>
            );

          return (
            <li
              key={index}
             
            >
              <a 
                href="/"
                onClick={(e) => cambiodepagina(e, pagina)}
              >
                {pagina}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

