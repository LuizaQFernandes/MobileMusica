import React from 'react';
import {View, Text} from 'react-native';
import { styles } from './styles';
import { Cabecalho } from '../../components/Cabecalho';
import { Rodape } from '../../components/Rodape';
import { Pauta } from '../../components/Pauta'


export function Aula(){
    return (
        <View style={styles.container}>
            <Cabecalho/>

                <Pauta/>
            <Rodape/>
        </View>
    )
}