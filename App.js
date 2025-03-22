import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SplashScreen from './src/components/SplashScreen';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAppIsReady(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!appIsReady) return <SplashScreen />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#f5f5f5" style="dark" />
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
