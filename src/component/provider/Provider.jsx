import React, { useEffect, useState } from "react";
import products from'../../utils/data/products'



export const Context = React.createContext([]);

const Provider = props => {

    const [data, setData] = useState([]);

    useEffect(() => {
      setData(products);
   }, []);

  
    return (
      <Context.Provider value={ {data}}>
         {props.children}
      </Context.Provider>
    );
  };


  export default Provider