import React from 'react';
import { View, Image, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerActions } from '@react-navigation/native';
function QNBank({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 25, color: "#00202F", marginTop:10,fontFamily:"Gilroy-Bold" }}>Question Bank</Text>
        </View>
    )
}
export default QNBank;
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