import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, FlatList, ScrollView, ImageBackground} from 'react-native';
import styles from "./styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {Colors} from "../../themes";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";


export const RecentMoves = () => {


    return (


        <View style={styles.recentMovesContainer}>


            <View style={styles.recentMovesView}>
                <View style={{flex: 0.25, alignItems: 'center', marginTop: 20}}>
                    <MaterialCommunityIcons color={Colors.TEMPLATE_COLOR} name={'comment-text-multiple-outline'}
                                            size={50}/>
                </View>
                <View style={{flex: 0.75}}>

                    <Text style={styles.recentMovesCompanyText}>Trendyol </Text>
                    <Text style={styles.recentMovesCommandTitle}>Lorem ipsum dolor sit amet, consectetur
                        adifs...</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Entypo style={{marginLeft: -25}} name={'dot-single'} size={25} color={Colors.GREEN}/>
                        <Text style={styles.recentMovesCommandBody}>Firma gönderinize cevap yazdı.</Text>

                    </View>
                    <Text style={styles.recentMovesCommandText}>Lorem ipsum dolor sit amet, consectetur
                        adifspicing elit.Aerea blandit sagitits turpi...</Text>
                    <Text style={styles.recentMovesCommandDate}>5 saat önce</Text>
                </View>

            </View>

            <View style={styles.recentMovesView}>
                <View style={{flex: 0.25, alignItems: 'center', marginTop: 20}}>
                    <MaterialCommunityIcons color={Colors.TEMPLATE_COLOR} name={'comment-text-multiple-outline'}
                                            size={50}/>
                </View>
                <View style={{flex: 0.75}}>

                    <Text style={styles.recentMovesCompanyText}>Apple </Text>
                    <Text style={styles.recentMovesCommandTitle}>Lorem ipsum dolor sit amet, consectetur
                        adifs...</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Entypo style={{marginLeft: -25}} name={'dot-single'} size={25} color={Colors.GREEN}/>
                        <Text style={styles.recentMovesCommandBody}>Gönderiniz ile ilgili 3 yeni yorum
                            var.</Text>
                    </View>
                    <Text style={styles.recentMovesCommandDate}>5 saat önce</Text>
                </View>
            </View>
            <View style={styles.recentMovesView}>
                <View style={{flex: 0.25, alignItems: 'center', marginTop: 20}}>
                    <MaterialCommunityIcons color={Colors.TEMPLATE_COLOR} name={'comment-text-multiple-outline'}
                                            size={50}/>
                </View>
                <View style={{flex: 0.75}}>

                    <Text style={styles.recentMovesCompanyText}>Garanti Bankası </Text>
                    <Text style={{...styles.recentMovesCommandTitle, color: Colors.GRAY}}>Lorem ipsum dolor sit
                        amet, consectetur
                        adifs...</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Entypo style={{marginLeft: -25}} name={'dot-single'} size={25} color={Colors.GREEN}/>
                        <Text style={styles.recentMovesCommandBody}>Gönderiniz 5 yeni yorum var.</Text>
                    </View>
                    <Text style={styles.recentMovesCommandDate}>5 saat önce</Text>
                </View>
            </View>


        </View>

    );
};
