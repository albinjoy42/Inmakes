import React from 'react';
import { View, Image, Text, TouchableHighlight, StyleSheet } from 'react-native';
function ChapterTest({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 25, color: "#00202F", marginTop:10,fontFamily:"Gilroy-Bold" }}>Chapter Test</Text>
        </View>
    )
}
export default ChapterTest;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    topContainer: {
        alignSelf:'flex-start'
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
})