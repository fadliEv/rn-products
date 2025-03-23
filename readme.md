# React Native | Material Design

![gif-image](/ui-app-v2.gif)

## 📌 Project Overview
This project is a **React Native** application that follows the **MVC (Model-View-Controller)** architecture to display a categorized product list. The app includes features such as **product filtering**, **discount calculations**, and a **loading indicator** to enhance user experience.  
It also incorporates several **Material Design principles** to improve the UI consistency, usability, and visual hierarchy.

---

## 🚀 Features  
- **MVC Architecture**: Separates business logic (Model), UI (View), and data processing (Controller).  
- **Product Filtering**: Users can switch between categories (Makanan & Minuman).  
- **Dynamic Discount Calculation**: Displays the discount amount and percentage correctly.  
- **Loading Simulation**: Uses `setTimeout` to simulate API loading behavior.  
- **Reusable Components**: Modular design with `ProductCard`, `Loading`, `LoginForm`, and more.  
- **Authentication Flow**: Includes login screen with validation and logout functionality using `SecureStore` and context.  
- **Bottom Tab Navigation**: Navigation structure follows standard tabbed layout (Home & Profile).  

---

## 🎨 Material Design Implementation  

This project incorporates key **Material Design principles** to create a clean, intuitive, and visually consistent interface:

- **Typography & Hierarchy**: Clear text hierarchy with distinct font sizes and weights.  
- **Color Theming**: Uses a consistent primary color (`#FF8C00`) for actions and branding.  
- **Elevation and Shadow**: Visual depth added to interactive elements like cards and buttons.  
- **Visual Feedback (Ripple Effect)**: Interactive elements provide ripple feedback using `TouchableNativeFeedback`.  
- **Card-style Layout**: Product items are displayed in card components with proper spacing and visual containment.  
- **Consistent Spacing & Padding**: Elements are spaced thoughtfully for a clean layout.  
- **Sectional Layout**: Screens like `ProfileScreen` are organized into structured sections (header, content, actions).  
- **Icons**: Clear iconography used for navigation and menu items via `Ionicons`.  
- **User Feedback Modals**: Confirmation modal used for logout follows Material dialog interaction.



## 📦 Installation & Setup
1. **Clone the repository**
   ```sh
   git clone https://github.com/your-repo/react-native-mvc-product-list.git
   cd react-native-mvc-product-list
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Run the app**
   ```sh
   npx expo start
   ```

## 🛠 Technologies Used
- **React Native** (Expo)
- **State Management**: React Hooks (`useState`, `useEffect`, `useContext`)
- **Component Library**: Material Design
- **Styling**: React Native `StyleSheet`


## 🎯 Future Improvements
- ✅ Fetch data from an **API** instead of dummy data.
- ✅ Implement **Redux** for better state management.
- ✅ Add **search and sorting** functionality.

