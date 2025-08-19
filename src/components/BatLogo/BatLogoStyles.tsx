// src/components/BatLogo/BatLogoStyles.tsx

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    borderColor: '#ffffff',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center', 
    paddingVertical: 40,     
    paddingHorizontal: 60,
    backgroundColor: '#4D4D4D',
    borderRadius: 12,
  },
  logo: {
    width: 250,   
    height: 200,
  },
  title: {
    color: '#E5BF3C', 
    fontSize: 22,     
    fontWeight: 'bold',
    marginBottom: 20, 
  },
});

export default styles;