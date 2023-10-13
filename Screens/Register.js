import React, {    useState } from 'react';
import { View, Image, TextInput, Text, TouchableHighlight, StyleSheet, Alert } from 'react-native';
function Register({ navigation }) {
  const [number, setNumber] = useState(null);
  const [focusedTextbox, setfocusedTextbox] = useState(null);

  const handleFocus = (txtinputName) => {
    setfocusedTextbox(txtinputName);
  };
  const handleBlur = () => {
    if (number === null || number.trim() === '') {
      setNumber(null);
    }
    setfocusedTextbox(null);
  };
  const updateNumber = (mobnumber) => {
    if (mobnumber === null) {
      Alert.alert("Enter your mobile number")
    }
    else {
      setNumber("+91" + mobnumber);
    }
  };
  function mobnumVerify() {
    if (number === null) {
      Alert.alert("Enter your mobile number")
    }
    else {
      navigation.navigate("OTPVerify", { mobnumber: number })
    }
  }
  return (
    <View style={styles.container}>
      <Image source={require('../src/images/logo.png')} style={styles.img} />
      <Text style={styles.maintxt}>Enter your mobile number</Text>
      <Text style={styles.subtxt}>We will send you an OTP to verify.</Text>
      <View style={styles.subcontainer}>
        <View style={styles.mobcontainer}>
          <TextInput style={styles.txtbox_code}>+91</TextInput>
          <TextInput style={[
            styles.txtbox_mob,
            focusedTextbox === 'phno' && styles.focusedTextInput,
          ]}
            onFocus={() => handleFocus('phno')}
            onBlur={handleBlur}
            placeholder='Mobile number'
            placeholderTextColor="#446270" keyboardType='numeric' maxLength={10}
            onChangeText={(mobnumber) => updateNumber(mobnumber)}></TextInput>
        </View>
        <TouchableHighlight style={styles.button} onPress={mobnumVerify}>
          <Text style={styles.buttontxt}>Continue</Text>
        </TouchableHighlight>
      </View>
    </View>

  )
}
export default Register;
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
    height: 210,
    width: 360,
    marginTop: 10
  },
  mobcontainer: {
    flexDirection: 'row'
  },
  img: {
    width: 253,
    height: 253,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 180
  },
  maintxt: {
    fontSize: 20,
    color: "#002333",
    fontFamily: "Gilroy-Bold",
    marginTop: 60
  },
  subtxt: {
    fontSize: 14,
    fontWeight: 'normal',
    color: "#9F9F9F",
    fontFamily: "Gilroy-Light"
  },
  txtbox_code: {
    borderColor: "#13394A",
    borderWidth: 1,
    height: 51,
    width: 59,
    marginLeft: 25,
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
    marginLeft: 25
  },
  buttontxt: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: "Gilroy-Medium"
  },
  focusedTextInput: {
    borderColor: "#007345",
    borderWidth: 2,
    height: 51,
    width: 244,
    marginTop: 32,
    borderRadius: 5,
    backgroundColor: "#062E40",
    fontFamily: "Gilroy-Light",
},
})