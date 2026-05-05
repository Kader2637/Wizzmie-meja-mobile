import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView, RefreshControl } from 'react-native';
import { styles } from '../styles';
import { INITIAL_TABLES } from '../constants';

export default function TableScreen({ selectedTable, setSelectedTable, onBack, cart = [], showAlert }) {
  const [activeFloor, setActiveFloor] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  const handleSelectTable = (tableId) => {
    if (cart.length === 0) {
      showAlert('Pesan Menu Dulu', 'Silakan pilih menu lezat kami terlebih dahulu sebelum memesan meja! 😊');
      return;
    }
    setSelectedTable(tableId);
  };

  const filteredTables = INITIAL_TABLES.filter(t => t.floor === activeFloor);

  return (
    <View style={{flex: 1}}>
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        style={{flex: 1}}
        contentContainerStyle={{paddingHorizontal: 25, paddingTop: 10, paddingBottom: 100}}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#ef4444" />}
      >
        <TouchableOpacity onPress={onBack} style={styles.backBtn}>
          <Text style={styles.backBtnTxt}>← Kembali</Text>
        </TouchableOpacity>
        
        <View style={{marginBottom: 20}}>
          <Text style={{fontSize: 14, color: '#94a3b8', fontWeight: '600', marginBottom: 5}}>Pilih Lantai & Nomor,</Text>
          <Text style={{fontSize: 32, fontWeight: '900', color: '#111827', letterSpacing: -1}}>Booking <Text style={{color: '#ef4444'}}>Meja</Text></Text>
        </View>

        <View style={styles.floorSelector}>
          {[1, 2].map(floor => (
            <TouchableOpacity 
              key={floor} 
              onPress={() => setActiveFloor(floor)} 
              style={[styles.floorBtn, activeFloor === floor && styles.floorBtnActive]}
            >
              <Text style={[styles.floorTxt, activeFloor === floor && styles.floorTxtActive]}>Lantai {floor}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.tableList}>
          {filteredTables.map((table) => {
            const isSelected = selectedTable === table.id;
            return (
              <TouchableOpacity 
                key={table.id} 
                disabled={table.isOccupied} 
                onPress={() => handleSelectTable(table.id)} 
                style={[
                  styles.tableItem, 
                  table.isOccupied && styles.tableOccupied, 
                  isSelected && styles.tableSelected
                ]}
              >
                <View>
                  <Text style={[styles.tableName, isSelected && {color: '#fff'}]}>{table.name}</Text>
                  <Text style={[styles.tableCap, isSelected && {color: '#fff', opacity: 0.8}]}>Kapasitas: {table.capacity} Orang</Text>
                </View>
                <Text style={[styles.tableStatus, table.isOccupied ? {color: '#ef4444'} : isSelected ? {color: '#fff'} : {color: '#10b981'}]}>
                  {table.isOccupied ? 'Terisi' : isSelected ? 'Dipilih ✓' : 'Tersedia'}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
