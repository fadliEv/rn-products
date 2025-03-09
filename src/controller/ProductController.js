import { useState, useEffect } from "react";
import ProductModel from "../models/ProductModel";
import ProductDummy from "../utils/ProductDummy";

export default function useProductController(selectedCategory) {
  const [products, setProducts] = useState([]);

  // Lifecycle: useEffect untuk meniru componentDidMount & componentDidUpdate
  useEffect(() => {
    console.log("Fetching products for category:", selectedCategory);    
    const filteredProducts = ProductDummy
      .filter((product) => product.category === selectedCategory)
      .map((product) => new ProductModel(product));
    setProducts(filteredProducts);
    return () => {
      console.log("Cleanup - Component Unmounted or Category Changed");
    };
  }, [selectedCategory]); // Akan dipanggil setiap kali kategori berubah

  return { products };
}
