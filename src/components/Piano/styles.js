import {StyleSheet} from 'react-native';
import {theme} from '../../styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.beige,
        flexDirection: "row",
    },
    notasParteInferior:{
        fontFamily: theme.fonts.primary400,
        alignSelf: 'center',
        marginTop: 40,
        color: theme.colors.black
    },
    notasParteSuperior:{
        fontFamily: theme.fonts.primary400,
        alignSelf: 'center',
        color: theme.colors.white,
        marginTop: 40,
    }
})