import {StyleSheet} from 'react-native';
import {theme} from '../../styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    tituloAula:{
        fontFamily: theme.fonts.primary700,
        color: theme.colors.blue,
        fontSize: 24,
        marginLeft: 10,
        marginTop: 30
    },
    detalheAula: {
        fontFamily: theme.fonts.primary500,
        color: theme.colors.pink,
        fontSize: 10,
        lineHeight: 20,
        marginLeft: 10
    },
    referenciaAula: {
        fontFamily: theme.fonts.primary500,
        color: theme.colors.gray,
        fontSize: 6,
        marginLeft: 10,
        alignSelf: 'flex-end'
    }
})