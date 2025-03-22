import { View, Text, TouchableOpacity, StyleSheet, SectionList } from "react-native";
import React, { useState } from "react";
import useProductController from "../controller/ProductController";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";


export default function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState("Makanan");
  const { products, isLoading } = useProductController(selectedCategory); // Menggunakan Controller dengan loading

  const sections = [{ title: selectedCategory, data: products }];

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerSection}>
        <TouchableOpacity onPress={() => setSelectedCategory("Makanan")} style={styles.btn}>
          <Text>Makanan</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory("Minuman")} style={styles.btn}>
          <Text>Minuman</Text>
        </TouchableOpacity>
      </View>

      {/* Tampilkan Loading jika isLoading true */}
      {isLoading ? (
        <Loading />
      ) : (
        <View style={{paddingBottom : 75}}>
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
    backgroundColor: "#ededed",
    borderRadius: 9,
    padding: 7,
  },
});
