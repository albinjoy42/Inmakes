import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableHighlight, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerActions } from '@react-navigation/native';
// import Video from 'react-native-video';
import VideoThumbnail from './VideoThumbnail';
function Home({ navigation }) {
    const [wish, setWish] = useState('');
    useEffect(() => {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();
        const currentMinute = currentTime.getMinutes();
        console.log("Time is ", currentHour, ":", currentMinute);
        if (currentHour >= 0 && currentHour <= 12) {
            setWish("Good Morning");
        }
        else if (currentHour >= 13 && currentHour <= 17) {
            setWish("Good Afternoon");
        }
        else {
            setWish("Good Evening");
        }
    }, [])
    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };
    const videos = [
        {
            videoSource: require('../../src/Videos/React_1.mp4'),
            thumbnailSource: require('../../src/Videos/React_1.png'),
        },
        {
            videoSource: require('../../src/Videos/React_2.mp4'),
            thumbnailSource: require('../../src/Videos/React_1.png'),
        },
        {
            videoSource: require('../../src/Videos/React_3.mp4'),
            thumbnailSource: require('../../src/Videos/React_1.png'),
        },
    ];
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <TouchableHighlight style={styles.drawerbutton} underlayColor="#bbbbbb" onPress={openDrawer}>
                    <Icon name='grid-view' size={22} color="#00C458" backgroundColor="#000000" />
                </TouchableHighlight>
                <Image source={require('../../src/images/logo.png')} style={styles.logoimg} />
                <TouchableHighlight style={styles.classbutton}>
                    <View style={styles.classbuttoncontent}>
                        <View style={styles.circle}></View>
                        <Text style={styles.classtext}>Classes</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <ScrollView style={styles.middleContainer}>
                <Text style={styles.wishText}>{wish}</Text>
                <Text style={styles.wishTextname}>Albin Joy</Text>
                <Image source={require("../../src/images/class_selector_bg.png")} style={styles.selectClassbg} />
                <Text style={{ color: "#BAC3C7", marginTop: -55, marginLeft: 40, fontSize: 14, fontFamily: "Gilroy-Regular" }}>Class</Text>
                <Text style={{ color: "#BAC3C7", marginTop: 6, marginLeft: 40, fontSize: 16, fontFamily: "Gilroy-Bold" }}>Plus two science</Text>
                <Icon name="expand-more" size={25} color="#FFFFFF" style={{ marginLeft: 290, marginTop: -30 }} />
                <ScrollView horizontal={true} style={styles.subjectBar}>
                    <TouchableHighlight style={styles.subjectButton} underlayColor="#CCCCCC" onPress={() => navigation.navigate("CourseHome", { subjectName: "Biology" })}>
                        <View style={styles.subjectbuttoncontent}>
                            <View style={styles.circleSubject}></View>
                            <Text style={styles.subjectText}>Biology</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.subjectButton} underlayColor="#CCCCCC" onPress={() => navigation.navigate("CourseHome", { subjectName: "Physics" })}>
                        <View style={styles.subjectbuttoncontent}>
                            <View style={styles.circleSubject}></View>
                            <Text style={styles.subjectText}>Physics</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.subjectButton} underlayColor="#CCCCCC" onPress={() => navigation.navigate("CourseHome", { subjectName: "Chemistry" })}>
                        <View style={styles.subjectbuttoncontent}>
                            <View style={styles.circleSubject}></View>
                            <Text style={styles.subjectText}>Chemistry</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.subjectButton} underlayColor="#CCCCCC" onPress={() => navigation.navigate("CourseHome", { subjectName: "Mathematics" })}>
                        <View style={styles.subjectbuttoncontent}>
                            <View style={styles.circleSubject}></View>
                            <Text style={styles.subjectText}>Mathematics</Text>
                        </View>
                    </TouchableHighlight>
                </ScrollView>
                <Text style={{ color: "#002333", marginTop: 10, fontSize: 14, fontFamily: "Gilroy-Medium" }}>Recent courses</Text>
                <ScrollView horizontal={true} style={styles.videoBar}>
                    <VideoThumbnail videos={videos} />
                    {/* <Video
                        source={require("../../src/Videos/React_1.mp4")}
                        style={styles.video}
                        resizeMode="contain" // or cover, fill, stretch and center
                        controls={false} // Show video controls (play, pause, etc.)
                        paused={false}
                        muted={true}
                    />
                    <Video
                        source={require("../../src/Videos/React_2.mp4")}
                        style={styles.video}
                        resizeMode="contain" // or cover, fill, stretch and center
                        controls={false} // Show video controls (play, pause, etc.)
                        paused={false}
                        muted={true}
                    />
                    <Video
                        source={require("../../src/Videos/React_3.mp4")}
                        style={styles.video}
                        resizeMode="contain" // or cover, fill, stretch and center
                        controls={false} // Show video controls (play, pause, etc.)
                        paused={false}
                        muted={true}
                    /> */}
                </ScrollView>
                <ScrollView horizontal={true} style={{ marginTop: 20, }}>
                    <View style={styles.liveBookbuttonContainer}>
                        <Text style={{ color: '#ffffff', fontFamily: 'Gilroy-Bold', fontSize: 20, marginTop: 40, textAlign: 'center' }}>
                            Target live classes</Text>
                        <Text style={{ color: '#ffffff', fontFamily: 'Gilroy-Regular', fontSize: 16, marginTop: 30, textAlign: 'center' }}>
                            Live classes by best instructors
                        </Text>
                        <TouchableHighlight style={styles.liveBookbutton}>
                            <Text style={styles.liveBookbuttonText}>Book a free class</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.liveBookbuttonContainer}>
                        <Text style={{ color: '#ffffff', fontFamily: 'Gilroy-Bold', fontSize: 20, marginTop: 40, textAlign: 'center' }}>
                            Free counselling</Text>
                        <Text style={{ color: '#ffffff', fontFamily: 'Gilroy-Regular', fontSize: 16, marginTop: 30, textAlign: 'center' }}>
                            Avail free counselling from professionals
                        </Text>
                        <TouchableHighlight style={styles.liveBookbutton}>
                            <Text style={styles.liveBookbuttonText}>Schedule counselling</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </ScrollView>
        </View>
    )
}
export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    topView: {
        flexDirection: "row",
        height: 70,
        width: '100%',
    },
    logoimg: {
        width: 200,
        height: 200,
        marginLeft: 13,
        alignSelf: 'center',
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
    classbutton: {
        height: 35,
        width: 80,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 3,
        borderColor: "#00C458",
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 3
    },
    classbuttoncontent: {
        flexDirection: 'row',
    },
    circle: {
        width: 15,
        height: 15,
        backgroundColor: '#007345',
        borderRadius: 50,
        alignSelf: 'center'
    },
    classtext: {
        color: "#00C458",
        fontFamily: "Gilroy-Medium",
        fontSize: 14,
        marginLeft: 5
    },
    middleContainer: {
        width: "90%",
    },
    wishText: {
        color: "#002333",
        marginTop: 30,
        fontFamily: 'Gilroy-Regular',
        fontSize: 20,
        backgroundColor: '#ffffff'
    },
    wishTextname: {
        color: "#002333",
        marginTop: 2,
        fontFamily: 'Gilroy-Bold',
        fontSize: 30,
        backgroundColor: '#ffffff'
    },
    selectClassbg: {
        marginTop: 5,
        width: 330,
        height: 64,
        borderRadius: 6
    },
    subjectBar: {
        marginTop: 30,
        flexDirection: 'row',
    },
    subjectButton: {
        height: 39,
        width: 'auto',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#002333",
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 5,
    },
    subjectbuttoncontent: {
        flexDirection: 'row',
        margin: 5
    },
    circleSubject: {
        width: 20,
        height: 20,
        backgroundColor: '#00C458',
        borderRadius: 50,
        alignSelf: 'center'
    },
    subjectText: {
        color: "#002333",
        fontFamily: "Gilroy-Medium",
        fontSize: 14,
        marginLeft: 5
    },
    videoBar: {
        marginTop: 15,
    },
    video: {
        height: 115,
        width: 200,
        borderWidth: 1,
        borderColor: "#000000D9",
        borderRadius: 5
    },
    liveBookbuttonContainer: {
        backgroundColor: "#002333",
        height: 220,
        width: 200,
        marginRight: 8,
        marginBottom:5,
        borderRadius: 5
    },
    liveBookbutton: {
        backgroundColor: "#00C458",
        height: 50,
        width: 150,
        marginTop: 30,
        borderRadius: 5,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    liveBookbuttonText: {
        fontFamily: 'Gilroy-Medium',
        fontSize: 15,
        color: '#FFFFFF',
        textAlign: 'center'
    }
})