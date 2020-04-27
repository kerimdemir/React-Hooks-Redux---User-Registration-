import {Dimensions} from 'react-native';
import {Fonts} from './index';

const {width, height} = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
    size + (scale(size) - size) * factor;

const type = {
    base: 'Nunito-Regular',
    black: 'Nunito-Black',
    italic: 'Nunito-Italic',
    bold: 'Nunito-Bold',
    bold_italic: 'Nunito-BoldItalic',
    extra_bold: 'Nunito-ExtraBold',
    light: 'Nunito-Light',
    regular: ' Nunito-Regular',
    semi_bold: 'Nunito-SemiBold',


};
const size = {
    input: {fontSize: moderateScale(25), fontFamily: type.base},
    regular: 17,
    medium: 14,
    small: 12,
    tiny: 10,
};
//Text.defaultProps.style = { color: 'red' }
const props = {
    Text: {
        backgroundColor: 'transparent',
        fontSize: moderateScale(16),
        fontFamily: type.base,
    },
    TextInput: {
        underlineColorAndroid: 'transparent',
        keyboardType: 'numeric',
    },
};
const style = {
    normal: {
        fontFamily: type.base,
        fontSize: size.regular,
    },
    description: {
        fontFamily: type.base,
        fontSize: size.medium,
    },
};
export default {
    type,
    size,
    props,
    style,
    scale,
    verticalScale,
    moderateScale,
};
