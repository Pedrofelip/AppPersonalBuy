import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Logout from './Logout'
import Products from './Products'

export default function Home({navigation}) {

    const navigateToProducts = () => {
        navigation.navigate('Products')
    }

    function HomeScreen() {
        return (
          
            <View style={styles.container}>
            <StatusBar style="auto" />
            <Image style={styles.logo} source={require('../assets/logo.png')}/>
           <Text style={styles.text}>Olá, seja bem-vindo ao seu App de busca personalizada de compra a Personal Buy</Text>
           <Text style={styles.text}>Receba recomendações personalizadas com base em suas compras anteriores! Nosso aplicativo sugere produtos que combinam com seus interesses, tornando suas compras mais rápidas e precisas.</Text>
           <Text style={styles.text}>Veja nossos produtos clicando no botão a baixo</Text>
           <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Products')}>
                <Text style={styles.buttonText}>Ver Produtos</Text>
            </TouchableOpacity>
          </View>
        );
      }

    const Tab = createBottomTabNavigator();

  return (
      <Tab.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#8c3b96',
      }}>
      <Tab.Screen name="Produtos" component={Products} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Logout" component={Logout} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 250,
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