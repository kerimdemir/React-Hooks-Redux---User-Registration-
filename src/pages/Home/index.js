import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    Linking,
    Image,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    ScrollView,
    ImageBackground
} from 'react-native';
import {connect} from 'react-redux';
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {fetchUser} from '../../store/actions/user.actions';
import {Colors, Fonts, Images} from "../../themes";
import globalStyles from "../../themes/globalStyles";
import {RecentMoves} from "./RecentMoves";
import Loading from "../../components/Loading";

const Home = ({user: {user, fetching}, fetchUser}) => {


    const [isShowMore, setIsShowMore] = useState(false);
    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    function Item({name}) {
        return <Text style={styles.title}>{name}</Text>;
    }

    return (

        <View style={globalStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.imageContainer}>
                    <Image source={Images.logo}
                           style={styles.image}/>
                    <Text style={styles.nameText}>{fetching ? " " : user.name}</Text>
                </View>

                <View style={styles.complaintContainer}>
                    <View style={styles.complaintView}>
                        <Icon size={20} color={'white'} name={'camera'}/>
                        <Text style={styles.complaintText}>
                            Hızlı {'\n'}Fotoğraf Ekle
                        </Text>
                    </View>
                    <View style={styles.complaintView}>
                        <Icon size={20} color={'white'} name={'list'}/>
                        <Text style={styles.complaintText}>
                            Detaylı {'\n'}Belge Ekle
                        </Text>
                    </View>
                </View>

                <ImageBackground imageStyle={styles.newMessageImgStyle} source={Images.img_blue_background}
                                 style={styles.newMessageView}>
                    <Text style={styles.newMessageTitle}> Firmadan gelen 2 okunmamış mesajınız var. </Text>
                    <Text style={styles.newMessageSubTitle}> Hemen Oku > </Text>
                </ImageBackground>

                <Text style={styles.recentMovesHeaderText}> Son Hareketler </Text>
                {isShowMore ? <RecentMoves/> : null}
                <RecentMoves/>


                <TouchableOpacity onPress={() => setIsShowMore(!isShowMore)}>


                    {isShowMore ?
                        <View style={styles.showMoreView}>
                            <Text style={styles.showMoreText}> Daha Az Göster </Text>
                            <Ionicons size={17} name={'ios-arrow-up'}/>
                        </View>
                        :
                        <View style={styles.showMoreView}>
                            <Text style={styles.showMoreText}> Daha Çok Göster </Text>
                            <Ionicons size={17} name={'ios-arrow-down'}/>
                        </View>
                    }


                </TouchableOpacity>


                <View style={styles.complaintStatisticsView}>
                    <Text style={styles.complaintStatisticsText}> Tüm Gönderilerim (12) </Text>
                </View>

                <View style={styles.complaintStatisticsView}>
                    <Text style={styles.complaintStatisticsText}> Yorum Yazdığım Gönderiler (8) </Text>
                </View>

                <View style={styles.complaintStatisticsView}>
                    <Text style={styles.complaintStatisticsText}> Desteklediğim Gönderiler (65) </Text>
                </View>


                <TouchableOpacity onPress={() => Linking.openURL('https://kerimdemir.netlify.com')}
                                  style={styles.bottomContainer}>


                    <Text style={styles.bottomText}>Powered by Kerim Demir </Text>
                </TouchableOpacity>


            </ScrollView>


        </View>

    );
};


const mapStateToProps = ({user}) => ({user});
export default connect(
    mapStateToProps,
    {fetchUser},
)(Home);
