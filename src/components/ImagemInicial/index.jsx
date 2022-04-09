import * as React from 'react';
import {MotiImage} from 'moti'
import {View} from 'react-native';
import { styles } from './styles';
import fotoMusica from '../../../assets/Music.png';

export function ImagemInicial() {
  return (

    <View style={styles.container}>
      <MotiImage
        style={styles.musica}
        source={fotoMusica}
        resizeMode="contain"
        from={{
          opacity: 0,
          translateX: 200
        }}
        animate={{
          opacity: 1,
          translateX: 4
        }}
        transition={{
          type: 'spring',
          
        }}
      />
    </View>

  )
}