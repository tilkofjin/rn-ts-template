import { Platform } from 'react-native';

const isIOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';
const platformCur = { isIOS, isAndroid }
export default platformCur
