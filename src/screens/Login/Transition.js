import React, { useEffect, useRef } from 'react';
import { View, Image, Animated, StyleSheet } from 'react-native';

export default function SplashTransition({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;     //Inicia a animação de fade invisível (0)
  const scaleAnim = useRef(new Animated.Value(1)).current;   //Começa a animação de scale no tamanho original(1)
//Tela de transição após o login ser bem sucedido, que redireciona para a tela main do app
  useEffect(() => { //Animação de fade e scale da logo do app executadas automaticamente após a tela aparecer
    
    Animated.parallel([ //O parallel aqui é muito útil, pois permite a execução das animações de fade e scale simultaneamente
      Animated.timing(fadeAnim, { 
        toValue: 1, //Segue de 0 para 1
        duration: 500,//tem duração de 0.5 segundos
        useNativeDriver: true,//Optamos por utilizar o nativeDriver porque possibilia a animação ser executada no prórprio react native, deixando ela otimizada e fluida, além de funcionar bem em dispositivos com hardwares inferiores.
      }),
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 2.0,      //Aqui a logo expande para um tamanho de 2x o tamanho original
          duration: 700, //duração de 0.7 segundos
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,        //A logo retorna ao tamanho original
          duration: 700,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {

      setTimeout(() => {
        navigation.replace('MainApp'); //A ideia da animação é expandir a logo e quando ela retornar ao tamanho original, aconteça o redirecionamento para a tela main, será aprimorada futuramente
      }, 0);
    });
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      <Image
        source={require('../../assets/ineed.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#241ECC', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});
