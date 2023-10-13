import React, { useState } from 'react';
import { View, Image, Text, TouchableHighlight, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
function BoardDetails({ navigation }) {
    const board = ["Central Board of Secondary Education (CBSE)",
        "Indian Certificate of Secondary Education (ICSE)",
        "State Board of Kerala",
        "State Board of TamilNadu",
        "State Board of Karnataka",
        "State Board of Andhra Pradesh",
        "Council for the Indian School Certificate Examinations (CISCE)",
        "Board of Secondary Education, Rajasthan (BSER)",
        "Board of Secondary Education, Madhya Pradesh (MPBSE)"
    ];
    const classes = ["1","2","3","4","5","6","7","8","9","10","11","12"];
    const [selectedBoard, setselectedBoard] = useState("");
    const [selectedClass, setselectedClass] = useState("");
    const [focusedTextbox, setfocusedTextbox] = useState(null);
    const handleFocus = (txtinputName) => {
        setfocusedTextbox(txtinputName);
    };
    const handleBlur = () => {
        setfocusedTextbox(null);
    };
    return (
        <View style={styles.container}>
            <Image source={require('../src/images/logo.png')} style={styles.logoimg} />
            <Image source={require('../src/images/icon.png')} style={styles.iconimg} />
            <Image source={require('../src/images/icon_bg.png')} style={styles.iconbgimg} />
            <Text style={styles.maintxt}>Select you school board</Text>
            <View style={styles.subcontainer}>
                <SelectDropdown
                    data={board}
                    buttonStyle={[styles.txtbox, focusedTextbox === 'board' && styles.focusedTextInput,]}
                    onFocus={() => handleFocus('board')}
                    onBlur={handleBlur}
                    defaultButtonText='Select Board'
                    buttonTextStyle={styles.selectButtonText}
                    dropdownStyle={{ backgroundColor: "#062E40"}}
                    rowTextStyle={styles.selectRowText}
                    search={true}
                    searchInputStyle={{backgroundColor:"#062E40"}}
                    searchInputTxtStyle={{fontFamily: "Gilroy-Light",color:'#ffffff'}}
                    searchPlaceHolder="Search board"
                    onSelect={(selectedItem_board, index_board) => {
                        console.log(selectedItem_board, index_board) //displays selected board name and its index number
                        setselectedBoard(selectedItem_board)
                    }} />

                <SelectDropdown
                    data={classes}
                    buttonStyle={[styles.txtbox, focusedTextbox === 'class' && styles.focusedTextInput,]}
                    onFocus={() => handleFocus('class')}
                    onBlur={handleBlur}
                    defaultButtonText='Select Class'
                    buttonTextStyle={styles.selectButtonText}
                    dropdownStyle={{ backgroundColor: "#062E40"}}
                    rowTextStyle={styles.selectRowText}
                    onSelect={(selectedItem_class, index_class) => {
                        console.log(selectedItem_class, index_class) //displays selected class name and its index number
                        setselectedClass(selectedItem_class)
                    }} />
                    
                <TouchableHighlight style={styles.button} onPress={() => { navigation.navigate("AppTour") }}>
                    <Text style={styles.buttontxt}>Continue</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}
export default BoardDetails;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    subcontainer: {
        backgroundColor: "#002333",
        borderRadius: 15,
        height: 300,
        width: 360,
        marginTop: 10,
        alignItems: 'center'
    },
    logoimg: {
        width: 250,
        height: 250,
        marginTop: 10
    },
    iconbgimg: {
        width: 250,
        height: 250,
        marginTop: -170,
        zIndex: -1, // Set a lower zIndex to place it behind the front image
    },
    iconimg: {
        width: 120,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
    },
    maintxt: {
        fontSize: 20,
        color: "#002333",
        fontFamily: "Gilroy-Bold",
        marginTop: 40,
    },
    txtbox: {
        borderColor: "#13394A",
        borderWidth: 1,
        height: 51,
        width: 300,
        marginTop: 30,
        borderRadius: 5,
        backgroundColor: "#062E40",
        fontFamily: "Gilroy-Light",
    },
    focusedTextInput: {
        borderColor: "#007345",
        borderWidth: 2,
        height: 51,
        width: 300,
        marginTop: 32,
        borderRadius: 5,
        backgroundColor: "#062E40",
        fontFamily: "Gilroy-Light",
    },
    selectButtonText: {
        backgroundColor: "#062E40",
        fontFamily: "Gilroy-Light",
        color: '#fff',
        fontSize: 14,
        textAlign: 'left',
    },
    selectRowText: {
        backgroundColor: "#062E40",
        fontFamily: "Gilroy-Light",
        color: '#ffffff',
        fontSize: 14,
    },
    button: {
        width: 300,
        backgroundColor: '#00C458',
        height: 45,
        marginTop: 30,
        borderRadius: 4,
        justifyContent: 'center'
    },
    buttontxt: {
        fontSize: 14,
        color: '#FFFFFF',
        textAlign: 'center',
        fontFamily: "Gilroy-Medium"
    },
})