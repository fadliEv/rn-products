export default class ProductModel {
    constructor(product) {
      this.id = product.id;
      this.imgUrl = product.imgUrl;
      this.name = product.name;
      this.category = product.category;
      this.price = product.price;
      this.rate = product.rate;
      this.terjual = product.terjual || 0;
      this.discount = product.discount || 0;
    }
  
    getDiscountedPrice() {
      return Math.round(this.price * this.discount);
    }
  
    getDiscountPercentage() {
      return Math.round(this.discount * 100);
    }
  }
  