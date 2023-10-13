import React from 'react';
import { View, Image, Text, TouchableHighlight, StyleSheet,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerActions } from '@react-navigation/native';
function DrawerContent({ navigation }) {
    const closeDrawer = () => {
        navigation.dispatch(DrawerActions.closeDrawer());
    };
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
            <TouchableHighlight style={styles.drawerbuttonClose} onPress={closeDrawer} >
                <Icon name='close' size={20} color="#00C458" />
            </TouchableHighlight>
            {/* <TouchableHighlight style={styles.drawerbuttonHome} onPress={() => navigation.navigate('Home')}>
                <Icon name='home' size={20} color="#00C458" />
            </TouchableHighlight> */}
            </View>
            <View style={styles.profileContainer}>
                <View style={styles.profileimageContainer}>
                    <Image source={require('../../src/images/profile.jpg')} style={styles.profileimage} />
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.nametext}>Albin Joy</Text>
                    <Text style={styles.idtext}>ID: 1234</Text>
                </View>
                <Icon name="arrow-forward-ios" size={13} color="#00C458" style={{ marginLeft: 20, marginTop: 47 }} />
            </View>
            <ScrollView style={styles.drawerlistcontainer}>
                <View style={styles.drawerlistitemcontainer}>
                    <View style={styles.square}></View>
                    <Text style={styles.draweritem} onPress={() => navigation.navigate('Exam')}>Exam Corner</Text>
                </View>
                <View style={styles.drawerlistitemcontainer}>
                    <View style={styles.square}></View>
                    <Text style={styles.draweritem} onPress={() => navigation.navigate('Subrscriptions')}>Subrscriptions</Text>
                </View>
                <View style={styles.drawerlistitemcontainer}>
                    <View style={styles.square}></View>
                    <Text style={styles.draweritem} onPress={() => navigation.navigate('Analytics')}>Analytics</Text>
                </View>
                <View style={styles.drawerlistitemcontainer}>
                    <View style={styles.square}></View>
                    <Text style={styles.draweritem} onPress={() => navigation.navigate('Downloads')}>Downloads</Text>
                </View>
                <View style={styles.drawerlistitemcontainer}>
                    <View style={styles.square}></View>
                    <Text style={styles.draweritem} onPress={() => navigation.navigate('Notifications')}>Notifications</Text>
                </View>
                <View style={styles.drawerlistitemcontainer}>
                    <View style={styles.square}></View>
                    <Text style={styles.draweritem} onPress={() => navigation.navigate('Referrals')}>Referrals</Text>
                </View>
                <View style={styles.drawerlistitemcontainer}>
                    <View style={styles.square}></View>
                    <Text style={styles.draweritem} onPress={() => navigation.navigate('Share')}>Share app</Text>
                </View>
                <View style={styles.drawerlistitemcontainer}>
                    <View style={styles.squarelogout}></View>
                    <Text style={styles.draweritemlogout} onPress={() => navigation.navigate('Register')}>Logout</Text>
                </View>
                <TouchableHighlight style={styles.enquiryButton}>
                    <Text style={styles.enquiryText} onPress={() => navigation.navigate('Enquiry')}>Enquire Now</Text>
                </TouchableHighlight>
            </ScrollView>
        </View>
    )
}
export default DrawerContent;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#002333',
    },
    topBar : {
        flexDirection:'row'
    },
    drawerbuttonClose: {
        height: 30,
        width: 30,
        marginLeft: 15,
        marginTop: 8,
        borderColor: "#D5D5D5",
        borderWidth: 0.5,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    drawerbuttonHome: {
        height: 30,
        width: 30,
        marginLeft:190,
        marginTop: 8,
        borderColor: "#D5D5D5",
        borderWidth: 0.5,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileContainer: {
        flexDirection: 'row',
        marginLeft: 20,
        marginTop:20,
        marginBottom:20
    },
    profileimageContainer: {
        height: 100,
        width: 100,
    },
    profileimage: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderColor: "#00C458",
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailsContainer: {
        flexDirection: 'column',
        marginLeft: 20,
        alignSelf: 'center'
    },
    nametext: {
        color: "#ffffff",
        fontFamily: "Gilroy-Bold",
        fontSize: 14,
    },
    idtext: {
        color: "#6A828E",
        fontFamily: "Gilroy-Regular",
        fontSize: 14
    },
    drawerlistcontainer: {
        flexDirection: 'column',
        width: "100%",
        marginLeft:30,
        marginTop:10,
        bottom:20,
    },
    drawerlistitemcontainer: {
        flexDirection: 'row',
        textAlign: 'left',
        alignItems: 'center',
        width: "75%",
        height:60,
        borderBottomColor: "#6A828E",
        borderBottomWidth: 1
    },
    square: {
        borderWidth: 1,
        borderColor: "#00C458",
        height: 25,
        width: 25,
        borderRadius: 5,
    },
    draweritem: {
        paddingLeft: "4%",
        paddingTop: 15,
        paddingBottom: 15,
        color: "#ffffff",
        fontFamily: "Gilroy-Regular",
        fontSize: 14
    },
    squarelogout: {
        borderWidth: 1,
        borderColor: "#E14949",
        height: 25,
        width: 25,
        borderRadius: 5,
    },
    draweritemlogout: {
        paddingLeft: "4%",
        paddingTop: 15,
        paddingBottom: 15,
        color: "#E14949",
        fontFamily: "Gilroy-Medium",
        fontSize: 14
    },
    enquiryButton : {
        borderWidth: 1,
        borderRadius:5,
        borderColor:"#00C458",
        marginTop:25,
        height:36,
        width:"75%",
        alignItems:'center',
        justifyContent:'center'
    },
    enquiryText : {
        color:"#00C458",
        fontFamily:"Gilroy-Medium"
    }
}) 