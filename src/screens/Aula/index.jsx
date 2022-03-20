import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { Cabecalho } from '../../components/Cabecalho';
import { Rodape } from '../../components/Rodape';
import { ImagemInicial } from '../../components/ImagemInicial'
import { Feather } from '@expo/vector-icons';
import {Piano} from '../../components/Piano'
import { theme } from '../../styles/theme';

export function Aula(){
    const [comecar, setComecar] = useState(null);

    if(comecar !== null){

        return (
            <View style={styles.container}>
                <Cabecalho/>

                    <Piano/>

                    <TouchableOpacity 

                        style={styles.botao}   
                        onPress={() => setComecar(comecar === null)}> 

                        <Text style={styles.textoBotao}>  
                            Voltar
                        </Text>

                        <Feather
                            name="arrow-left"
                            size={24}
                            color={theme.colors.beige}
                        />
                
                    </TouchableOpacity>           

            </View>
        )
        
    }
    else{
        return(
            <View style={styles.container} >
                <Cabecalho/>

                    <ImagemInicial/>
   
                    <TouchableOpacity 

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
                
                    </TouchableOpacity> 
 
                <Rodape/>
            </View>
        )
    }

}