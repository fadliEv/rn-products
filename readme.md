# React Native MVC Product List App

![gif-image](/ui-app-v2.gif)

## 📌 Project Overview
This project is a **React Native** application that follows the **MVC (Model-View-Controller)** architecture to display a categorized product list. The app includes features such as **product filtering**, **discount calculations**, and a **loading indicator** to enhance user experience.

## 🚀 Features
- **MVC Architecture**: Separates business logic (Model), UI (View), and data processing (Controller).
- **Product Filtering**: Users can switch between categories (Makanan & Minuman).
- **Dynamic Discount Calculation**: Displays the discount amount and percentage correctly.
- **Loading Simulation**: Uses `setTimeout` to simulate API loading behavior.
- **Reusable Components**: Modular design with `ProductCard` and `Loading` components.

## 🏗 Project Structure
```
src/
 ├── components/
 │   ├── ProductCard.js        // View (Product UI)
 │   ├── ProductCard.style.js  // Styles for ProductCard
 │   ├── Loading.js            // Loading Component
 ├── controllers/
 │   ├── ProductController.js  // Controller (Manages logic & data fetching)
 ├── models/
 │   ├── ProductModel.js       // Model (Handles product data)
 ├── screens/
 │   ├── ProductList.js        // View (Displays product list & categories)
 ├── utils/
 │   ├── ProductDummy.js       // Dummy product data
 ├── App.js                    // Main entry point
```

## 📦 Installation & Setup
1. **Clone the repository**
   ```sh
   git clone https://github.com/your-repo/react-native-mvc-product-list.git
   cd react-native-mvc-product-list
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Run the app**
   ```sh
   npx expo start
   ```

## 🛠 Technologies Used
- **React Native** (Expo)
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Styling**: React Native `StyleSheet`

## 📜 MVC Implementation
### **1. Model (ProductModel.js)**
Handles product data, including calculations for discount amount and percentage.
```javascript
export default class ProductModel {
  constructor(product) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.discount = product.discount || 0;
  }

  getDiscountedPrice() {
    return Math.round(this.price * this.discount);
  }

  getDiscountPercentage() {
    return Math.round(this.discount * 100);
  }
}
```

### **2. Controller (ProductController.js)**
Fetches products based on category and simulates loading delay using `setTimeout`.
```javascript
import { useState, useEffect } from "react";
import ProductModel from "../models/ProductModel";
import ProductDummy from "../utils/ProductDummy";

export default function useProductController(selectedCategory) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const filteredProducts = ProductDummy
        .filter((p) => p.category === selectedCategory)
        .map((p) => new ProductModel(p));
      setProducts(filteredProducts);
      setIsLoading(false);
    }, 2000);
  }, [selectedCategory]);

  return { products, isLoading };
}
```

### **3. View (ProductList.js & ProductCard.js)**
Manages UI and displays products retrieved from the Controller.
```javascript
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import useProductController from "../controller/ProductController";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState("Makanan");
  const { products, isLoading } = useProductController(selectedCategory);

  const sections = [{ title: selectedCategory, data: products }];

  const CategoryButton = ({ title }) => {
    const isActive = selectedCategory === title;

    const content = (
      <View style={[styles.btn, isActive && styles.btnActive]}>
        <Text style={[styles.btnText, isActive && styles.btnTextActive]}>{title}</Text>
      </View>
    );

    if (Platform.OS === "android") {
      return (
        <TouchableNativeFeedback
          onPress={() => setSelectedCategory(title)}
          background={TouchableNativeFeedback.Ripple("#ccc", false)}
        >
          {content}
        </TouchableNativeFeedback>
      );
    }

    return (
      <TouchableOpacity onPress={() => setSelectedCategory(title)} activeOpacity={0.7}>
        {content}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerSection}>
        <CategoryButton title="Makanan" />
        <CategoryButton title="Minuman" />
      </View>

      {isLoading ? (
        <Loading />
      ) : (
        <View style={{ paddingBottom: 75 }}>
          <SectionList
            sections={sections}
            keyExtractor={(item, idx) => idx.toString()}
            renderItem={({ item }) => <ProductCard product={item} />}
            renderSectionHeader={({ section }) => (
              <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>{section.title}</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    paddingVertical: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    elevation: 5,
    zIndex: 10,
  },
  btn: {
    marginHorizontal: 15,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#ededed",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      android: { elevation: 2 },
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
    }),
  },
  btnActive: {
    backgroundColor: "#FF8C00",
  },
  btnText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  btnTextActive: {
    color: "#fff",
  },
});

```

## 🎯 Future Improvements
- ✅ Fetch data from an **API** instead of dummy data.
- ✅ Implement **Redux** for better state management.
- ✅ Add **search and sorting** functionality.

