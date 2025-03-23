import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
} from "react-native";
import { Button } from "react-native-paper"; 
import useProductController from "../controller/ProductController";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState("Makanan");
  const { products, isLoading } = useProductController(selectedCategory);

  const sections = [{ title: selectedCategory, data: products }];

  const CategoryButton = ({ title }) => {
    const isActive = selectedCategory === title;

    return (
      <Button
        mode={isActive ? "contained" : "outlined"}
        onPress={() => setSelectedCategory(title)}
        style={styles.paperBtn}
        contentStyle={styles.paperBtnContent}
        labelStyle={[styles.btnText, isActive && styles.btnTextActive]}
        buttonColor={isActive ? "#FF8C00" : undefined}
        textColor={isActive ? "#fff" : "#333"}
      >
        {title}
      </Button>
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
  paperBtn: {
    marginHorizontal: 10,
    borderRadius: 20,
  },
  paperBtnContent: {
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  btnText: {
    fontSize: 14,
    fontWeight: "500",
  },
  btnTextActive: {
    color: "#fff",
  },
});
