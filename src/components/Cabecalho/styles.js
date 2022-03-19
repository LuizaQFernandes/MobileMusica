import {StyleSheet} from 'react-native';
import{theme} from '../../styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        padding: 10,
    },
    titulo:{
        fontFamily: theme.fonts.primary700,
        color: theme.colors.purple,
        fontSize: 28,
        padding: 2
    },
    subtitulo: {
        fontFamily: theme.fonts.primary500,
        color: theme.colors.pink,
        fontSize:20,
        alignSelf: 'flex-end'
    }
})