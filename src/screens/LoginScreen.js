import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { styles } from '../styles';

export default function LoginScreen({ onLogin, showAlert }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = () => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = password.trim();

    if (cleanEmail === 'wizzmie@user.com' && cleanPass === 'kelompok1') {
      onLogin({ email: 'wizzmie@user.com', name: 'Wizzmie User' });
    } else {
      showAlert('Login Gagal', 'Email atau password salah. Silakan coba lagi! 🧐');
    }
  };

  const handleGoogleLogin = () => {
    onLogin({ email: 'google@user.com', name: 'Google User' });
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.loginContainer}
    >
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
        <View style={styles.loginHeader}>
          <Image source={require('../../assets/logo.png')} style={styles.loginLogo} />
          <Text style={styles.loginTitle}>Wizz<Text style={{color: '#ef4444'}}>Order</Text></Text>
          <Text style={styles.loginSub}>Pesan makanan lezat dengan satu klik.</Text>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Email Address</Text>
          <TextInput 
            style={styles.inputField}
            placeholder="wizzmie@user.com"
            placeholderTextColor="#94a3b8"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={{position: 'relative'}}>
            <TextInput 
              style={styles.inputField}
              placeholder="••••••••"
              placeholderTextColor="#94a3b8"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity 
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              style={{position: 'absolute', right: 20, top: 18, opacity: isPasswordVisible ? 1 : 0.3}}
            >
              <Text style={{fontSize: 20}}>👁️</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>
          <Text style={styles.loginBtnTxt}>MASUK SEKARANG</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 30}}>
          <View style={{flex: 1, height: 1, backgroundColor: '#f1f5f9'}} />
          <Text style={{marginHorizontal: 15, color: '#94a3b8', fontWeight: '700', fontSize: 12}}>ATAU</Text>
          <View style={{flex: 1, height: 1, backgroundColor: '#f1f5f9'}} />
        </View>

        <TouchableOpacity onPress={handleGoogleLogin} style={styles.googleBtn}>
          <Image 
            source={require('../../assets/google.png')} 
            style={{ width: 24, height: 24, marginRight: 12 }} 
          />
          <Text style={styles.googleBtnTxt}>Lanjut dengan Google</Text>
        </TouchableOpacity>

        <View style={{alignItems: 'center', marginTop: 40}}>
          <Text style={{color: '#94a3b8', fontSize: 13}}>Belum punya akun? <Text style={{color: '#ef4444', fontWeight: '900'}}>Daftar</Text></Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
