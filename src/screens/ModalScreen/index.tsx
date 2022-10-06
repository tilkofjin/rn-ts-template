import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { RootStackScreenProps } from 'src/types';

import { Text, View } from '../../components/Themed';

const ModalScreen:FC<RootStackScreenProps<'Modal'>> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' >
        <Text onPress={() => navigation.goBack()}>navigation goBack</Text>
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

export default ModalScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
