import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { INITIAL_TABLES } from '../constants';

export default function FloatingBar({ step, totalCart, cart, selectedTable, selectedPayment, selectedBank, onNext }) {
  const isBtnDisabled = (step === 1 && cart.length === 0) || 
                        (step === 2 && !selectedTable) || 
                        (step === 3 && (!selectedPayment || (selectedPayment === 'va' && !selectedBank)));

  const label = step === 1 ? 'Items' : step === 2 ? 'Table' : 'Payment';
  const value = step === 1 ? `Rp ${totalCart.toLocaleString("id-ID")}` : 
                step === 2 ? (selectedTable ? INITIAL_TABLES.find(t => t.id === selectedTable).name : 'Select Table') : 
                (selectedPayment || 'Method');

  return (
    <View style={styles.orderBarWrapper}>
      <View style={styles.orderBar}>
        <View style={styles.orderInfo}>
          <Text style={styles.statusLabel}>{label}</Text>
          <Text style={styles.orderTotal}>{value}</Text>
        </View>
        <TouchableOpacity 
          disabled={isBtnDisabled}
          onPress={onNext} 
          style={[styles.orderBtn, isBtnDisabled && {backgroundColor: '#ccc'}]}
        >
          <Text style={styles.orderBtnTxt}>{step === 3 ? 'PAY NOW' : 'NEXT →'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
