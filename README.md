# WizzOrder 🍜🔥

**WizzOrder** is a premium mobile ordering and table booking application designed specifically for **Wizzmie**. This app provides a seamless dining experience by allowing customers to browse the menu, select their favorite tables, and complete payments directly from their mobile devices.

## ✨ Key Features

- **User Authentication**: Secure login system with session persistence using AsyncStorage.
- **Interactive Menu**: Explore a wide variety of Wizzmie specialties including Noodles, Dimsum, Sushi, Beverages, and more.
- **Smart Cart System**: Real-time cart management with instant total calculation.
- **Table Booking (Denah)**: Interactive floor plan selection (Lantai 1 & 2) to pick the perfect dining spot.
- **Multi-Method Payment**:
  - **QRIS**: Instant scan for e-wallet and m-banking payments.
  - **Virtual Account (VA)**: Automated payment via major banks.
  - **Cash**: Barcode generation for quick checkout at the cashier.
- **Dynamic Animations**: Smooth transitions and premium UI skeletons for a high-end feel.
- **Responsive Design**: Optimized for various mobile screen sizes.

## 🚀 Tech Stack

- **Framework**: [React Native](https://reactnative.dev/)
- **Platform**: [Expo SDK 54](https://expo.dev/)
- **Styling**: Vanilla CSS-in-JS (Premium Aesthetics)
- **State Management**: React Hooks (useState, useEffect)
- **Storage**: @react-native-async-storage/async-storage

## 🛠️ Getting Started

### Prerequisites
- Node.js installed on your machine
- [Expo Go](https://expo.dev/expo-go) app installed on your physical device (Android/iOS)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Kader2637/Wizzmie-meja-mobile.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Wizzmie-meja-mobile
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App
Start the Metro bundler:
```bash
npm start
```
*Tip: Use `npx expo start --tunnel` if you are on a restricted network or different Wi-Fi.*

## 📦 Building for Production

### Create Android APK (Preview)
To generate a standalone APK for testing:
```bash
eas build -p android --profile preview
```

### Create Production Build
```bash
eas build -p android --profile production
```

## 📂 Project Structure
- `App.js`: Main application entry and navigation logic.
- `src/screens/`: Contains all UI screens (Home, Menu, Table, Payment, Success).
- `src/components/`: Reusable UI components (Navbar, BottomNav, CustomAlert).
- `src/styles.js`: Global design system and premium styling.
- `assets/`: Static resources like logos, icons, and menu images.

---
Developed with ❤️ for the **Wizzmie** Dining Experience.