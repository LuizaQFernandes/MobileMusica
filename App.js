import { StyleSheet, Text, View } from 'react-native';
import {Aula} from './src/screens/Aula'
import {useFonts, Roboto_700Bold, Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading'

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_700Bold, Roboto_400Regular, Roboto_500Medium})

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <Aula/>
  );
}


