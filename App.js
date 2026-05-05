import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './src/styles';
import { MenuSkeleton } from './src/components/Skeleton';
import FloatingBar from './src/components/FloatingBar';
import BottomNav from './src/components/BottomNav';
import CustomAlert from './src/components/CustomAlert';
import HomeScreen from './src/screens/HomeScreen';
import MenuScreen from './src/screens/MenuScreen';
import TableScreen from './src/screens/TableScreen';
import PaymentSelectionScreen from './src/screens/PaymentSelectionScreen';
import PaymentDetailScreen from './src/screens/PaymentDetailScreen';
import SuccessScreen from './src/screens/SuccessScreen';
import LoginScreen from './src/screens/LoginScreen';
import { MENU_ITEMS } from './src/constants';

import logoImg from './assets/logo.png';
import userImg from './assets/user.png';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [step, setStep] = useState(1);
  const [cart, setCart] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [selectedBank, setSelectedBank] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900);
  const [alert, setAlert] = useState({ visible: false, title: '', message: '' });
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const showCustomAlert = (title, message) => {
    setAlert({ visible: true, title, message });
  };

  const handleLogin = async (userData) => {
    try {
      setUser(userData);
      setIsLoggedIn(true);
      await AsyncStorage.setItem('userSession', JSON.stringify(userData));
    } catch (e) {
      console.log('Error saving session', e);
    }
  };

  const handleLogout = async () => {
    try {
      setIsLoggedIn(false);
      setUser(null);
      setActiveTab('Home');
      setStep(1);
      setCart([]);
      await AsyncStorage.removeItem('userSession');
    } catch (e) {
      console.log('Error clearing session', e);
    }
  };

  useEffect(() => {
    const checkSession = async () => {
      try {
        const savedUser = await AsyncStorage.getItem('userSession');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
          setIsLoggedIn(true);
        }
      } catch (e) {
        console.log('Error checking session', e);
      }
    };
    checkSession();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  useEffect(() => {
    if (step === 4 && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [step, timeLeft]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (activeTab === 'Menu' && step > 2) {
      // Stay in payment flow
    } else if (activeTab === 'Menu') {
      setStep(1);
    } else if (activeTab === 'Denah') {
      setStep(2);
    } else if (activeTab === 'Home') {
      setStep(1);
    }
  }, [activeTab]);

  const changeStep = (newStep) => {
    setIsLoading(true);
    setTimeout(() => {
      setStep(newStep);
      setIsLoading(false);
    }, 600);
  };

  const addToCart = (id) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) return prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item));
      return [...prev, { id, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item)).filter((item) => item.qty > 0));
  };

  const totalCart = cart.reduce((acc, curr) => {
    const menuItem = MENU_ITEMS.find((m) => m.id === curr.id);
    return acc + (menuItem?.price || 0) * curr.qty;
  }, 0);

  // Show order bar ONLY if there's progress
  const showOrderBar = !isLoading && step < 4 && activeTab !== 'Home' && cart.length > 0;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {!isLoggedIn ? (
        <View style={{ flex: 1 }}>
          <LoginScreen onLogin={handleLogin} showAlert={showCustomAlert} />
        </View>
      ) : (
        <>
          {/* Minimalist Navbar */}
          <View style={styles.navbar}>
            <View style={styles.navBrand}>
              <Image source={logoImg} style={styles.brandLogo} />
              <Text style={styles.brandName}>WizzOrder</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
              {isLoggedIn && activeTab !== 'Home' && step < 5 && (
                <View style={styles.stepTrack}>
                  {[1, 2, 3, 4].map(s => (
                    <View key={s} style={[styles.stepIndicator, step >= s && styles.stepIndicatorActive]} />
                  ))}
                </View>
              )}
              {isLoggedIn && (
                <TouchableOpacity onPress={() => setIsProfileOpen(!isProfileOpen)}>
                  <Image source={userImg} style={styles.userAvatar} />
                </TouchableOpacity>
              )}
            </View>

            {isProfileOpen && (
              <View style={styles.profileDropdown}>
                <TouchableOpacity style={styles.dropdownItem} onPress={() => { setIsProfileOpen(false); showCustomAlert('Profile', 'Fitur profil akan segera hadir! 🔜'); }}>
                  <Text style={{fontSize: 18}}>👤</Text>
                  <Text style={styles.dropdownItemTxt}>Profile Saya</Text>
                </TouchableOpacity>
                <View style={styles.dropdownDivider} />
                <TouchableOpacity style={styles.dropdownItem} onPress={() => { setIsProfileOpen(false); handleLogout(); }}>
                  <Text style={{fontSize: 18}}>🚪</Text>
                  <Text style={[styles.dropdownItemTxt, {color: '#ef4444'}]}>Logout</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          <View style={{ flex: 1 }}>
            {isLoading ? (
              <View style={{ paddingHorizontal: 25, paddingTop: 10 }}>
                <MenuSkeleton styles={styles} />
              </View>
            ) : (
              <>
                {activeTab === 'Home' && (
                  <HomeScreen
                    onOrderNow={() => handleTabChange('Menu')}
                    setActiveTab={handleTabChange}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                  />
                )}

                {activeTab === 'Menu' && step === 1 && (
                  <MenuScreen
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    cart={cart}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                  />
                )}

                {(activeTab === 'Denah' || (activeTab === 'Menu' && step === 2)) && (
                  <TableScreen
                    selectedTable={selectedTable}
                    setSelectedTable={setSelectedTable}
                    cart={cart}
                    onBack={() => activeTab === 'Denah' ? setActiveTab('Menu') : changeStep(1)}
                    showAlert={showCustomAlert}
                  />
                )}

                {step === 3 && (
                  <PaymentSelectionScreen
                    selectedPayment={selectedPayment}
                    setSelectedPayment={setSelectedPayment}
                    selectedBank={selectedBank}
                    setSelectedBank={setSelectedBank}
                    onBack={() => changeStep(2)}
                  />
                )}

                {step === 4 && (
                  <PaymentDetailScreen
                    selectedPayment={selectedPayment}
                    selectedBank={selectedBank}
                    totalCart={totalCart}
                    timeLeft={timeLeft}
                    selectedTable={selectedTable}
                    onConfirm={() => changeStep(5)}
                    onBack={() => changeStep(3)}
                  />
                )}

                {step === 5 && (
                  <SuccessScreen
                    selectedTable={selectedTable}
                    cart={cart}
                    totalCart={totalCart}
                    onReset={() => { setStep(1); setCart([]); setSelectedTable(null); setSelectedPayment(null); setActiveTab('Home'); }}
                  />
                )}
              </>
            )}

            {/* Floating Order Bar (Pops up when needed) */}
            {!isLoading && step < 4 && activeTab !== 'Home' && cart.length > 0 && (
              <FloatingBar
                step={step}
                totalCart={totalCart}
                cart={cart}
                selectedTable={selectedTable}
                selectedPayment={selectedPayment}
                selectedBank={selectedBank}
                onNext={() => {
                  if (activeTab === 'Home') setActiveTab('Menu');
                  else changeStep(step + 1);
                }}
              />
            )}

            {/* Premium Floating Pill Navigation */}
            {step < 3 && (
              <BottomNav
                activeTab={activeTab}
                setActiveTab={handleTabChange}
              />
            )}
          </View>
        </>
      )}

      <CustomAlert
        visible={alert.visible}
        title={alert.title}
        message={alert.message}
        onClose={() => setAlert({ ...alert, visible: false })}
      />
    </SafeAreaView>
  );
}
