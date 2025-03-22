import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from '../context/AuthContext';

import ProductList from '../screens/ProductList';
import LoginScreen from '../screens/login/LoginScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName;
                if (route.name === "Beranda") iconName = "home";
                else if (route.name === "Profile") iconName = "person";
                return <MaterialIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#FF8C00",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: {
                height: 50,                          
                paddingTop : 5,
            },
            tabBarLabelStyle: {
                fontSize: 9,
            },
        })}   
    >
      <Tab.Screen name="Beranda" component={ProductList}  options={{headerShown : false}} />
      <Tab.Screen name="Profile" component={ProfileScreen}  options={{headerShown : false}} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="MainTabs" component={MainTabs}/>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
