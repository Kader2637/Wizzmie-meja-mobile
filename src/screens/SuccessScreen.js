import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, RefreshControl, Image } from 'react-native';
import { styles } from '../styles';
import { INITIAL_TABLES, MENU_ITEMS } from '../constants';

export default function SuccessScreen({ selectedTable, cart, totalCart, onReset }) {
  const [refreshing, setRefreshing] = useState(false);
  const tableName = INITIAL_TABLES.find(t => t.id === selectedTable)?.name || 'Meja';
  const transactionId = "WIZ-" + Math.random().toString(36).substr(2, 9).toUpperCase();
  const date = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  return (
    <ScrollView 
      showsVerticalScrollIndicator={false} 
      contentContainerStyle={[styles.successScreen, {paddingHorizontal: 25}]}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#ef4444" />}
    >
      <View style={[styles.checkCircle, {backgroundColor: '#10b981'}]}>
        <Text style={{fontSize: 30, color: '#fff'}}>✓</Text>
      </View>
      <Text style={styles.successTitle}>Pesanan Berhasil!</Text>
      <Text style={styles.successSub}>Silakan duduk manis, kami akan mengantarkan pesanan Anda.</Text>

      <View style={[styles.receiptCard, {padding: 0, overflow: 'hidden'}]}>
        <View style={{padding: 25}}>
          <View style={styles.receiptHeader}>
            <Text style={[styles.receiptLogo, {color: '#ef4444'}]}>WIZZMIE</Text>
            <Text style={{fontSize: 10, color: '#94a3b8', fontWeight: '900', letterSpacing: 2, marginTop: 5}}>OFFICIAL RECEIPT</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
            <View>
              <Text style={{fontSize: 10, color: '#94a3b8', fontWeight: '900'}}>TANGGAL</Text>
              <Text style={{fontSize: 12, fontWeight: '700', color: '#111827'}}>{date}</Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={{fontSize: 10, color: '#94a3b8', fontWeight: '900'}}>NOMOR MEJA</Text>
              <Text style={{fontSize: 12, fontWeight: '700', color: '#ef4444'}}>{tableName}</Text>
            </View>
          </View>

          <View style={{borderBottomWidth: 1, borderBottomColor: '#f1f5f9', borderStyle: 'dashed', marginBottom: 20}} />

          <View style={{marginBottom: 10}}>
            {cart.map((item, idx) => {
              const menu = MENU_ITEMS.find(m => m.id === item.id);
              return (
                <View key={idx} style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12}}>
                  <View style={{flex: 1}}>
                    <Text style={{fontSize: 14, fontWeight: '700', color: '#111827'}}>{menu?.name}</Text>
                    <Text style={{fontSize: 12, color: '#94a3b8'}}>{item.qty} x Rp {menu?.price.toLocaleString("id-ID")}</Text>
                  </View>
                  <Text style={{fontSize: 14, fontWeight: '700', color: '#111827'}}>Rp {(menu?.price * item.qty).toLocaleString("id-ID")}</Text>
                </View>
              );
            })}
          </View>

          <View style={{borderBottomWidth: 1, borderBottomColor: '#f1f5f9', borderStyle: 'dashed', marginVertical: 15}} />

          <View style={styles.receiptTotalRow}>
            <Text style={{fontSize: 16, fontWeight: '700', color: '#111827'}}>Total Pembayaran</Text>
            <Text style={{fontSize: 20, fontWeight: '900', color: '#ef4444'}}>Rp {totalCart.toLocaleString("id-ID")}</Text>
          </View>

          <View style={{alignItems: 'center', marginTop: 30, backgroundColor: '#f8fafc', padding: 15, borderRadius: 15}}>
            <Text style={{fontSize: 10, color: '#94a3b8', fontWeight: '900', marginBottom: 5}}>TRANSACTION ID</Text>
            <Text style={{fontSize: 14, fontWeight: '800', color: '#111827', letterSpacing: 1}}>{transactionId}</Text>
          </View>
        </View>
        
        {/* Decorative Bottom */}
        <View style={{height: 10, backgroundColor: '#f1f5f9', flexDirection: 'row'}}>
          {[...Array(20)].map((_, i) => (
            <View key={i} style={{width: 20, height: 20, borderRadius: 10, backgroundColor: '#fff', marginTop: -10, marginRight: -5}} />
          ))}
        </View>
      </View>

      <View style={{flexDirection: 'row', gap: 10, marginTop: 30, width: '100%'}}>
        <TouchableOpacity style={{flex: 1, backgroundColor: '#f8fafc', paddingVertical: 18, borderRadius: 20, alignItems: 'center', borderWidth: 1, borderColor: '#f1f5f9'}}>
          <Text style={{fontWeight: '900', color: '#64748b', fontSize: 13}}>UNDUH STRUK</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onReset} style={{flex: 1.5, backgroundColor: '#111827', paddingVertical: 18, borderRadius: 20, alignItems: 'center'}}>
          <Text style={{fontWeight: '900', color: '#fff', fontSize: 13}}>KEMBALI KE HOME</Text>
        </TouchableOpacity>
      </View>
      <View style={{height: 50}} />
    </ScrollView>
  );
}
