import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';

export const Skeleton = ({ style }) => {
  const opacity = useRef(new Animated.Value(0.3)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, { toValue: 1, duration: 800, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 0.3, duration: 800, useNativeDriver: true }),
      ])
    ).start();
  }, []);
  return <Animated.View style={[style, { opacity, backgroundColor: '#e2e8f0' }]} />;
};

export const MenuSkeleton = ({ styles }) => (
  <View>
    <Skeleton style={{ height: 40, width: '70%', borderRadius: 10, marginBottom: 15 }} />
    <View style={styles.menuGrid}>
      {[...Array(4)].map((_, i) => (
        <View key={i} style={styles.menuCard}>
          <Skeleton style={{ height: 120, borderRadius: 25, marginBottom: 15 }} />
          <Skeleton style={{ height: 20, width: '80%', borderRadius: 5 }} />
        </View>
      ))}
    </View>
  </View>
);
