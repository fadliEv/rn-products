import React, { useEffect, useState } from "react";
import { View, Image, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard, Text, Alert } from "react-native";
import styles from "./style/LoginScreen.style";
import LoginForm from "./LoginForm";
import { validateLoginForm } from "./loginValidation"; 
import { useAuth } from "../../context/AuthContext";


const LoginScreen = () => {    
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const { login } = useAuth();

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    const error = validateLoginForm(field, value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  useEffect(() => {
    setIsFormValid(
      formData.username !== "" &&
      formData.password !== "" &&
      Object.values(errors).every((e) => e === "")
    );
  }, [formData, errors]);

  const onLoginPress = () => {
    if (!isFormValid) {
      Alert.alert("Login Gagal", "Silakan periksa kembali input Anda.");
      return;
    }

    // ✅ Cek kredensial login di sini
    if (formData.username === "pengguna" && formData.password === "masuk") {
      login(formData.username); // berhasil login
    } else {
      Alert.alert("Login Gagal", "Username atau password salah.");
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
           {/* Header Section with Orange Background */}
          <View style={styles.header}>
            <Text style={styles.headerText}>Login</Text>
          </View>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../../shared/assets/login.png")} />
          </View>
          <LoginForm
            formData={formData}
            errors={errors}
            secureTextEntry={secureTextEntry}
            onToggleSecure={() => setSecureTextEntry(!secureTextEntry)}
            onChange={handleChange}
            onLogin={onLoginPress}
            isFormValid={isFormValid}            
          />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
