import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles'

export function Rodape(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.tituloAula}>
                    App Aula de Música
                </Text>
                <Text style={styles.detalheAula}>
                    Desenvolvido para a Disciplina de Tópicos Especiais em Informática
                </Text>
            </View>
            <Text href={"https://storyset.com/music"} style={styles.referenciaAula}>
                Music illustrations by Storyset
            </Text>
        </View>
    )
}