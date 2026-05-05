import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, RefreshControl, TextInput } from 'react-native';
import { styles } from '../styles';
import { INITIAL_TABLES } from '../constants';

export default function HomeScreen({ onOrderNow, setActiveTab, searchQuery, setSearchQuery }) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  const totalTables = INITIAL_TABLES.length;
  const occupiedTables = INITIAL_TABLES.filter(t => t.isOccupied).length;
  const availableTables = totalTables - occupiedTables;

  const categories = [
    { id: 'Noodle', name: 'Mie', icon: '🍜' },
    { id: 'Dimsum', name: 'Dimsum', icon: '🥟' },
    { id: 'Sushi', name: 'Sushi', icon: '🍣' },
    { id: 'Beverage', name: 'Minum', icon: '🥤' },
    { id: 'Dessert', name: 'Gelato', icon: '🍦' },
    { id: 'Snack', name: 'Snack', icon: '🍪' },
    { id: 'Coffee', name: 'Coffee', icon: '☕' },
    { id: 'Sides', name: 'Sides', icon: '🍟' },
  ];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#fff' }}
      contentContainerStyle={{ paddingHorizontal: 25, paddingBottom: 120 }}
      showsVerticalScrollIndicator={false}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#ef4444" />}
    >
      {/* Header */}
      <View style={{ marginTop: 10, marginBottom: 20 }}>
        <Text style={{ fontSize: 14, color: '#94a3b8', fontWeight: '600' }}>Selamat Datang di,</Text>
        <Text style={{ fontSize: 24, fontWeight: '900', color: '#111827' }}>Wizzmie 🔥</Text>
      </View>


      {/* Main Feature Banner */}
      <View>
        <TouchableOpacity style={styles.bannerBox}>
          <Image source={require('../../assets/poster.png')} style={styles.bannerImg} resizeMode="cover" />
        </TouchableOpacity>
      </View>

      {/* Table Status Section */}
      <View style={styles.statusRow}>
        <View style={styles.statusCard}>
          <Text style={styles.statusLabel}>Tersedia</Text>
          <Text style={[styles.statusVal, { color: '#10b981' }]}>{availableTables} Meja</Text>
        </View>
        <View style={styles.statusCard}>
          <Text style={styles.statusLabel}>Terisi</Text>
          <Text style={[styles.statusVal, { color: '#ef4444' }]}>{occupiedTables} Meja</Text>
        </View>
        <TouchableOpacity onPress={() => setActiveTab('Denah')} style={[styles.statusCard, { backgroundColor: '#111827', borderColor: '#111827' }]}>
          <Text style={[styles.statusLabel, { color: 'rgba(255,255,255,0.5)' }]}>Lihat</Text>
          <Text style={[styles.statusVal, { color: '#fff' }]}>Denah →</Text>
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Kategori Menu</Text>
        <TouchableOpacity onPress={onOrderNow}><Text style={styles.viewAll}>Lihat Semua</Text></TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.circleCatScroll}>
        {categories.map(cat => (
          <TouchableOpacity key={cat.id} onPress={() => onOrderNow()} style={styles.circleCatItem}>
            <View style={styles.circleBox}>
              <Text style={styles.circleEmoji}>{cat.icon}</Text>
            </View>
            <Text style={styles.circleLabel}>{cat.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Promo Sections */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Promo Paket Hebat ✨</Text>
        <TouchableOpacity onPress={onOrderNow}><Text style={styles.viewAll}>Ambil Promo</Text></TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.promoScroll}>
        <TouchableOpacity style={styles.promoCard} onPress={onOrderNow}>
          <Image source={require('../../assets/paket-hebat1.png')} style={styles.promoImg} resizeMode="cover" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.promoCard} onPress={onOrderNow}>
          <Image source={require('../../assets/paket-hebat3.png')} style={styles.promoImg} resizeMode="cover" />
        </TouchableOpacity>
      </ScrollView>

      <View style={{ marginBottom: 30 }}>
        <TouchableOpacity onPress={onOrderNow} style={{ backgroundColor: '#ef4444', paddingVertical: 20, borderRadius: 25, alignItems: 'center', shadowColor: '#ef4444', shadowOpacity: 0.3, shadowRadius: 15, elevation: 5 }}>
          <Text style={{ color: '#fff', fontWeight: '900', fontSize: 16, letterSpacing: 1 }}>MULAI PESAN SEKARANG →</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
