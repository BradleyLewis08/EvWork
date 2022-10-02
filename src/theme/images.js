import { Asset } from 'expo-asset'

const images = {
  logo_sm: require('../../assets/images/logo-sm.png'),
  logo_lg: require('../../assets/images/logo-lg.png'),
  driving: require('../../assets/images/driving.png'),
  charging: require('../../assets/images/charging.png'),
  receipt: require('../../assets/images/receipt.png'),
}

// image preloading
export const imageAssets = Object.keys(images).map((key) => Asset.fromModule(images[key]).downloadAsync())

export default images
