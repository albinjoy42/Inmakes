import React from 'react';
import { View, Image, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
function AppTour({ navigation }) {
    // const nestedNavigator=()=>{
    //     navigation.navigate('Drawerkey')
    //     navigation.navigate('BottomTabKey')
    // }
    
    return (
        <View style={styles.container}>
            <Image source={require('../src/images/app_tour.jpg')} style={styles.logoimg} />
            <Text style={styles.maintxt}>App tour title</Text>
            <Text style={styles.subtxt}>The app tour description goes here.</Text>
            <TouchableHighlight style={styles.button_outer_box}>
                <TouchableHighlight style={styles.button} onPress={()=>navigation.navigate('Drawerkey')}>
                    <Icon name="arrow-forward" size={30} color="#ffffff" style={styles.icon}/>
                </TouchableHighlight>
            </TouchableHighlight>
        </View>
    )
}
export default AppTour;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    logoimg: {
        width: '85%',
        height: '65%'
    },
    maintxt: {
        fontSize: 20,
        color: "#002333",
        fontFamily: "Gilroy-Bold",
        marginTop: 30,
    },
    subtxt: {
        fontSize: 14,
        fontWeight: 'normal',
        color: "#9F9F9F",
        fontFamily: "Gilroy-Light"
    },
    button_outer_box: {
        width: 80,
        height: 80,
        borderWidth: 2,
        borderRadius: 5,
        marginTop: 40,
        borderTopColor: "#00C458",
        borderRightColor: "#00C458",
        borderLeftColor: "#e5e5e5",
        borderBottomColor: "#e5e5e5",
    },
    button: {
        width: 60,
        backgroundColor: '#00C458',
        height: 60,
        marginTop: 8,
        marginLeft: 8,
        borderRadius: 4,
        justifyContent: 'center',
        elevation: 6,
        borderColor: "#00C4583D",

    },
    icon: {
        color: '#FFFFFF',
        textAlign: 'center',
    },
})