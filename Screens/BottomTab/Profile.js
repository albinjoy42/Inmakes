import React from 'react';
import { View, Image, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerActions } from '@react-navigation/native';
function Profile({ navigation }) {
    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                    <Icon name='notifications' size={20} color="#D5D5D5" style={{ margin: 23, }} />
                    <TouchableHighlight style={styles.drawerbutton} underlayColor="#bbbbbb" onPress={openDrawer}>
                        <Icon name='grid-view' size={16} color="#00C458" backgroundColor="#000000" />
                    </TouchableHighlight>
                </View>
                <Text style={{ fontSize: 20, color: "#ffffff", textAlign: 'center', fontFamily: "Gilroy-Medium", marginTop: -45 }}>Profile</Text>
            </View>
            <View style={styles.profileContainer}>
                <Image source={require("../../src/images/profile.jpg")} style={styles.profileImage} />
                <Text style={{ ...styles.headText, marginTop: -59, marginLeft: 110 }}>Albin Joy</Text>
                <Text style={{ ...styles.subText, marginTop: 2, marginLeft: 110 }}>ID: 12345678</Text>
                <Text style={{ ...styles.headText, marginTop: 35, marginLeft: 20 }}>Personal Info</Text>
                <View style={styles.infoDetailrow}>
                    <View style={{ width: "50%" }}><Text style={{ ...styles.subText, fontFamily: "Gilroy-Regular", }}>Account Settings</Text></View>
                    <View style={{ width: "50%" }}><Text style={{ ...styles.subText, fontFamily: "Gilroy-Bold", }}>Albin Joy</Text></View>
                </View>
                <View style={styles.infoDetailrow}>
                    <View style={{ width: "50%" }}><Text style={{ ...styles.subText, fontFamily: "Gilroy-Regular", }}>Email</Text></View>
                    <View style={{ width: "50%" }}><Text style={{ ...styles.subText, fontFamily: "Gilroy-Bold", }}>albinjoy42@gmail.com</Text></View>
                </View>
                <View style={styles.infoDetailrow}>
                    <View style={{ width: "50%" }}><Text style={{ ...styles.subText, fontFamily: "Gilroy-Regular", }}>Number</Text></View>
                    <View style={{ width: "50%" }}><Text style={{ ...styles.subText, fontFamily: "Gilroy-Bold", }}>+91 9526133342</Text></View>
                </View>
                <Text style={{ ...styles.headText, marginTop: 20, marginLeft: 20 }}>Course Info</Text>
                <View style={styles.infoDetailrow}>
                    <View style={{ width: "50%" }}><Text style={{ ...styles.subText, fontFamily: "Gilroy-Regular", }}>Center</Text></View>
                    <View style={{ width: "50%" }}><Text style={{ ...styles.subText, fontFamily: "Gilroy-Bold", }}>Inmakes edu</Text></View>
                </View>
                <View style={styles.infoDetailrow}>
                    <View style={{ width: "50%" }}><Text style={{ ...styles.subText, fontFamily: "Gilroy-Regular", }}>Course</Text></View>
                    <View style={{ width: "50%" }}><Text style={{ ...styles.subText, fontFamily: "Gilroy-Bold", }}>Plus Two Science</Text></View>
                </View>
                <View style={styles.infoDetailrow}>
                    <View style={{ width: "50%" }}><Text style={{ ...styles.subText, fontFamily: "Gilroy-Regular", }}>Payment Status</Text></View>
                    <View style={{ width: "50%" }}><Text style={{ ...styles.subText, fontFamily: "Gilroy-Bold", }}>Free</Text></View>
                </View>
                <View style={styles.infoDetailrow}>
                    <View style={{ width: "50%" }}><Text style={{ ...styles.subText, fontFamily: "Gilroy-Regular", }}>Expiry Date</Text></View>
                    <View style={{ width: "50%" }}><Text style={{ ...styles.subText, fontFamily: "Gilroy-Bold", }}>Not Applicable</Text></View>
                </View>
            </View>

            <TouchableHighlight style={styles.paymentButton}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', height: 35, width: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 4, marginLeft: 15 }}>
                        <Icon name="credit-card" size={20} color="#ffffff" />
                    </View>
                    <Text style={styles.paymentbuttonText}>Custom Payment</Text>
                    <Icon name="chevron-right" size={20} color="white" style={{ alignSelf: 'center', marginLeft: 90 }} />
                </View>
            </TouchableHighlight>

        </View>
    )
}
export default Profile;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    topContainer: {
        width: "100%",
        height: "25%",
        backgroundColor: "#00202F"
    },
    drawerbutton: {
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        marginTop: 18,
        borderColor: "#D5D5D5",
        borderWidth: 1,
        borderRadius: 4,
    },
    profileContainer: {
        backgroundColor: "#ffffff",
        width: "90%",
        height: "77%",
        marginTop: -90,
        borderRadius: 10,
        elevation: 5,
    },
    profileImage: {
        width: 80,
        height: 80,
        margin: 10,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#00C458"
    },
    headText: {
        fontFamily: "Gilroy-Bold",
        fontSize: 18,
        color: "#4D4D4D",
    },
    subText: {
        fontSize: 13,
        color: "#4D4D4D",
        marginLeft: 5
    },
    infoDetailrow: {
        flexDirection: 'row',
        borderBottomColor: '#bbbbbb',
        borderBottomWidth: 0.5,
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        height: 30
    },
    paymentButton: {
        backgroundColor: '#00C458',
        width: '90%',
        height: 55,
        borderRadius: 6,
        marginTop: 10,
        elevation: 10,
        justifyContent: 'center'
    },
    paymentbuttonText: {
        color: "#ffffff",
        fontFamily: "Gilroy-Medium",
        fontSize: 16,
        marginLeft: 12,
        textAlignVertical: 'center'
    }
})