import React from "react";
import { View, ActivityIndicator, Text, StyleSheet } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ff4800" />
      <Text style={styles.text}>Loading data...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: "#555",
  },
});
