import { StatusBar } from 'expo-status-bar';
import  {useState} from 'react';
import { Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
// import RNBounceable from "@freakycoder/react-native-bounceable";

export default function App() {
  const [password,setPassword]=useState('')
  const [passwordLen,setPasswordLen]=useState(null)
  const [addNumeric,setAddNumeric]=useState(false)
  const [addLowerCase,setAddLowerCase]=useState(false)
  const [addUpperCase,setAddUpperCase]=useState(false)
  const [addSpecialChar,setAddSpecialChar]=useState(false)
  

  const generatePassword=()=>{
   
    //Delete previously generated password
    setPassword('')
    let numeric='1234567890';
    let upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerCase='abcdefghijklmnopqrstuvwxyz';
    let specialChar='@#$&*'
    let tempPassword='';
    if(passwordLen>=4){
      if(addNumeric){
        tempPassword=tempPassword+numeric;
      }
      if(addLowerCase){
        tempPassword=tempPassword+lowerCase;
      }
      if(addUpperCase){
        tempPassword=tempPassword+upperCase
      }
      if(addSpecialChar){
        tempPassword=tempPassword+specialChar
      }
      
      let madePassword=''
      for (let i = 0; i < passwordLen; i++) {
        let randNum=Math.floor(Math.random()*tempPassword.length);
        let getChar=tempPassword.charAt(randNum);
        madePassword=madePassword+getChar
       
      }
      setPassword(madePassword)
      console.log(password);
      
    }else{
      alert('Password length should be greater or equal to 4')
    }

  
  }
  return (
    <SafeAreaView style={styles.theme}>
      <View style={styles.container}>
        {/* <StatusBar style="dark" /> */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Password Generator</Text>
        </View>
        <View style={styles.passLength}>
          <Text style={styles.passLengthText}>Password Length</Text>
          <TextInput style={styles.passLengthInput}
          placeholder='EX:8'
            keyboardType='numeric'
            onChangeText={(text)=>setPasswordLen(parseInt(text,10))}>
            
          </TextInput>

        </View>
        <View style={styles.passTypes}>
          <Text style={styles.passTypesHeader}>Select</Text>
          <View style={styles.passType}>
            <Text>Add Numeric</Text>
            <BouncyCheckbox
              size={25}
              fillColor="green"
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: "red" }}
              innerIconStyle={{ borderWidth: 2 }}
              onPress={(isChecked) => {setAddNumeric(isChecked) }}
            />
          </View>
          <View style={styles.passType}>
            <Text>Add lower case letter</Text>
            <BouncyCheckbox
              size={25}
              fillColor="green"
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: "red" }}
              innerIconStyle={{ borderWidth: 2 }}
              onPress={(isChecked) => {setAddLowerCase(isChecked)}}
            />
          </View>
          <View style={styles.passType}>
            <Text>Add uppercase letter</Text>
            <BouncyCheckbox
              size={25}
              fillColor="green"
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: "red" }}
              innerIconStyle={{ borderWidth: 2 }}
              onPress={(isChecked) => { setAddUpperCase(isChecked)}}
            />
          </View>
          <View style={styles.passType}>
            <Text>Add special characters</Text>
            <BouncyCheckbox
              size={25}
              fillColor="green"
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: "red" }}
              innerIconStyle={{ borderWidth: 2 }}
              onPress={(isChecked) => {setAddSpecialChar(isChecked) }}
            />
          </View>
        </View>
        <View style={styles.result}>
          <TouchableOpacity style={styles.generatePassBtn}
          onPress={generatePassword}
          >
            <Text>Generate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.resetBtn}
          onPress={()=>setPassword('')}
          >
          <Text>
            Reset
          </Text>
          </TouchableOpacity>
        </View>
      { password.length>0 && <View style={styles.passwordContainer}>
          <Text style={styles.passwordText}
            selectable={true}
          >{password}</Text>
        </View>}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
  header: {
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: 'serif',
    fontWeight: 'bold',
  },
  passLength: {
    // backgroundColor:'gray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 9,
    margin: 9,
  },
  passLengthText: {
    fontFamily: 'sans-serif',
    fontWeight:'bold'
  },
  passLengthInput: {
    backgroundColor: 'gray',
    color: 'white',
    paddingHorizontal: 4,
    width: 60,
    borderColor: 'black',
    borderRadius: 5,
    alignContent: 'center'

  },
  passTypesHeader: {
    fontSize: 20,
    color: 'green',
    borderBottomWidth: 3,
    borderColor: 'gray',
    fontStyle:'italic'
  },
  passTypes: {
    padding: 9,
    margin: 9,
  },
  passType: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    padding: 5,
    borderColor: 'gray',
    borderRadius: 4,
    borderWidth: 2,
  },
  result: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 9,
    margin: 9,
  },
  generatePassBtn: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 7,
    shadowColor: 'green',
    borderColor:'black',
    borderWidth:2,
    

  },
  resetBtn:{
    backgroundColor:'blue',
    paddingHorizontal:20,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center'
  },
  passwordContainer:{
    alignItems:'center',
    justifyContent:'center',
    borderColor:'meroon',
    borderWidth:2,
    padding:3,
  },
  passwordText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'pink',
    // borderColor:'green',
    // borderWidth:1,
    justifyContent:'center',
    verticalAlign:'middle',
    padding:5,
    borderRadius:7,
  }


});
