import ProductModel from "../models/ProductModel";
import ProductDummy from "../utils/ProductDummy";

export default class ProductController {
  static getProductsByCategory(category) {
    const filteredProducts = ProductDummy
      .filter((product) => product.category === category)
      .map((product) => new ProductModel(product));

    return filteredProducts;
  }
}
