import React from 'react';
import {View, Text} from 'react-native';
import { styles } from './styles';
import { Cabecalho } from '../../components/Cabecalho';
import { Rodape } from '../../components/Rodape';
import { ImagemInicial } from '../../components/ImagemInicial'
import { Botao } from '../../components/Botao'

export function Aula(){
    return (
        <View style={styles.container}>
            <Cabecalho/>

                <ImagemInicial/>
                <Botao/>
                
            <Rodape/>
        </View>
    )
}