import React, {useState, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import { styles } from './styles';
import { Cabecalho } from '../../components/Cabecalho';
import { Rodape } from '../../components/Rodape';
import { ImagemInicial } from '../../components/ImagemInicial'
import { Feather } from '@expo/vector-icons';
import {Piano} from '../../components/Piano'
import { theme } from '../../styles/theme';

export function Aula(){
    const [comecar, setComecar] = useState(null);

    if(comecar === null){
        return (
            <View style={styles.container} >
                <Cabecalho/>

                    <ImagemInicial/>
   
                    <Pressable 

                        style={styles.botao}   
                        onPress={() => setComecar(comecar === true)}> 

                        <Text style={styles.textoBotao}>  
                            Começar
                        </Text>

                        <Feather
                            name="play-circle"
                            size={24}
                            color={theme.colors.beige}
                        />
                
                    </Pressable> 
 
                <Rodape/>
            </View>
        )
    }
    else{
        return (
            <View style={styles.container}>
                <Cabecalho/>

                    <Piano/>
                    
                <Rodape/>
            </View>
        )
    }

}