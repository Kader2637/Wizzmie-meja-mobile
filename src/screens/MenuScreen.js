import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, RefreshControl } from 'react-native';
import { styles } from '../styles';
import { MENU_ITEMS } from '../constants';

export default function MenuScreen({ 
  activeCategory, 
  setActiveCategory, 
  searchQuery, 
  setSearchQuery, 
  cart, 
  addToCart, 
  removeFromCart 
}) {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  const categories = ["All", "Noodle", "Dimsum", "Beverage"];
  
  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <ScrollView 
      style={{flex: 1}} 
      contentContainerStyle={{paddingHorizontal: 25, paddingTop: 10, paddingBottom: 100}} 
      showsVerticalScrollIndicator={false}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#ef4444" />}
    >
      <View style={{marginBottom: 20}}>
        <Text style={{fontSize: 14, color: '#94a3b8', fontWeight: '600', marginBottom: 5}}>Mau Makan Apa,</Text>
        <Text style={{fontSize: 32, fontWeight: '900', color: '#111827', letterSpacing: -1}}>Hari Ini? <Text style={{color: '#ef4444'}}>🔥</Text></Text>
      </View>

      <View style={{marginBottom: 25}}>
        <View style={styles.searchBar}>
          <Text style={{fontSize: 18}}>🔍</Text>
          <TextInput 
            style={[styles.searchText, {flex: 1, height: 40}]}
            placeholder="Cari menu favoritmu..."
            placeholderTextColor="#94a3b8"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery("")}>
              <Text style={{fontSize: 18}}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.catScroll}>
        {categories.map(cat => {
          const isActive = activeCategory === cat;
          return (
            <TouchableOpacity 
              key={cat} 
              onPress={() => setActiveCategory(cat)} 
              style={[styles.catBtn, isActive && styles.catBtnActive]}
            >
              <Text style={[styles.catTxt, isActive && styles.catTxtActive]}>{cat}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={styles.menuGrid}>
        {filteredItems.map((item) => {
          const cartItem = cart.find((c) => c.id === item.id);
          return (
            <View key={item.id} style={[styles.menuCard, cartItem && styles.menuCardSelected]}>
              <View style={styles.itemImgBox}>
                <Text style={styles.itemEmoji}>{item.icon}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.itemName} numberOfLines={1}>{item.name}</Text>
                <Text style={styles.itemPrice}>Rp {item.price.toLocaleString("id-ID")}</Text>
                
                {cartItem ? (
                  <View style={styles.counter}>
                    <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.countBtn}>
                      <Text style={styles.countBtnTxt}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.countVal}>{cartItem.qty}</Text>
                    <TouchableOpacity onPress={() => addToCart(item.id)} style={[styles.countBtn, {backgroundColor: '#ef4444'}]}>
                      <Text style={[styles.countBtnTxt, {color: '#fff'}]}>+</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <TouchableOpacity onPress={() => addToCart(item.id)} style={styles.addBtn}>
                    <Text style={styles.addBtnTxt}>TAMBAH +</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
