import {Platform} from 'react-native'

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#b4afa8',
    appBarbackground: '#289f9bb3',
    textWithBackground: 'white',
    languageBackground: '#0366d6',
    cardBackground: 'white',
    button: 'blue',
    errorColor: '#d73a4a',
  },
  fontSizes: {
    body: 16,
    subheading: 18,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;
