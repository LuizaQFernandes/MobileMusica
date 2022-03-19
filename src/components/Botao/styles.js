import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  botao: {
    backgroundColor: theme.colors.purple,
    height: 50,
    width: 180,
    borderRadius: 50,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
 
  },
  textoBotao: {
    color: theme.colors.beige,
    fontSize: 16,
    fontFamily: theme.fonts.primary700
  },
});