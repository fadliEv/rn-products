import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#FF8C00",
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  label: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  disabled: {
    opacity: 0.5,
  },
});

export default styles;
