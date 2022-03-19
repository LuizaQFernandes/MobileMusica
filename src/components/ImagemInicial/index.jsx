import React from 'react';
import { Image } from 'react-native';
import {MotiImage} from 'moti'
import { styles } from './styles';
import fotoMusica from '../../../assets/Music.png';
import { Botao } from '../Botao';

export function ImagemInicial() {
  return (

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
  );
}