import React, { useState } from 'react';
import { View, Image, TextInput, Text, TouchableHighlight, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
function StudentDetails({ navigation }) {
    const states = [
        "Kerala",
        "Tamil Nadu",
        "Karnataka",
        "Andhra Pradesh",
        "Andaman and Nicobar Islands",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chandigarh",
        "Chhattisgarh",
        "Dadra and Nagar Haveli",
        "Daman and Diu",
        "Delhi",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Lakshadweep",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Puducherry",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal",
    ];
    const [sname, setSname] = useState("")
    const [smail, setSmail] = useState("")
    const [selectedState, setselectedState] = useState("")
    const [spin, setSpin] = useState("")
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
            <Text style={styles.maintxt}>Student details</Text>
            <View style={styles.subcontainer}>
                <View style={styles.detailscontainer}>
                    <TextInput style={[
                        styles.txtbox,
                        focusedTextbox === 'name' && styles.focusedTextInput,
                    ]}
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        onChangeText={setSname}
                        value={sname}
                        placeholder='Full Name' ></TextInput>

                    <TextInput style={[
                        styles.txtbox,
                        focusedTextbox === 'mail' && styles.focusedTextInput,
                    ]}
                        onFocus={() => handleFocus('mail')}
                        onBlur={handleBlur}
                        onChangeText={setSmail}
                        value={smail}
                        placeholder='Email' keyboardType='email-address'></TextInput>

                    <SelectDropdown
                        data={states}
                        buttonStyle={[styles.txtbox, focusedTextbox === 'state' && styles.focusedTextInput,]}
                        onFocus={() => handleFocus('state')}
                        onBlur={handleBlur}
                        defaultButtonText='Select State'
                        buttonTextStyle={styles.selectButtonText}
                        dropdownStyle={{ backgroundColor: "#062E40" }}
                        rowTextStyle={styles.selectRowText}
                        search={true}
                        searchInputStyle={{ backgroundColor: "#062E40" }}
                        searchInputTxtStyle={{ fontFamily: "Gilroy-Light", color: '#ffffff' }}
                        searchPlaceHolder="Search state"
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                            setselectedState(selectedItem)
                        }} />

                    <TextInput style={[styles.txtbox,focusedTextbox === 'pin' && styles.focusedTextInput,]}
                        onFocus={() => handleFocus('pin')}
                        onBlur={handleBlur}
                        onChangeText={setSpin}
                        value={spin}
                        placeholder='Pin Code' keyboardType='numeric' maxLength={6}></TextInput>
                </View>
                <TouchableHighlight style={styles.button} onPress={() => { navigation.navigate("BoardDetails") }}>
                    <Text style={styles.buttontxt}>Register</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}
export default StudentDetails;
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
        height: 480,
        width: 360,
        marginTop: 10,
        alignItems: 'center'
    },
    detailscontainer: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    logoimg: {
        width: 200,
        height: 200,
        marginTop: 20
    },
    iconbgimg: {
        width: 150,
        height: 150,
        marginTop: -150,
        zIndex: -1, // Set a lower zIndex to place it behind the front image
    },
    iconimg: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    maintxt: {
        fontSize: 20,
        color: "#002333",
        fontFamily: "Gilroy-Bold",
        marginTop: 20,
    },
    txtbox: {
        borderColor: "#13394A",
        borderWidth: 1,
        height: 51,
        width: 300,
        marginTop: 32,
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
        marginTop: 20,
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