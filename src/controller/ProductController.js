import { useState, useEffect } from "react";
import ProductModel from "../models/ProductModel";
import ProductDummy from "../utils/ProductDummy";

export default function useProductController(selectedCategory) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State loading

  useEffect(() => {
    setIsLoading(true); // Aktifkan loading

    console.log("Fetching products for category:", selectedCategory);

    setTimeout(() => {
      const filteredProducts = ProductDummy
        .filter((product) => product.category === selectedCategory)
        .map((product) => new ProductModel(product));

      setProducts(filteredProducts);
      setIsLoading(false); // Matikan loading setelah data di-fetch
    }, 2000); // Simulasi loading selama 2 detik

    return () => {
      console.log("Cleanup - Component Unmounted or Category Changed");
    };
  }, [selectedCategory]);

  return { products, isLoading };
}
