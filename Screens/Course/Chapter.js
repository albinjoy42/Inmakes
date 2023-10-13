import React from 'react';
import { View, Image, Text, TouchableHighlight, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Video from 'react-native-video';
function Chapter({ navigation, route }) {
    const { subject, title, chapter, parts } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TouchableHighlight style={styles.drawerbutton} underlayColor="#ff0000" onPress={() => navigation.navigate('Home')}>
                    <Icon name='chevron-left' size={22} color="#00C458" backgroundColor="#000000" />
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
            <ScrollView style={{ marginTop: 10 }}>
                <Video
                    source={require("../../src/Videos/React_1.mp4")}
                    style={styles.video}
                    resizeMode="contain" // or cover, fill, stretch and center
                    controls={true} // Show video controls (play, pause, etc.)
                    paused={true}
                />
                <View style={{flexDirection:'row',marginBottom:10}}>
                <View style={styles.outerCircleGreen}>
                        <View style={styles.innerCircleGreen}></View>
                    </View>
                    <Text style={{ color: "#00C458", marginTop: 7, marginLeft: 5, fontFamily: "Gilroy-Medium" }}>Chapter {chapter}</Text>
                    <View style={styles.outerCircleGreen}>
                        <View style={styles.innerCircleGreen}></View>
                    </View>
                    <Text style={{ color: "#00C458", marginTop: 7, marginLeft: 5, fontFamily: "Gilroy-Medium" }}>{parts} Parts</Text>
                    </View>
                <Video
                    source={require("../../src/Videos/React_2.mp4")}
                    style={styles.video}
                    resizeMode="contain" // or cover, fill, stretch and center
                    controls={true} // Show video controls (play, pause, etc.)
                    paused={true}
                />
                <View style={{flexDirection:'row',marginBottom:10}}>
                <View style={styles.outerCircleGreen}>
                        <View style={styles.innerCircleGreen}></View>
                    </View>
                    <Text style={{ color: "#00C458", marginTop: 7, marginLeft: 5, fontFamily: "Gilroy-Medium" }}>Chapter {chapter}</Text>
                    <View style={styles.outerCircleGreen}>
                        <View style={styles.innerCircleGreen}></View>
                    </View>
                    <Text style={{ color: "#00C458", marginTop: 7, marginLeft: 5, fontFamily: "Gilroy-Medium" }}>{parts} Parts</Text>
                    </View>
                <Video
                    source={require("../../src/Videos/React_3.mp4")}
                    style={styles.video}
                    resizeMode="contain" // or cover, fill, stretch and center
                    controls={true} // Show video controls (play, pause, etc.)
                    paused={true}
                />
                <View style={{flexDirection:'row',marginBottom:10}}>
                <View style={styles.outerCircleGreen}>
                        <View style={styles.innerCircleGreen}></View>
                    </View>
                    <Text style={{ color: "#00C458", marginTop: 7, marginLeft: 5, fontFamily: "Gilroy-Medium" }}>Chapter {chapter}</Text>
                    <View style={styles.outerCircleGreen}>
                        <View style={styles.innerCircleGreen}></View>
                    </View>
                    <Text style={{ color: "#00C458", marginTop: 7, marginLeft: 5, fontFamily: "Gilroy-Medium" }}>{parts} Parts</Text>
                    </View>
            </ScrollView>
        </View>
    )
}
export default Chapter;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    topContainer: {
        backgroundColor: "#00202F",
        width: "100%",
        height: 220
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