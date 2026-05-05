import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

export default function BottomNav({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'Menu', icon: '🍽️', label: 'Pesan' },
    { id: 'Home', icon: '🏠', label: 'Home' },
    { id: 'Denah', icon: '🪑', label: 'Meja' },
  ];

  return (
    <View style={styles.bottomNavWrapper}>
      <View style={styles.floatingNav}>
        {tabs.map(tab => {
          const isActive = activeTab === tab.id;
          return (
            <TouchableOpacity 
              key={tab.id} 
              onPress={() => setActiveTab(tab.id)} 
              style={styles.navItem}
            >
              {isActive && <View style={styles.activeCircle}>
                <Text style={[styles.navIcon, styles.navIconActive]}>{tab.icon}</Text>
              </View>}
              
              {!isActive && <Text style={styles.navIcon}>{tab.icon}</Text>}
              
              <Text style={[
                styles.navLabel, 
                isActive && styles.navLabelActive,
                isActive && { marginTop: 35 } // Push label down for active item
              ]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
