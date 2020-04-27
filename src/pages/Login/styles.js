import {I18nManager, Platform, StyleSheet} from 'react-native';
import {Images, Metrics, Colors, Fonts} from '../../themes';

const styles = StyleSheet.create({
    container: {
        padding: 0,
        flex: 1,
        backgroundColor: 'white',
    },

    imageContainer: {
        alignItems: 'center',
        marginLeft: Metrics.WIDTH * 0.02,
        marginRight: Metrics.WIDTH * 0.02,

    },

    imageLogo: {
        width: Metrics.WIDTH * 0.45,
        height: Metrics.HEIGHT * 0.12,
        resizeMode: 'contain',


    },

    headerTitle: {
        marginBottom: Metrics.HEIGHT * 0.03,
        textAlign: 'center',
        fontSize: Fonts.size.small,
        fontFamily: Fonts.type.bold,
        color: Colors.TEMPLATE_COLOR
    },

    subTitle: {
        fontSize: Fonts.size.tiny,
        color: Colors.TEMPLATE_COLOR,
        textAlign: 'center',
        fontFamily: Fonts.type.base
    },

    imageSocial: {
        backgroundColor:Colors.FACEBOOK_COLOR,
        resizeMode: 'contain',
        flex: 1,
        height: 25,
        marginBottom: Metrics.HEIGHT * 0.03,
        marginLeft: Metrics.WIDTH * 0.02,
        marginRight: Metrics.WIDTH * 0.02,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: Colors.LOGIN_COMPONENT_BORDER
    },


    checkBoxContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0,



    },
    checkBoxText: {

        fontFamily: Fonts.type.bold,
        color: '#243622',
        fontSize: Fonts.size.small,


    },

    forgotPasswordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight:Metrics.HEIGHT*0.02,
    },

    forgotPasswordText: {
        fontFamily: Fonts.type.bold,
        color: '#243622',
        fontSize: Fonts.size.small,
        textDecorationLine: 'underline'
    },

    textInput: {
        fontFamily: Fonts.type.bold,
        height: 50,
        fontSize:Fonts.size.small,
        paddingLeft: 10,
        backgroundColor: 'transparent',
        borderRadius: 4,
        borderColor: Colors.LOGIN_COMPONENT_BORDER,
        borderWidth: 1,
        marginBottom: Metrics.HEIGHT * 0.015,
        marginLeft: Metrics.WIDTH * 0.02,
        marginRight: Metrics.WIDTH * 0.02,

    },

    placeholderTextInput: {
        fontFamily: Fonts.type.bold,
        height: 50,
        backgroundColor: 'transparent',
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: Metrics.HEIGHT * 0.03,

    },

    loginContainer: {

        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#36C052',
        borderRadius: 4,
        marginBottom: Metrics.HEIGHT * 0.015,
        marginLeft: Metrics.WIDTH * 0.02,
        marginRight: Metrics.WIDTH * 0.02,

    },
    loginText: {
        color: 'white',
        fontFamily: Fonts.type.bold,
        padding: 10
    },
    registerText: {
        fontFamily: Fonts.type.base,
        textAlign: 'center',
        marginBottom:60
    },

    bottomContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 5,
       width:'100%',
        top:0,

        backgroundColor: '#36C052',
        height: 60,


    },
    bottomText: {
        color: 'white',
        fontSize: Fonts.size.small,
        textAlign: 'center',
        fontFamily: Fonts.type.semi_bold
    }

});
export default styles;
