import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import ProductList from './src/screens/ProductList';
import SplashScreen from './src/components/SplashScreen';
import { useEffect, useState } from 'react';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    // Simulasi loading sebelum menampilkan aplikasi utama
    const timer = setTimeout(() => {
      setAppIsReady(true);
    }, 2000); // Splash screen akan tampil selama 2 detik

    return () => clearTimeout(timer); // Cleanup timer saat komponen di-unmount
  }, []);

  if (!appIsReady) {
    return <SplashScreen />; // Tampilkan SplashScreen jika aplikasi belum siap
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ProductList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
