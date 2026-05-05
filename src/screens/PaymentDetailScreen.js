import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, RefreshControl, Modal } from 'react-native';
import { styles } from '../styles';
import { INITIAL_TABLES } from '../constants';

export default function PaymentDetailScreen({ selectedPayment, selectedBank, totalCart, timeLeft, onConfirm, onBack, selectedTable }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [isZoomed, setIsZoomed] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <ScrollView 
      showsVerticalScrollIndicator={false}
      style={{flex: 1}}
      contentContainerStyle={{paddingHorizontal: 25, paddingVertical: 10, paddingBottom: 100}}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#ef4444" />}
    >
      <View style={styles.paymentDetail}>
        <Text style={styles.timerTitle}>Selesaikan dalam</Text>
        <Text style={styles.timerVal}>{formatTime(timeLeft)}</Text>
        
        <View style={styles.detailCard}>
          {selectedPayment === 'qris' && (
            <View style={{alignItems: 'center'}}>
              <Text style={styles.qrInstruction}>Scan QRIS melalui aplikasi e-wallet atau m-banking Anda</Text>
              <View style={styles.qrisFrame}>
                <Image source={require('../../assets/qris.png')} style={styles.qrisImg} resizeMode="contain" />
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.totalLabel}>Total Bayar</Text>
                <Text style={styles.totalVal}>Rp {totalCart.toLocaleString("id-ID")}</Text>
              </View>
            </View>
          )}
          {selectedPayment === 'va' && (
            <View>
              <Text style={styles.qrInstruction}>Transfer ke nomor Virtual Account berikut:</Text>
              <Text style={{fontSize: 14, fontWeight: '900', color: '#111827', marginBottom: 10}}>VA {selectedBank}</Text>
              <View style={{backgroundColor: '#f8fafc', padding: 20, borderRadius: 20, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: '900', color: '#ef4444'}}>8832 9901 0233 112</Text>
                <TouchableOpacity><Text style={{fontSize: 12, fontWeight: '900', color: '#111827'}}>SALIN</Text></TouchableOpacity>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.totalLabel}>Total Bayar</Text>
                <Text style={styles.totalVal}>Rp {totalCart.toLocaleString("id-ID")}</Text>
              </View>
            </View>
          )}
          {selectedPayment === 'cash' && (
          <View style={{alignItems: 'center'}}>
            <View style={styles.tableBadge}>
              <Text style={styles.tableBadgeTxt}>NOMOR MEJA: {INITIAL_TABLES.find(t => t.id === selectedTable)?.name || '?'}</Text>
            </View>
            <Text style={styles.qrInstruction}>Tunjukkan barcode ini ke kasir untuk melakukan pembayaran</Text>
            
            <TouchableOpacity onPress={() => setIsZoomed(true)} style={styles.barcodeContainer}>
               <Image source={require('../../assets/barcode-placeholder.png')} style={styles.barcodeImg} resizeMode="contain" />
            </TouchableOpacity>

            <View style={{alignItems: 'center'}}>
              <Text style={styles.totalLabel}>Total Bayar</Text>
              <Text style={styles.totalVal}>Rp {totalCart.toLocaleString("id-ID")}</Text>
            </View>
          </View>
        )}
        </View>
        <TouchableOpacity onPress={onConfirm} style={styles.confirmBtn}><Text style={styles.confirmBtnTxt}>SAYA SUDAH BAYAR</Text></TouchableOpacity>
        <TouchableOpacity onPress={onBack} style={{marginTop: 25}}><Text style={{color: '#94a3b8', fontWeight: '900', fontSize: 11, letterSpacing: 1}}>← GANTI METODE</Text></TouchableOpacity>
      </View>

      <Modal visible={isZoomed} transparent animationType="fade">
        <View style={styles.zoomOverlay}>
          <View style={styles.zoomBox}>
            <Text style={{fontSize: 10, color: '#94a3b8', fontWeight: '900', letterSpacing: 2, marginBottom: 20}}>SCAN OLEH KASIR</Text>
            <Image source={require('../../assets/barcode-placeholder.png')} style={styles.zoomedBarcode} resizeMode="contain" />
            <TouchableOpacity onPress={() => setIsZoomed(false)} style={styles.closeZoom}>
              <Text style={styles.closeZoomTxt}>TUTUP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
