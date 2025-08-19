
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './BatLogoStyles';

export function BatLogo() {
  return (
   
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.title}>GERADOR DE SENHA</Text>
        <Image
          source={require('../../../assets/bat-logo.png')}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>
    </View>
  );
}