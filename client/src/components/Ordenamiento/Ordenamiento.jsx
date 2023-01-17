import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ordenarbyAlfa, orderbyHealthScore} from "../../redux/action/actions";
import {ContainerAlfa, GeneralContainer, ContainerHealthScore} from "./styles.js"
export default function Ordenamiento() {
  const dispatch = useDispatch();
  const [infOrder, setOrder] = useState({});
  const handledata = (e) => {
    setOrder({ ...infOrder, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(ordenarbyAlfa(infOrder))
    dispatch(orderbyHealthScore(infOrder))
  }, [dispatch, infOrder]);

  return (
    <GeneralContainer>
      <ContainerAlfa>

      
        <h4>Alphabetical Order</h4>
        <form id="orden1"
         onSubmit={e => e.preventDefault(e)}
         >
          
            <label htmlFor="orden1">A - Z</label>
            <input
            form="orden1"
              type="radio"
              name="ordenarAlfa"
              id="orden1"
              value="A - Z"
              onChange={(e) => 
               handledata(e)
              }
            />
            <label htmlFor="orden2">Z - A</label>
            <input
            form="orden1"
              type="radio"
              name="ordenarAlfa"
              id="orden2"
              value="Z - A"
              onChange={(e) => 
                 handledata(e)
              }
            />
          <label htmlFor="orden2">Default Order</label>
          <input
            id="default"
            form="orden1"
            htmlFor="orden1"
            name="ordenarAlfa"
            type="radio"
            value="Default Order"
            onClick={(e) => 
              handledata(e)
            }
          />
        </form>
     
      </ContainerAlfa>
      <ContainerHealthScore>
        
          <h4>Health Score Order </h4>
          <form id="orden2"
          onSubmit={e => e.preventDefault(e)}
          >
            
              <label htmlFor="orden3"> From Lowest to Highest Health Score</label>
              <input
                type="radio"
                name="ordenarhealthScore"
                id="orden3"
                value="menorhealthScore"
                onChange={(e) =>
                   handledata(e)
                  }
              />

              <label htmlFor="orden4"> From Highest to Lowest Health Score</label>
              <input
                type="radio"
                name="ordenarhealthScore"
                id="orden4"
                value="mayorhealthScore"
                onChange={(e) => 
                  handledata(e)
                }
              />
            
            <label htmlFor="orden4"> Default Order</label>
            <input
              htmlFor="orden2"
              name="ordenarhealthScore"
              type="radio"
              value="Default Order"
              onClick={(e) => 
                handledata(e)
              }
            />
          </form>

      </ContainerHealthScore>
    </GeneralContainer>
  );
}
