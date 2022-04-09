import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { Audio } from 'expo-av';

export function Piano(){

    {/*Constante Som*/}
    const [sound, setSound] = useState();

    {/*Funções Assíncronas que tocam o som de cada nota*/}

    {/*Dó*/}
    async function tocarNotaC() {
        const { sound } = await Audio.Sound.createAsync
        (
            require('../../../audio/audio_C.mp3')
        );
        setSound(sound);

        await sound.playAsync(); 
    }

    {/*Dó#*/}
    async function tocarNotaCs() {
        const { sound } = await Audio.Sound.createAsync
        (
            require('../../../audio/audio_Cs.mp3')
        );
        setSound(sound);

        await sound.playAsync(); 
    }

    {/*Ré*/}
    async function tocarNotaD() {
        const { sound } = await Audio.Sound.createAsync
        (
            require('../../../audio/audio_D.mp3')
        );
        setSound(sound);

        await sound.playAsync(); 
    }

    {/*Ré#*/}
    async function tocarNotaDs() {
        const { sound } = await Audio.Sound.createAsync
        (
            require('../../../audio/audio_Ds.mp3')
        );
        setSound(sound);

        await sound.playAsync(); 
    }

    {/*Mi*/}
    async function tocarNotaE() {
        const { sound } = await Audio.Sound.createAsync
        (
            require('../../../audio/audio_E.mp3')
        );
        setSound(sound);

        await sound.playAsync(); 
    }
    
    {/*Fá*/}
    async function tocarNotaF() {
        const { sound } = await Audio.Sound.createAsync
        (
            require('../../../audio/audio_F.mp3')
        );
        setSound(sound);

        await sound.playAsync(); 
    }

    {/*Fá#*/}
    async function tocarNotaFs() {
        const { sound } = await Audio.Sound.createAsync
        (
            require('../../../audio/audio_Fs.mp3')
        );
        setSound(sound);

        await sound.playAsync(); 
    }

    {/*Sol*/}
    async function tocarNotaG() {
        const { sound } = await Audio.Sound.createAsync
        (
            require('../../../audio/audio_G.mp3')
        );
        setSound(sound);

        await sound.playAsync(); 
    }

    {/*Sol#*/}
    async function tocarNotaGs() {
        const { sound } = await Audio.Sound.createAsync
        (
            require('../../../audio/audio_Gs.mp3')
        );
        setSound(sound);

        await sound.playAsync(); 
    }

    {/*Lá*/}
    async function tocarNotaA() {
        const { sound } = await Audio.Sound.createAsync
        (
            require('../../../audio/audio_A.mp3')
        );
        setSound(sound);

        await sound.playAsync(); 
    }

    {/*Lá#*/}
    async function tocarNotaAs() {
        const { sound } = await Audio.Sound.createAsync
        (
            require('../../../audio/audio_As.mp3')
        );
        setSound(sound);

        await sound.playAsync(); 
    }

    {/*Si*/}
    async function tocarNotaB() {
        const { sound } = await Audio.Sound.createAsync
        (
            require('../../../audio/audio_B.mp3')
        );
        setSound(sound);

        await sound.playAsync(); 
    }

    {/*useEffect que descarrega o som depois de usá-lo para evitar vazamentos de memória*/}
    React.useEffect(() => {
        return sound
          ? () => {
              sound.unloadAsync(); }
          : undefined;
      }, [sound]);

    return (

        <View style={styles.container}>
          <View style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>

             {/*Parte Superior */}
            <View style={{ flexDirection : "row", alignItems: "center", justifyContent: "center" }}>
                {/*Superior não funcional */}
              <View
                style={{ backgroundColor: "white", height: 100, width: 32, borderLeftWidth: 1, borderTopWidth: 1,}} >
              </View>

                {/*Superior Dó# */}
              <TouchableOpacity onPress={tocarNotaCs}
                style={{ backgroundColor: "black", height: 100, width: 32, borderTopWidth: 1, borderLeftWidth: 1,}} >
                <Text style={styles.notasParteSuperior}>Dó#</Text>
              </TouchableOpacity>

                {/*Superior não funcional */}
              <View
                style={{ backgroundColor: "white", height: 100, width: 16, borderTopWidth: 1, }} >
              </View >

                {/*Superior Ré# */}
              <TouchableOpacity onPress={tocarNotaDs}
                style={{ backgroundColor: "black", height: 100, width: 32, borderTopWidth: 1, borderLeftWidth: 1,}} >
                <Text style={styles.notasParteSuperior}>Ré#</Text>
              </TouchableOpacity >

                {/*Superior não funcional */}
              <View
                style={{ backgroundColor: "white", height: 100, width: 32, borderTopWidth: 1, }} >
              </View >

                {/*Superior não funcional */}
              <View
                style={{ backgroundColor: "white", height: 100, width: 32, borderTopWidth: 1, borderLeftWidth: 1, }} >
              </View >

                {/*Superior Fá# */}
              <TouchableOpacity onPress={tocarNotaFs}
                style={{ backgroundColor: "black", height: 100, width: 32, borderTopWidth: 1, }} >
                <Text style={styles.notasParteSuperior}>Fá#</Text>
              </TouchableOpacity >

              {/*Superior não funcional */}
              <View
                style={{ backgroundColor: "white", height: 100, width: 16, borderTopWidth: 1, }} >
              </View >

                {/*Superior Sol# */}
              <TouchableOpacity onPress={tocarNotaGs}
                style={{ backgroundColor: "black", height: 100, width: 32, borderTopWidth: 1, }} >
                <Text style={styles.notasParteSuperior}>Sol#</Text>
              </TouchableOpacity >

                {/*Superior não funcional */}
              <View
                style={{ backgroundColor: "white", height: 100, width: 16, borderTopWidth: 1, }} >
              </View >

                {/*Superior Lá# */}
              <TouchableOpacity onPress={tocarNotaAs}
                style={{ backgroundColor: "black", height: 100, width: 32, borderTopWidth: 1, }} >
                <Text style={styles.notasParteSuperior}>Lá#</Text>
              </TouchableOpacity >

                {/*Superior não funcional */}
              <View
                style={{ backgroundColor: "white", height: 100, width: 32, borderRightWidth: 1, borderTopWidth: 1, }} >
              </View >
  
            </View>

            {/*Parte Inferior*/}
            <View style={{ flexDirection : "row", alignItems: "center", justifyContent: "center" }}>
  
                {/*Dó*/}
              <TouchableOpacity onPress={tocarNotaC}
                style={{ backgroundColor: "white", height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
                    <Text style={styles.notasParteInferior}>Dó</Text>
              </TouchableOpacity >
              
                {/*Ré*/}
              <TouchableOpacity onPress={tocarNotaD}
                style={{ backgroundColor: "white", height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
                <Text style={styles.notasParteInferior}>Ré</Text>
              </TouchableOpacity >

                {/*Mi*/}
              <TouchableOpacity onPress={tocarNotaE}
                style={{ backgroundColor: "white", height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
                <Text style={styles.notasParteInferior}>Mi</Text>
              </TouchableOpacity >

                {/*Fá*/}
              <TouchableOpacity onPress={tocarNotaF}
                style={{ backgroundColor: "white", height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
                <Text style={styles.notasParteInferior}>Fá</Text>
              </TouchableOpacity >

                {/*Sol*/}
              <TouchableOpacity onPress={tocarNotaG}
                style={{ backgroundColor: "white", height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
                <Text style={styles.notasParteInferior}>Sol</Text>
              </TouchableOpacity >

                {/*La*/}
              <TouchableOpacity onPress={tocarNotaA}
                style={{ backgroundColor: "white", height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1 }} >
                <Text style={styles.notasParteInferior}>Lá</Text>
              </TouchableOpacity >

                {/*Si*/}
              <TouchableOpacity onPress={tocarNotaB}
                style={{ backgroundColor: "white", height: 100, width: 48, borderBottomWidth: 1, borderLeftWidth: 1, borderRightWidth: 1 }} >
                <Text style={styles.notasParteInferior}>Si</Text>
              </TouchableOpacity >
  
            </View>
          </View>
        </View>
      );

}