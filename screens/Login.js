import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config';

export default function Login({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const [loadingCreate, setLoadingCreate] = useState(false);

    // const onSubmit = async() => {
    //     await AsyncStorage.setItem('token', username)
    //     if (username === 'pedro' && password === 'pedro123') {
    //         console.log('Login aceito')
    //         navigation.navigate('Home')
    //     }else {
    //         console.log('Login rejeitado, tente novamente')
    //     }
    // }

    // const tokenlogin = async() => {
    //     const value = await AsyncStorage.getItem('token')
    //     if (value !== null) {
    //         navigation.navigate('Home')
    //         console.log('Voce esta conectado')
    //     }else {
    //         console.log('Voce não esta conectado')
    //     }
    // }

    // tokenlogin()

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleCreateAccount = () => {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Account created!')
        const user = userCredential.user;
        console.log(user)
        Alert.alert("usuario criado com sucesso!")
      })
      .catch(error => {
        console.log(error)
        Alert.alert(error.message)
      })
      setLoading(false)
    }

    const handleSignIn = () => {
      setLoadingCreate(true);
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Signed in!')
        const user = userCredential.user;
        console.log(user)
        navigation.navigate('Home');
      })
      .catch(error => {
        console.log(error)
        Alert.alert(error.message)
      })
      setLoadingCreate(false)
    }


  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Olá, Bem-vindo ao aplicativo da Personal Buy, para seguir e usar nossos serviços faça login em nossa plataforma</Text>
      <TextInput style={styles.input} onChangeText={(value) => setEmail(value)} placeholder="Email" />
      <TextInput style={styles.input} secureTextEntry onChangeText={(value) => setPassword(value)} placeholder="Password" />
      
      {loading ? (
        <TouchableOpacity style={styles.btn}>
          <ActivityIndicator size="large" color="#0000ff" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.btn} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      )}

      {loadingCreate ? (
          <ActivityIndicator size="large" color="#0000ff" />
        
      ) : (
        <TouchableOpacity style={styles.btnCreateAccount} onPress={handleCreateAccount}>
            <Text style={styles.buttonText}>Create account</Text>
      </TouchableOpacity>
      )}

      {/* <Text>username : {username}</Text>
      <Text>password : {password}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    color: '#000',
    textAlign: 'center',
    marginBottom: 25,
    fontSize: 18,
    width: 320,
    
  },
  input: {
    height: 40,
    width: 350,
    margin: 12,
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 25,
    borderColor: '#000',
    marginBottom: 20,
    color: '#000',
  },
  btn: {
    height: 40,
    width: 250,
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
    marginBottom: 20,
  },
  btnCreateAccount: {
    height: 40,
    width: 250,
    backgroundColor: '#DAA520',
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