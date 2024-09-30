import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Products({navigation}) {

    const products = [
        {
            id: '1',
            name: 'Headset Zeus',
            price: 'R$ 170,00',
            imageUrl: 'https://cdn.awsli.com.br/600x450/563/563019/produto/2440947600c1e51c91b.jpg'
          },
          {
            id: '2',
            name: 'Mouse King Cobra',
            price: 'R$ 100,00',
            imageUrl: 'https://images.kabum.com.br/produtos/fotos/588535/kit-mouse-gamer-redragon-king-cobra-2-rgb-24000-dpi-branco-m711w-fps-mouse-gamer-redragon-cobra-10000dpi-7-botoes-preto-m711-v2_1717188113_gg.jpg'
          },
          {
            id: '3',
            name: 'Teclado Redragon',
            price: 'R$ 170,00',
            imageUrl: 'https://m.media-amazon.com/images/I/414Dxns39vL._AC_.jpg'
          },
          {
            id: '4',
            name: 'Iphone 15',
            price: 'R$ 5.500,00',
            imageUrl: 'https://i.em.com.br/rIFCexYTtGyTQIVSeYo9d9p75b0=/980x653/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/10/03/1570793/o-iphone-15-pro-e-o-iphone-15-pro-max-estarao-disponiveis-em-quatro-lindas-novas-cores-titanio-preto-titanio-branco-titanio-azul-e-titanio-natural_1_73412.jpeg'
          },
          {
            id: '5',
            name: 'Mousepad Redragon',
            price: 'R$ 120,00',
            imageUrl: 'https://a-static.mlcdn.com.br/450x450/mousepad-gamer-redragon-flick-xl-400x900x4mm-p032/inpower4/2448/c74d66067bf72cffb8ceefc2fafa3c9b.jpeg'
          },
          {
            id: '6',
            name: 'Kit Gamer',
            price: 'R$ 200,00',
            imageUrl: 'https://images.kabum.com.br/produtos/fotos/305084/kit-gamer-redragon-rgb-headset-surround-7-1-teclado-compacto-mouse-12400-dpi-preto-s125_1642794695_gg.jpg'
          },
          {
            id: '7',
            name: 'CPU Gamer',
            price: 'R$ 350,00',
            imageUrl: 'https://i.zst.com.br/thumbs/12/14/14/1968587727.jpg'
          },
          {
            id: '8',
            name: 'Notebook Asus',
            price: 'R$ 4.500,00',
            imageUrl: 'https://i.zst.com.br/thumbs/12/3c/18/-985998219.jpg'
          },
          {
            id: '9',
            name: 'Headset Zeus',
            price: 'R$ 170,00',
            imageUrl: 'https://cdn.awsli.com.br/600x450/563/563019/produto/2440947600c1e51c91b.jpg'
          },
          {
            id: '10',
            name: 'Mouse King Cobra',
            price: 'R$ 100,00',
            imageUrl: 'https://images.kabum.com.br/produtos/fotos/588535/kit-mouse-gamer-redragon-king-cobra-2-rgb-24000-dpi-branco-m711w-fps-mouse-gamer-redragon-cobra-10000dpi-7-botoes-preto-m711-v2_1717188113_gg.jpg'
          },
          {
            id: '11',
            name: 'Teclado Redragon',
            price: 'R$ 170,00',
            imageUrl: 'https://m.media-amazon.com/images/I/414Dxns39vL._AC_.jpg'
          },
          {
            id: '12',
            name: 'Iphone 15',
            price: 'R$ 5.500,00',
            imageUrl: 'https://i.em.com.br/rIFCexYTtGyTQIVSeYo9d9p75b0=/980x653/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/10/03/1570793/o-iphone-15-pro-e-o-iphone-15-pro-max-estarao-disponiveis-em-quatro-lindas-novas-cores-titanio-preto-titanio-branco-titanio-azul-e-titanio-natural_1_73412.jpeg'
          },
          {
            id: '13',
            name: 'Mousepad Redragon',
            price: 'R$ 120,00',
            imageUrl: 'https://a-static.mlcdn.com.br/450x450/mousepad-gamer-redragon-flick-xl-400x900x4mm-p032/inpower4/2448/c74d66067bf72cffb8ceefc2fafa3c9b.jpeg'
          },
          {
            id: '14',
            name: 'Kit Gamer',
            price: 'R$ 200,00',
            imageUrl: 'https://images.kabum.com.br/produtos/fotos/305084/kit-gamer-redragon-rgb-headset-surround-7-1-teclado-compacto-mouse-12400-dpi-preto-s125_1642794695_gg.jpg'
          },
          {
            id: '15',
            name: 'CPU Gamer',
            price: 'R$ 350,00',
            imageUrl: 'https://i.zst.com.br/thumbs/12/14/14/1968587727.jpg'
          },
          {
            id: '16',
            name: 'Notebook Asus',
            price: 'R$ 4.500,00',
            imageUrl: 'https://i.zst.com.br/thumbs/12/3c/18/-985998219.jpg'
          },
          
      ];

      const handlePress = ( item ) => {
        Alert.alert("Esgotou", `O produto que você escolheu não temos mais em estoque`);
      };

  // Função para renderizar cada item da lista
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={handlePress}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
        <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={styles.listContainer}
        />
  );
}

const styles = StyleSheet.create({
    listContainer: {
      padding: 10,
      paddingVertical: 100,
    },
    itemContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      margin: 5,
      backgroundColor: '#fff',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    image: {
      width: '100%',
      height: 100,
      borderRadius: 8,
    },
    textContainer: {
      alignItems: 'center',
      padding: 10,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    price: {
      fontSize: 14,
      color: '#888',
    },
  });