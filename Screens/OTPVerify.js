import React, { useEffect, useRef } from 'react';
import { View, Image, TextInput, Text, TouchableHighlight, StyleSheet } from 'react-native';
function OTPVerify({ route, navigation }) {
  const { mobnumber } = route.params;
  const codeInput1Ref = useRef(null);
  const codeInput2Ref = useRef(null);
  const codeInput3Ref = useRef(null);
  const codeInput4Ref = useRef(null);
  const codeInput5Ref = useRef(null);
  const codeInput6Ref = useRef(null);
useEffect(()=>{
  codeInput1Ref?.current?.focus();
},[])

  return (
    <View style={styles.container}>
      <Image source={require('../src/images/logo.png')} style={styles.logoimg} />
      <Image source={require('../src/images/icon.png')} style={styles.iconimg} />
      <Image source={require('../src/images/icon_bg.png')} style={styles.iconbgimg} />
      <Text style={styles.maintxt}>Verification code</Text>
      <Text style={styles.subtxt}>Please type the verification code sent to</Text>
      <Text style={styles.number}>{mobnumber}</Text>
      <View style={styles.subcontainer}>
        <View style={styles.mobcontainer}>
          <TextInput style={styles.txtbox_code} ref={codeInput1Ref} keyboardType='numeric' maxLength={1}
          onChangeText={(text) => {
            if (text.length === 1) {
              codeInput2Ref.current.focus();
            }
            }}></TextInput>
          <TextInput style={styles.txtbox_code} ref={codeInput2Ref} keyboardType='numeric' maxLength={1}
          onChangeText={(text) => {
            if (text.length === 1) {
              codeInput3Ref.current.focus();
            }}}></TextInput>
          <TextInput style={styles.txtbox_code} ref={codeInput3Ref} keyboardType='numeric' maxLength={1}
          onChangeText={(text) => {
            if (text.length === 1) {
              codeInput4Ref.current.focus();
            }}}></TextInput>
          <TextInput style={styles.txtbox_code} ref={codeInput4Ref} keyboardType='numeric' maxLength={1}
          onChangeText={(text) => {
            if (text.length === 1) {
              codeInput5Ref.current.focus();
            }}}></TextInput>
          <TextInput style={styles.txtbox_code} ref={codeInput5Ref} keyboardType='numeric' maxLength={1}
          onChangeText={(text) => {
            if (text.length === 1) {
              codeInput6Ref.current.focus();
            }}}></TextInput>
          <TextInput style={styles.txtbox_code} ref={codeInput6Ref} keyboardType='numeric' maxLength={1}
          onChangeText={(text) => {
            if (text.length === 1) {
              navigation.navigate("StudentDetails")
            }}}></TextInput>
        </View>
        <TouchableHighlight style={styles.button} onPress={() => { navigation.navigate("Register") }}>
          <Text style={styles.buttontxt}>Resend OTP</Text>
        </TouchableHighlight>
        <Text style={styles.subtxt}>Resend after 28s</Text>
        <View style={styles.phoneContainer}>
          <Image source={require('../src/images/phone.png')} style={styles.phoneImage} />
          <Text style={styles.contactText}>Contact Us</Text>
        </View>
      </View>
    </View>
  )
}
export default OTPVerify;
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
    height: 225,
    width: 360,
    marginTop: 20
  },
  mobcontainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  logoimg: {
    width: 253,
    height: 253,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -50
  },
  iconbgimg: {
    width: 200,
    height: 200,
    marginTop: -140,
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
    marginTop: 80
  },
  subtxt: {
    fontSize: 14,
    fontWeight: 'normal',
    color: "#9F9F9F",
    fontFamily: "Gilroy-Light",
    alignSelf: 'center',
    marginTop: 3
  },
  number: {
    fontSize: 15,
    color: "#002333",
    fontFamily: "Gilroy-Medium"
  },
  txtbox_code: {
    borderColor: "#13394A",
    borderWidth: 1,
    height: 51,
    width: 47,
    marginRight: 8,
    marginTop: 32,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: "#062E40",
    fontFamily: "Gilroy-Light"
  },
  txtbox_mob: {
    borderColor: "#13394A",
    borderWidth: 1,
    height: 51,
    width: 244,
    marginLeft: 32,
    marginTop: 32,
    borderRadius: 5,
    fontFamily: "Gilroy-Light",
    backgroundColor: "#062E40",
    marginLeft: 8
  },
  button: {
    width: 311,
    backgroundColor: '#00C458',
    height: 45,
    marginTop: 20,
    justifyContent: 'center',
    borderRadius: 4,
    marginLeft: 20
  },
  buttontxt: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: "Gilroy-Medium"
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contactText: {
    fontSize: 14,
    color: '#00C458',
    textAlign: 'center',
    fontFamily: "Gilroy-Medium",
    marginTop: 20,
  },
  phoneImage: {
    width: 11.16,
    height: 15.46,
    marginRight: 10,
    marginTop: 20
  }
})