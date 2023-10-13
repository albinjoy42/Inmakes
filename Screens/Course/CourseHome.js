import React from 'react';
import { View, Image, Text, TouchableHighlight, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
function CourseHome({ navigation,route }) {
    const {subjectName} = route.params;
    const DATA = [
        { title: "Long chapter name can be shown here.", chapter: "1", parts: "3" },
        { title: "Long chapter name can be shown here.", chapter: "2", parts: "3" },
        { title: "Long chapter name can be shown here.", chapter: "3", parts: "3" },
        { title: "Long chapter name can be shown here.", chapter: "4", parts: "3" },
        { title: "Long chapter name can be shown here.", chapter: "5", parts: "3" },
        { title: "Long chapter name can be shown here.", chapter: "6", parts: "3" },
        { title: "Long chapter name can be shown here.", chapter: "7", parts: "3" },
        { title: "Long chapter name can be shown here.", chapter: "8", parts: "3" },
        { title: "Long chapter name can be shown here.", chapter: "9", parts: "3" },
        { title: "Long chapter name can be shown here.", chapter: "10", parts: "3" },
        { title: "Long chapter name can be shown here.", chapter: "11", parts: "3" },
        { title: "Long chapter name can be shown here.", chapter: "12", parts: "3" },
    ]
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TouchableHighlight style={styles.drawerbutton} underlayColor="#bbbbbb" onPress={() => navigation.navigate('Home')}>
                    <Icon name='chevron-left' size={22} color="#00C458" backgroundColor="#000000" />
                </TouchableHighlight>
                <Text style={styles.subjectText}>{subjectName}</Text>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.outerCircleGreen}>
                        <View style={styles.innerCircleGreen}></View>
                    </View>
                    <Text style={{ color: "#00C458", marginTop: 7, marginLeft: 5, fontFamily: "Gilroy-Medium" }}>12 Chapters</Text>
                    <View style={styles.outerCircleGreen}>
                        <View style={styles.innerCircleGreen}></View>
                    </View>
                    <Text style={{ color: "#00C458", marginTop: 7, marginLeft: 5, fontFamily: "Gilroy-Medium" }}>124 hours</Text>
                </View>
            </View>
            <View style={{ height: "74%", width: 330, marginTop: -30, zIndex: 1 }}>
                <FlatList
                    data={DATA} // Your data source
                    // keyExtractor={(item) => item.id} // Function to generate unique keys for each item
                    renderItem={({ item }) => (
                        <TouchableHighlight style={styles.chapterButton} underlayColor="#CCCCCC" onPress={() => navigation.navigate('TopTab',{chapter:item.chapter,parts:item.parts,title:item.title,subject:subjectName})}>
                            <View style={{ margin: 15, }}>
                                <Text style={{ color: "#002333", fontFamily: "Gilroy-Medium", textAlign: 'center', marginBottom: 5 }}>{item.title}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={styles.outerCircleGrey}>
                                        <View style={styles.innerCircleGrey}></View>
                                    </View>
                                    <Text style={{ color: "#9F9F9F", marginTop: 10, marginLeft: 5, fontFamily: "Gilroy-Medium" }}>Chapter {item.chapter}  </Text>
                                    <View style={styles.outerCircleGrey}>
                                        <View style={styles.innerCircleGrey}></View>
                                    </View>
                                    <Text style={{ color: "#9F9F9F", marginTop: 10, marginLeft: 5, fontFamily: "Gilroy-Medium" }}>{item.parts} Parts</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        // You can customize the rendering of each item here
                    )}
                />
            </View>
        </View>
    )
}
export default CourseHome;
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
        fontSize: 24,
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
    outerCircleGrey: {
        borderWidth: 2,
        borderColor: "#9F9F9F",
        borderRadius: 50,
        width: 15,
        height: 15,
        marginTop: 10
    },
    innerCircleGrey: {
        backgroundColor: "#9F9F9F",
        borderRadius: 50,
        width: 8,
        height: 8,
        alignSelf: 'center',
        marginTop: 1.3
    },
    chapterButton: {
        width: "95%",
        backgroundColor: "#fff",
        elevation: 10,
        borderRadius: 10,
        marginBottom: 10,
        alignSelf: 'center',
    }
})