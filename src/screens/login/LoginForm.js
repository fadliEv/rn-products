import React from "react";
import { View, Text, TouchableOpacity } from "react-native";


import styles from "./style/LoginForm.style";
import InputField from "../../shared/components/input/InputField";
import Button from "../../shared/components/button/Button";

const LoginForm = ({ formData, errors, secureTextEntry, onToggleSecure, onChange, onLogin, isFormValid }) => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.appTitle}>eBite</Text>
      <Text style={styles.subTitle}>E-Bite App</Text>

      <InputField 
        placeholder="username"         
        value={formData.username} 
        onChangeText={(text) => onChange("username", text)}  
        error={errors.username}
      />
      <InputField 
        placeholder="Kata Sandi" 
        secureTextEntry={secureTextEntry} 
        value={formData.password} 
        onChangeText={(text) => onChange("password", text)}  
        onToggleSecure={onToggleSecure} 
        error={errors.password} 
      />

      <Button 
        title="Masuk" 
        onPress={onLogin}         
        disabled={!isFormValid}
      />

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Belum mempunyai akun?</Text>
        <TouchableOpacity onPress={() => console.log("Test")}>
          <Text style={styles.registerLink}> Daftar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;
