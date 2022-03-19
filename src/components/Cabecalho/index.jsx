import React from 'react';
import {View, Text} from 'react-native';
import {Feather} from '@expo/vector-icons'
import {styles} from './styles'
import {theme} from '../../styles/theme'

export function Cabecalho(){

    return(
        <View style={styles.container}>
            <Feather
                name="music"
                color={theme.colors.blue}
                size={32} />
            
            <View>
                <Text style={styles.titulo}>Fatec</Text>
                <Text style={styles.subtitulo}>Aula de Música</Text>
            </View>

        </View>

    )
}