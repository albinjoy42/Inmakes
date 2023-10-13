import React from 'react';
import { View, Image, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
function TopTabContent({ navigation, subject,title,chapter,parts }) {
    // const { subject, title, chapter, parts } = route.params;
    return (
            <View style={styles.topContainer}>
                <TouchableHighlight style={styles.drawerbutton} underlayColor="#ff0000" onPress={() => {
                    console.log('Home Button Pressed');
                    navigation.navigate('Home')}}>
                    <Icon name='home' size={22} color="#00C458" backgroundColor="#000000" />
                </TouchableHighlight>
                <Text style={styles.subjectText}>{subject}</Text>
                <Text style={styles.chapterTitle}>{title}</Text>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.outerCircleGreen}>
                        <View style={styles.innerCircleGreen}></View>
                    </View>
                    <Text style={{ color: "#00C458", marginTop: 7, marginLeft: 5, fontFamily: "Gilroy-Medium" }}>Chapter {chapter}</Text>
                    <View style={styles.outerCircleGreen}>
                        <View style={styles.innerCircleGreen}></View>
                    </View>
                    <Text style={{ color: "#00C458", marginTop: 7, marginLeft: 5, fontFamily: "Gilroy-Medium" }}>{parts} Parts</Text>
                </View>
            </View>
    )
}
export default TopTabContent;
const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: "#00202F",
        width: "100%",
        height: 170
    },
    subjectText: {
        fontFamily: 'Gilroy-Bold',
        fontSize: 24,
        color: "#ffffff",
        marginTop: -30,
        textAlign: 'center'
    },
    chapterTitle: {
        fontSize: 20,
        color: "#ffffff",
        marginLeft: 20,
        marginTop: 40,
        fontFamily: 'Gilroy-Bold',
    },
    drawerbutton: {
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginTop: 18,
        borderColor: "#D5D5D5",
        borderWidth: 1,
        borderRadius: 4,
    },
    outerCircleGreen: {
        borderWidth: 2,
        borderColor: "#00C458",
        borderRadius: 50,
        width: 15,
        height: 15,
        marginLeft: 20,
        marginTop: 10
    },
    innerCircleGreen: {
        backgroundColor: "#00C458",
        borderRadius: 50,
        width: 8,
        height: 8,
        alignSelf: 'center',
        marginTop: 1.3
    },
    video: {
        height: 170,
        width: 300,
        margin: 12,
        borderWidth: 1,
        borderColor: "#000000D9",
        borderRadius: 5
    },
})