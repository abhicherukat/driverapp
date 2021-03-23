import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';
import * as Font from '../../Utils/Typography';

const Login = ({navigation}) => {  



  const goToHome = () =>{

    navigation.navigate('DashBoard');
  }

  const goToLoginPage = () =>{

    // navigation.navigate('Login');
  }

  
  return (

    <View  style={styles.container}>


           <View
           style={{

            paddingTop:110,
            width:345,
           }}
           >
               <Text
               
               style={{

                fontSize: 16,
                color:'#ADB5BD',
                fontFamily: Font.FF_LATO_REGULAR,
                fontWeight:'400',
                fontStyle:'normal'
            }}
               >

                   Welcome
                   </Text>
           
               </View>

               <View
           style={{

            paddingTop:8,
            width:345,
           }}
           >
               <Text
               
               style={{

                fontSize: 24,
                color:'#212529',
                fontFamily: Font.FF_LATO_REGULAR,
                fontWeight:'400',
                fontStyle:'normal'
            }}
               >

                   Enter your phone number
                   </Text>
           
               </View>
            <View
            style={{

                paddingTop:24
            }}
            >
            <TextInput
            style={{
                width:345,
                height:56,
                backgroundColor:'#E9ECEF',
                borderRadius:8,
                borderWidth:1,
                borderColor:'#CED4DA',

                fontSize: 25,
                color:'#ADB5BD',
                fontFamily: Font.FF_LATO_REGULAR,
                fontWeight:'400',
                fontStyle:'normal',
                textAlign:'center'

            }}

            keyboardType='numeric'
            />
            </View>
             <View
            style={{

                paddingTop:24
            }}
            >
            <TouchableOpacity
        style={{

            width:345,
            height:56,
            borderRadius:8,
            backgroundColor:'#FFC700',
            justifyContent:'center',
            alignItems:'center',

        }}

        onPress={goToHome}
        >

            <Text
               style={{

                fontSize: 16,
                color:'#212529',
                fontFamily: Font.FF_LATO_REGULAR,
                fontWeight:'400',
                fontStyle:'normal'
            }}
            >
                LogIn
                </Text>
            </TouchableOpacity>
             

             </View>
        </View>
     );
};

export default Login;

const styles = StyleSheet.create({

    container:{

        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        // justifyContent:'center'
    }

});
