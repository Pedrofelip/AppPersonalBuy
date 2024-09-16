import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState(null)

    const onSubmit = async() => {
        await AsyncStorage.setItem('token', username)
        if (username === 'pedro' && password === 'pedro123') {
            console.log('Login aceito')
            navigation.navigate('Home')
        }else {
            console.log('Login rejeitado, tente novamente')
        }
    }

    const tokenlogin = async() => {
        const value = await AsyncStorage.getItem('token')
        if (value !== null) {
            navigation.navigate('Home')
            console.log('Voce esta conectado')
        }else {
            console.log('Voce não esta conectado')
        }
    }

    tokenlogin()

  return (
    <View style={styles.container}>
        <Text style={styles.h1}>Olá, Bem-vindo ao aplicativo da Personal Buy, para seguir e usar nossos serviços faça login em nossa plataforma</Text>
      <TextInput style={styles.input} onChangeText={(value) => setUsername(value)} placeholder="Username" />
      <TextInput style={styles.input} secureTextEntry onChangeText={(value) => setPassword(value)} placeholder="Password" />
      <TouchableOpacity style={styles.btn} onPress={onSubmit}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      {/* <Text>username : {username}</Text>
      <Text>password : {password}</Text> */}
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
    color: '#fff',
    textAlign: 'center',
    marginBottom: 25,
    fontSize: 18,
    width: 320,
    
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 140,
    borderRadius: 25,
    borderColor: '#fff',
    marginBottom: 25,
    color: '#fff'
  },
  btn: {
    backgroundColor: '#8c3b96',
    paddingVertical: 12,
    paddingHorizontal: 50,
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