import { useState, useEffect } from "react";
import ProductModel from "../models/ProductModel";
import ProductDummy from "../utils/ProductDummy";

export default function useProductViewModel(selectedCategory) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    console.log("Fetching products for category:", selectedCategory);

    setTimeout(() => {
      const filteredProducts = ProductDummy
        .filter((p) => p.category === selectedCategory)
        .map((p) => new ProductModel(p));

      setProducts(filteredProducts);
      setIsLoading(false);
    }, 2000);

    return () => {
      console.log("Cleanup - Component Unmounted or Category Changed");
    };
  }, [selectedCategory]);

  return { products, isLoading };
}
