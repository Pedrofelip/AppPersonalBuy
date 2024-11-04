import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Logout({navigation}) {

    const logout = async() => {
        await AsyncStorage.removeItem('token')
        navigation.navigate('Login')
    }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.h1}>LOGOUT</Text>
     <Text style={styles.text}>Neste momento voce está conectado em nossa plataforma, ficamos muito feliz em ter voce aqui conosco!</Text>
     <Text style={styles.text}>Caso queria se desconectar aperte o botão a baixo</Text>
     <TouchableOpacity style={styles.btn} onPress={logout}>
        <Text style={styles.buttonText}>Desconectar</Text>
     </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 18,
    color: '#fff',
  },
  btn: {
    backgroundColor: '#8c3b96',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});