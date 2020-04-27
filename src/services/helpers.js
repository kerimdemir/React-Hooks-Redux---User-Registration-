
import AsyncStorage from '@react-native-community/async-storage';

export async function user_token() {
    return await AsyncStorage.getItem('token');
}
