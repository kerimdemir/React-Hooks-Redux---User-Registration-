import React, {useEffect, useState} from 'react';
import {
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    Linking,
    KeyboardAvoidingView,
    TextInput,
    Image, ActivityIndicator, AsyncStorage
} from 'react-native';
import {CheckBox} from 'react-native-elements'
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux';
import styles from './styles';
import {Fonts, Images, Metrics} from '../../themes';
import {login} from '../../store/actions/login.actions';
import Divider from '../../components/Divider';
import Loading from "../../components/Loading";

const Login = ({login, auth}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(true);

    useEffect(() => {

        AsyncStorage.getItem('email').then(email => setEmail(email));
        AsyncStorage.getItem('password').then(password => setPassword(password));
        //Setting the value in Text
        auth.error && alert(auth.error);
        auth.isAuth && Actions.Home();
    }, [auth]);


    return (

        <View style={styles.container}>

                {auth.isLoading && <Loading/>}
                <ScrollView>
                    <KeyboardAvoidingView>
                    <View style={styles.imageContainer}>
                        <Image source={Images.logo} style={styles.imageLogo}/>
                    </View>

                    <Text style={styles.headerTitle}> Sosyal Medya Hesaplarınızla giriş
                        yapın </Text>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={styles.imageSocial} source={Images.btn_facebook}/>
                        <Image
                            style={{...styles.imageSocial, marginLeft: Metrics.WIDTH * 0.01, backgroundColor: 'white'}}
                            source={Images.btn_google}/>
                    </View>
                    <Text style={styles.subTitle}> ya da </Text>
                    <Text style={styles.headerTitle}> Kayıtlı e-posta adresiyle giriş
                        yapın </Text>

                    <TextInput
                        style={styles.textInput}
                        placeholder="E-posta"
                        onChangeText={(email) => setEmail(email)}
                        value={email}
                    />

                    <TextInput
                        style={styles.textInput}
                        secureTextEntry={true}
                        placeholderStyle={styles.placeholderTextInput}
                        placeholder="Şifre"
                        onChangeText={(password) => setPassword(password)}
                        value={password}
                    />
                    <View>
                        <View style={styles.forgotPasswordContainer}>
                            <CheckBox containerStyle={styles.checkBoxContainer}
                                      textStyle={styles.checkBoxText}
                                      title='Beni Hatırla'
                                      checkedColor='#02112D'
                                      checked={isChecked}
                                      onPress={() => setIsChecked(!isChecked)}
                            />

                            <Text style={styles.forgotPasswordText}>Şifremi Unuttum</Text>

                        </View>

                    </View>
                    <TouchableOpacity style={styles.loginContainer} onPress={() => login(email, password)}>
                        <Text style={styles.loginText}>Giriş Yap</Text>
                    </TouchableOpacity>

                    <Divider/>

                    <Text style={styles.registerText}> Üye Değilseniz Hemen <Text
                        style={{...styles.registerText, fontFamily: Fonts.type.bold}}>Üye Olun</Text> </Text>


                    </KeyboardAvoidingView>
                </ScrollView>
                <TouchableOpacity onPress={() => Linking.openURL('https://kerimdemir.netlify.com/')}
                                  style={styles.bottomContainer}>

                    <Text style={styles.bottomText}> Powered by Kerim Demir</Text>
                </TouchableOpacity>

        </View>

    );


};

const mapStateToProps = ({auth}) => ({
    auth,
});

export default connect(mapStateToProps, {login})(Login);
