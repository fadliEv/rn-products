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
