import * as React from 'react';
import { View, Animated, FlatList, TouchableOpacity,Dimensions, TextInput, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  useEffect ,useRef } from 'react'; 
import { useFocusEffect } from '@react-navigation/native';
import servico1 from '../../assets/petshop.jpg';
import servico2 from '../../assets/jardinagem.png';
import servico3 from '../../assets/manicure.jpeg';
import servico4 from '../../assets/encanador.jpg';

const  Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
import { useState } from 'react';

import styles from '../../styles/initialScreenStyles';
import feedStyles from '../../styles/feedStyles'
import buscarStyles from '../../styles/buscarStyles'

const { height } = Dimensions.get('window');

//Na tela main do App, está sendo utilizado o Tab para os botões inferiores que irão direcionar o usuário para uma tela diferente ex: perfil, buscar serviço
//E também estpa presente o Drawer para a elaboração do menu lateral

const posts = [ //Utilizamos os posts para fazer a simulação de um feed semelhante ao do Instagram, que será implementado futuramente, possui o nome de um prestador de serviço, a imagem do serviço e a descrição
  { id: '1', user: 'Ana', image: servico1, description: 'Serviço de Petshop 🐶' },
  { id: '2', user: 'Carlos', image: servico2, description: 'Jardinagem em promoção 🌱' },
  { id: '3', user: 'Lucia', image: servico3, description: 'Manicure e pedicure 💅' },
  { id: '4', user: 'Roberto', image: servico4, description: 'Serviço de encanador 🚿' },
];

function HomeScreen() { //Tela inicial onde aparecerá o feed, os posts estão aparecendo em forma de cards
  const renderItem = ({ item }) => ( //Essa função é responsável por renderizar item por item em formato de card com seu respectivo nome e descrição do serviço
    <View style={feedStyles.card}>
      <Image source={item.image} style={feedStyles.image} />
      <Text style={feedStyles.user}>{item.user}</Text>
      <Text style={feedStyles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList  //Neste trecho foi utilizado o FlatList para exibir a lista de posts com rolagem, para simular o feeed
        data={posts} //Lista de posts que serão exibidos
        renderItem={renderItem} //O renderItem está sendo responsável por pegar cada elemento da lista e transforamndo no formato do layout feito acima
        keyExtractor={item => item.id} 
        showsVerticalScrollIndicator={false} //Esconde a barra de rolagem
      />
    </View>
  );
}
function PerfilScreen() { //Aqui aparerá os dados do usuário referente ao login, foi adicionada uma animação de fade 
  const fadeValues = Array.from({ length: 6 }, () => useRef(new Animated.Value(0)).current);
//A animação de fade acontece separadamente por cada item da tela de perfil, quando um campo esta prestes a finalizar a animação, o outro executará a animação
  useFocusEffect(
    React.useCallback(() => {
      fadeValues.forEach((fade) => fade.setValue(0));

      const animations = fadeValues.map((fade) =>
        Animated.timing(fade, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        })
      );

      Animated.stagger(260, animations).start();
      
    }, [])
  );
  return (
    <View style={styles.perfil_container}>
      <Animated.Image source={require('../../assets/avatar.png')}  
      style={[styles.logo, { opacity: fadeValues[0] }]} />
         
      <Animated.View style={{ opacity: fadeValues[1] }}>
         <Text style={styles.label}>Nome Completo</Text>
          <TextInput 
          style={styles.input}
           
          />
      </Animated.View>
        
      <Animated.View style={{ opacity: fadeValues[2] }}> 
        <Text style={styles.label}>CPF</Text>
          <TextInput 
          style={styles.input}         
          />
      </Animated.View>

      <Animated.View style={{ opacity: fadeValues[3] }}>
          <Text style={styles.label}>Nome de Usuário</Text>
          <TextInput 
          style={styles.input}         
          />
      </Animated.View>

      <Animated.View style={{ opacity: fadeValues[4] }}>
          <Text style={styles.label}>Email</Text>
          <TextInput 
          style={styles.input}         
          />
      </Animated.View>

      <Animated.View style={{ opacity: fadeValues[5] }}>
          <Text style={styles.label}>Senha</Text>
          <TextInput 
          style={styles.input}   
          secureTextEntry       
          />
      </Animated.View>
    </View>
  );
}


function SobreScreen() { //Esta parte será modificada futuramente para ser a tela de configurações do App, que ficará no menu lateral
  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ℹ️ Sobre o App</Text>
    </View>
  );
}
function BuscarScreen() {  //Esta á tela de busca de serviços
    const fadeAnim = useRef( new Animated.Value(0)).current;
                                  //Está sendo implementada uma animação para os cards dos seviços aparecerem em fade
  useEffect(() => {
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 700,
    useNativeDriver: true,
  }).start();
}, []);
const animatedStyle = {
  opacity: fadeAnim,
  transform: [
    {
      translateY: fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [30, 0],
      }),
    },
  ],
};

    const [busca, setBusca] = React.useState(''); //Função responsável pela busca de serviços

    const servicos = [// Esses são alguns dos serviços que estarão presentes na plataforma
    { id: '1', nome: 'Tatuador', imagem: require('../../assets/tatuador.jpg') },
    { id: '2', nome: 'Montador', imagem: require('../../assets/montador.jpg') },
    { id: '3', nome: 'Eletricista', imagem: require('../../assets/eletricista.png') },
    { id: '4', nome: 'Encanador', imagem: require('../../assets/encanador.jpg') },
    { id: '5', nome: 'Manicure', imagem: require('../../assets/manicure.jpeg') },
    { id: '6', nome: 'Barbeiro', imagem: require('../../assets/barbeiro.webp') },
    { id: '7', nome: 'Marceneiro', imagem: require('../../assets/marceneiro.webp') },
    { id: '8', nome: 'Pedreiro', imagem: require('../../assets/pedreiro.jpg') },
  ]
    const filtrados = servicos.filter(servico =>
        servico.nome.toLowerCase().includes(busca.toLowerCase())
    )

    const renderItem = ({ item }) => ( //Assim como o feed, também são em formato de card
      <TouchableOpacity style={buscarStyles.card}>
      <Image source={item.imagem} style={buscarStyles.image} />
      <Text style={buscarStyles.nome}>{item.nome}</Text>
    </TouchableOpacity>
    );

  return (
    
    <View style={buscarStyles.container}>
      <TextInput
        placeholder="🔍 Buscar serviço..."
        style={buscarStyles.searchInput}
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={filtrados}
        renderItem={renderItem}  //Transforma os itens em cards com tamanho menor e em 2 colunas
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={buscarStyles.row}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
}
function Tabs() {  //Este é o tabs, que contem os botões inferiores de início, buscar serviço e perfil, juntamente com uma opção de cada icone do botãp ficar azul quando está em foco
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Início') {
              iconName = focused ? 'home' : 'home-outline'; 
            } else if (route.name === 'Buscar Serviço') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Perfil') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#241ECC',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        
      })
      }
      >
      <Tab.Screen name="Início" component={HomeScreen} />
       <Tab.Screen name="Buscar Serviço" component={BuscarScreen}/>
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
          backgroundColor: '#241ECC', 
    },
          headerTintColor: '#fff',      
          headerTitleStyle: {
          fontWeight: 'bold',
    },
  }}
>
  <Drawer.Screen name="Ineed" component={Tabs} />
  <Drawer.Screen name="Sobre" component={SobreScreen} />
</Drawer.Navigator>

    
  );
}
