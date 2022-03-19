import React from 'react';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, Text } from 'react-native';
import {MotiView} from 'moti'
import { styles } from './styles';
import { theme } from '../../styles/theme';

export function Botao() {
  return (
    <MotiView
      from={{
        translateY: 32,
        opacity: 0
      }}
      animate={{
        translateY: 0,
        opacity: 1
      }}
      transition={{
        type: 'timing',
        duration: 1000,
        delay: 1000
      }}


      >
    <TouchableOpacity
      style={styles.botao}
      activeOpacity={.8}
    >
      <Text style={styles.textoBotao}>
        Começar
      </Text>

      <Feather
        name="play-circle"
        size={24}
        color={theme.colors.beige}
      />
    </TouchableOpacity>
    </MotiView>
  );
}