import { createContext, useEffect, useState } from "react";
import supabase from "../../supabase";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState();

  const getProducts = async () => {
    let { data, error } = await supabase.from("products").select("*");
    if (error) {
      console.log(error);
    }

    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
