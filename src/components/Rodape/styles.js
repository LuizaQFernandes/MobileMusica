import {StyleSheet} from 'react-native';
import {theme} from '../../styles/theme'

export const styles = StyleSheet.create({
    tituloAula:{
        fontFamily: theme.fonts.primary700,
        color: theme.colors.blue,
        fontSize: 34,
        marginLeft: 10
    },
    detalheAula: {
        fontFamily: theme.fonts.primary500,
        color: theme.colors.pink,
        fontSize: 14,
        marginVertical: 5,
        lineHeight: 20,
        marginLeft: 10
    }
})