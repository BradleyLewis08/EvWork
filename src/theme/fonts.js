import * as Font from 'expo-font'

// fonts preloading
export const fontAssets = [
  {
    openSans_regular: require('../../assets/fonts/OpenSans-Regular.ttf'),
  },
  {
    openSans_regular_italic: require('../../assets/fonts/OpenSans-Italic.ttf'),
  },
  {
    openSans_semiBold: require('../../assets/fonts/OpenSans-Semibold.ttf'),
  },
  {
    openSans_semiBold_italic: require('../../assets/fonts/OpenSans-SemiboldItalic.ttf'),
  },
  {
    openSans_bold: require('../../assets/fonts/OpenSans-Bold.ttf'),
  },
  {
    openSans_bold_italic: require('../../assets/fonts/OpenSans-BoldItalic.ttf'),
  },
  {
    lato_black: require('../../assets/fonts/Lato-Black.ttf'),
  },
  {
    lato_bold: require('../../assets/fonts/Lato-Bold.ttf'),
  },
  {
    lato_italic: require('../../assets/fonts/Lato-Italic.ttf'),
  },
  {
    lato_light: require('../../assets/fonts/Lato-Light.ttf'),
  },
  {
    lato_regular: require('../../assets/fonts/Lato-Regular.ttf'),
  },
  {
    lato_thin: require('../../assets/fonts/Lato-Thin.ttf'),
  },
].map((x) => Font.loadAsync(x))

const fonts = {
  openSan: {
    regular: 'openSans_regular',
    regularItalic: 'openSans_regular_italic',
    semiBold: 'openSans_semiBold',
    semiBoldItalic: 'openSans_semiBold_italic',
    bold: 'openSans_bold',
    boldItalic: 'openSans_bold_italic',
  },
  Lato: {
    regular: 'lato_regular',
    bold: 'lato_bold',
    black: 'lato_black',
    italic: 'lato_italic',
    thin: 'lato_thin',
    light: 'lato_light',
  },
}

export default fonts
