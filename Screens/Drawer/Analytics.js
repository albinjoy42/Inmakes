import React from 'react';
import { View, Image, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerActions } from '@react-navigation/native';
function Analytics({ navigation }) {
    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
      };
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TouchableHighlight style={styles.drawerbutton} underlayColor="#bbbbbb" onPress={openDrawer}>
                    <Icon name='grid-view' size={22} color="#00C458" backgroundColor="#000000" />
                </TouchableHighlight>
            </View>
            <Text style={{ fontSize: 20, color: "#000000" }}>Analytics</Text>
        </View>
    )
}
export default Analytics;
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