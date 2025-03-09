import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "#ccc",
      },
      image: {
        width: 130,
        height: 130,
        borderRadius: 8,
      },
      cardContent: {
        flex: 1,
        paddingHorizontal: 10,
      },
      productName: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: 10,
      },
      price: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#ff4800",
      },
      rate: {
        fontSize: 14,
        color: "#888",
        marginBottom: 7,
      },
      discountSec: {
        marginTop: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      discountText: {
        padding: 5,
        height: 23,
        backgroundColor: "#edcbbe",
        fontSize: 12,
        borderRadius: 7,
      },
})


export default styles