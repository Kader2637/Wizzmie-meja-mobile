import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import { styles } from '../styles';

export default function PaymentSelectionScreen({ selectedPayment, setSelectedPayment, selectedBank, setSelectedBank, onBack }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  const paymentMethods = [
    { 
      category: 'Digital Payment', 
      options: [
        { id: 'qris', name: 'QRIS / E-Wallet', sub: 'OVO, GoPay, Dana, ShopeePay', icon: '📱' },
        { id: 'va', name: 'Virtual Account', sub: 'BCA, BNI, BRI, Mandiri', icon: '🏦' },
      ]
    },
    { 
      category: 'Manual Payment', 
      options: [
        { id: 'cash', name: 'Bayar di Kasir', sub: 'Tunai / Cash', icon: '💵' },
      ]
    }
  ];

  const banks = ['BCA', 'BNI', 'BRI', 'MANDIRI'];

  return (
    <ScrollView 
      showsVerticalScrollIndicator={false} 
      style={{flex: 1}}
      contentContainerStyle={{paddingHorizontal: 25, paddingVertical: 10, paddingBottom: 100}}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#ef4444" />}
    >
      <TouchableOpacity onPress={onBack} style={styles.backBtn}>
        <Text style={styles.backBtnTxt}>← Meja</Text>
      </TouchableOpacity>
      
      <View style={{marginBottom: 30}}>
        <Text style={{fontSize: 14, color: '#94a3b8', fontWeight: '600', marginBottom: 5}}>Langkah Terakhir,</Text>
        <Text style={{fontSize: 32, fontWeight: '900', color: '#111827', letterSpacing: -1}}>Pilih <Text style={{color: '#ef4444'}}>Pembayaran</Text></Text>
      </View>

      {paymentMethods.map((section, idx) => (
        <View key={idx} style={styles.paymentSection}>
          <Text style={styles.paymentCategoryTitle}>{section.category}</Text>
          {section.options.map((opt) => (
            <View key={opt.id}>
              <TouchableOpacity 
                onPress={() => {
                  setSelectedPayment(opt.id);
                  if (opt.id !== 'va') setSelectedBank(null);
                }} 
                style={[styles.payOptionCard, selectedPayment === opt.id && styles.payOptionActive]}
              >
                <View style={styles.payOptionIconBox}>
                  <Text style={{fontSize: 22}}>{opt.icon}</Text>
                </View>
                <View style={styles.payOptionInfo}>
                  <Text style={styles.payOptionName}>{opt.name}</Text>
                  <Text style={styles.payOptionSub}>{opt.sub}</Text>
                </View>
                <View style={{width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: selectedPayment === opt.id ? '#ef4444' : '#f1f5f9', justifyContent: 'center', alignItems: 'center'}}>
                  {selectedPayment === opt.id && <View style={{width: 10, height: 10, borderRadius: 5, backgroundColor: '#ef4444'}} />}
                </View>
              </TouchableOpacity>

              {opt.id === 'va' && selectedPayment === 'va' && (
                <View style={styles.bankGrid}>
                  {banks.map(bank => (
                    <TouchableOpacity 
                      key={bank} 
                      onPress={() => setSelectedBank(bank)} 
                      style={[styles.bankCard, selectedBank === bank && styles.bankCardActive]}
                    >
                      <Text style={[styles.bankName, selectedBank === bank && styles.bankNameActive]}>{bank}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      ))}
      <View style={{height: 50}} />
    </ScrollView>
  );
}
