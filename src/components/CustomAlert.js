import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { styles } from '../styles';

export default function CustomAlert({ visible, title, message, onClose }) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.alertOverlay}>
        <View style={styles.alertBox}>
          <View style={styles.alertIcon}>
            <Text style={{fontSize: 30}}>⚠️</Text>
          </View>
          <Text style={styles.alertTitle}>{title || 'Perhatian'}</Text>
          <Text style={styles.alertMsg}>{message}</Text>
          <TouchableOpacity onPress={onClose} style={styles.alertBtn}>
            <Text style={styles.alertBtnTxt}>MENGERTI</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
