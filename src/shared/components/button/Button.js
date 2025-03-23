import React from "react";
import { Button as PaperButton } from "react-native-paper"; // ✅ import dari paper
import styles from "./Button.style";

const Button = ({ title, onPress, disabled, loading }) => {
  return (
    <PaperButton
      mode="contained"
      onPress={onPress}
      disabled={disabled}
      loading={loading}
      contentStyle={styles.content}
      style={[styles.button, disabled && styles.disabled]}
      labelStyle={styles.label}
      buttonColor="#FF8C00"
    >
      {title}
    </PaperButton>
  );
};

export default Button;
