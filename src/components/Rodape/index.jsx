import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles'

export function Rodape(){
    return(
        <View>
            <Text style={styles.tituloAula}>
                App Aula de Música
            </Text>
            <Text style={styles.detalheAula}>
                Laura e Luiza Quagliatto Fernandes
            </Text>
        </View>
    )
}