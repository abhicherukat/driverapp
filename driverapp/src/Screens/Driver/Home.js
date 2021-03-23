import React,{useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image
} from 'react-native';
import * as Font from '../../Utils/Typography';
import Icon from 'react-native-vector-icons/Ionicons';

const Login = ({navigation}) => {  

    const [profileCreated, setProfileCreated] = useState(false);
    const [createPage, setCreatePage] = useState(false);
    const [editPageStatus, setEditPageStatus] = useState(false);

    const [name, setName] = useState(false);
    const [address, setAddress] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [blood, setBlood] = useState(false);
    const [regNo, setRegNo] = useState(false);
    const [isImage, setIsImage] = useState(false);

  const goToCreatePage = () =>{

    setCreatePage(true);
  }

     const accountCreationStatus= () =>{

        setProfileCreated(true);
        setCreatePage(false);
     }

     const editCondtion= () =>{
        setEditPageStatus(true);
     }
  
  return (  <>

    <ScrollView>

  <View  style={styles.container}>
        <View
        style={{

            width:'90%',
            marginTop:20,
        }}
        >
            <Text
            
            style={{

                fontSize: 25,
                color:'#212529',
                fontFamily: Font.FF_LATO_BOLD,
                fontWeight:'500',
                fontStyle:'normal',
                textAlign:'center'
            }}>
                Welcome
                </Text>
            </View>

       {profileCreated  ?  (<>
       


       {editPageStatus  ?  (<>
       
       
        <View
            style={{

                paddingTop:24,
                width:'90%',
            }}
            >
          <Text
               style={{

                fontSize: 20,
                color:'#212529',
                fontFamily: Font.FF_LATO_REGULAR,
                fontWeight:'400',
                fontStyle:'normal',
                paddingBottom:15
            }}
            >
                Name
                </Text>

            <TextInput
            style={{
                width:'100%',
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

              


            }}
            value={name}

            onChangeText={setName}

            />
            </View>
         
            <View
            style={{

                paddingTop:24,
                width:'90%',
            }}
            >
          <Text
               style={{

                fontSize: 20,
                color:'#212529',
                fontFamily: Font.FF_LATO_REGULAR,
                fontWeight:'400',
                fontStyle:'normal',
                paddingBottom:15
            }}
            >
                Address
                </Text>

            <TextInput
            style={{
                width:'100%',
                height:156,
                backgroundColor:'#E9ECEF',
                borderRadius:8,
                borderWidth:1,
                borderColor:'#CED4DA',

                fontSize: 25,
                color:'#ADB5BD',
                fontFamily: Font.FF_LATO_REGULAR,
                fontWeight:'400',
                fontStyle:'normal',
                // textAlign:'center'

            }}

            value={address}
            onChangeText={setAddress}

            />
            </View>
         
            <View
            style={{

                paddingTop:24,
                width:'90%',
            }}
            >
          <Text
               style={{

                fontSize: 20,
                color:'#212529',
                fontFamily: Font.FF_LATO_REGULAR,
                fontWeight:'400',
                fontStyle:'normal',
                paddingBottom:15
            }}
            >
                Mobile Number
                </Text>

            <TextInput
            style={{
                width:'100%',
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

            }}
            keyboardType='numeric'

            value={mobile}

            onChangeText={setMobile}

            />
            </View>
         
            <View
            style={{

                paddingTop:24,
                width:'90%',
            }}
            >
          <Text
               style={{

                fontSize: 20,
                color:'#212529',
                fontFamily: Font.FF_LATO_REGULAR,
                fontWeight:'400',
                fontStyle:'normal',
                paddingBottom:15
            }}
            >
                Blood Group
                </Text>

            <TextInput
            style={{
                width:'100%',
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

            }}

            value={blood}

            onChangeText={setBlood}

            />
            </View>
         

            <View
            style={{

                paddingTop:24,
                width:'90%',
            }}
            >
          <Text
               style={{

                fontSize: 20,
                color:'#212529',
                fontFamily: Font.FF_LATO_REGULAR,
                fontWeight:'400',
                fontStyle:'normal',
                paddingBottom:15
            }}
            >
                Vehicle Registration Number
                </Text>

            <TextInput
            style={{
                width:'100%',
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

            }}
            
            value={regNo}

            onChangeText={setRegNo}

            />
            </View>
         

            <View
            style={{

                paddingTop:24,
                width:'90%',
            }}
            >
       <TouchableOpacity
                // onPress={toggleModal}
                style={{
                  width: '100%',
                  height: 200,
                //   backgroundColor: Colors.Card_primary,
                  borderRadius: 13,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {isImage ? (
                  <Image
                    style={{
                      flex: 1,
                      width: '100%',
                      height: '100%',
                      borderRadius: 8,
                      resizeMode: 'cover',
                    }}
                    resizeMode="cover"
                    source={{
                      uri: 'data:image/png;base64,' + photo,
                    }}
                  />
                ) : (
                    <Icon
                      name={'ios-image'}
                      size={80}
                    //   color={Colors.T_SECONDARY}
                    />
                  )}
              </TouchableOpacity>
            </View>
            
            <View
            style={{

                paddingTop:24,
                width:'90%',
                justifyContent:'center',
                alignItems:'center'
            }}
            >
       

            <TouchableOpacity
            style={{
                width:'50%',
                height:56,
                backgroundColor:'#FFC700',
                borderRadius:8,
                borderWidth:1,
                borderColor:'#CED4DA',

                justifyContent:'center',
                alignItems:'center',

            }}

            // onPress={accountCreationStatus}

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
             Update
                </Text>

                </TouchableOpacity>
            </View>
            

       
       </>)  :  (<>
       
        <TouchableOpacity
        style={{

            width:'90%',
            marginTop:40,
            height:'30%',
            backgroundColor:'#FFC700',
            borderRadius:8,
            borderWidth:1,
            borderColor:'#CED4DA',
        justifyContent:'center'

        }}

        onPress={editCondtion}
        >
            <Text
            
            style={{

                fontSize: 25,
                color:'#212529',
                fontFamily: Font.FF_LATO_BOLD,
                fontWeight:'500',
                fontStyle:'normal',
                textAlign:'center'
            }}>
                Edit Profile
                </Text>
            </TouchableOpacity>


       </>)}
         </>)  :  (<>
         
         
         
         
         
         
         </>)}
        
         

         {createPage  ?  (<>
         

         
            <View
            style={{

                paddingTop:24,
                width:'90%',
            }}
            >
          <Text
               style={{

                fontSize: 20,
                color:'#212529',
                fontFamily: Font.FF_LATO_REGULAR,
                fontWeight:'400',
                fontStyle:'normal',
                paddingBottom:15
            }}
            >
                Name
                </Text>

            <TextInput
            style={{
                width:'100%',
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

              


            }}

            onChangeText={setName}

            />
            </View>
         
            <View
            style={{

                paddingTop:24,
                width:'90%',
            }}
            >
          <Text
               style={{

                fontSize: 20,
                color:'#212529',
                fontFamily: Font.FF_LATO_REGULAR,
                fontWeight:'400',
                fontStyle:'normal',
                paddingBottom:15
            }}
            >
                Address
                </Text>

            <TextInput
            style={{
                width:'100%',
                height:156,
                backgroundColor:'#E9ECEF',
                borderRadius:8,
                borderWidth:1,
                borderColor:'#CED4DA',

                fontSize: 25,
                color:'#ADB5BD',
                fontFamily: Font.FF_LATO_REGULAR,
                fontWeight:'400',
                fontStyle:'normal',
                // textAlign:'center'

            }}
            onChangeText={setAddress}

            />
            </View>
         
            <View
            style={{

                paddingTop:24,
                width:'90%',
            }}
            >
          <Text
               style={{

                fontSize: 20,
                color:'#212529',
                fontFamily: Font.FF_LATO_REGULAR,
                fontWeight:'400',
                fontStyle:'normal',
                paddingBottom:15
            }}
            >
                Mobile Number
                </Text>

            <TextInput
            style={{
                width:'100%',
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

            }}
            keyboardType='numeric'

            onChangeText={setMobile}

            />
            </View>
         
            <View
            style={{

                paddingTop:24,
                width:'90%',
            }}
            >
          <Text
               style={{

                fontSize: 20,
                color:'#212529',
                fontFamily: Font.FF_LATO_REGULAR,
                fontWeight:'400',
                fontStyle:'normal',
                paddingBottom:15
            }}
            >
                Blood Group
                </Text>

            <TextInput
            style={{
                width:'100%',
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

            }}

            onChangeText={setBlood}

            />
            </View>
         

            <View
            style={{

                paddingTop:24,
                width:'90%',
            }}
            >
          <Text
               style={{

                fontSize: 20,
                color:'#212529',
                fontFamily: Font.FF_LATO_REGULAR,
                fontWeight:'400',
                fontStyle:'normal',
                paddingBottom:15
            }}
            >
                Vehicle Registration Number
                </Text>

            <TextInput
            style={{
                width:'100%',
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

            }}


            onChangeText={setRegNo}

            />
            </View>
         

               <View
            style={{

                paddingTop:24,
                width:'90%',
                justifyContent:'center',
                alignItems:'center'
            }}
            >
       

            <TouchableOpacity
            style={{
                width:'50%',
                height:56,
                backgroundColor:'#FFC700',
                borderRadius:8,
                borderWidth:1,
                borderColor:'#CED4DA',

                justifyContent:'center',
                alignItems:'center',

            }}

            onPress={accountCreationStatus}

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
             Submit
                </Text>

                </TouchableOpacity>
            </View>
            

         </>)  :  (<>
            <TouchableOpacity
        style={{

            width:'90%',
            marginTop:40,
            height:'30%',
            backgroundColor:'#FFC700',
            borderRadius:8,
            borderWidth:1,
            borderColor:'#CED4DA',
        justifyContent:'center'

        }}

        // onPress={goToCreatePage setCreatePage(true)}

        onPress={goToCreatePage}
  
        >
            <Text
            
            style={{

                fontSize: 25,
                color:'#212529',
                fontFamily: Font.FF_LATO_BOLD,
                fontWeight:'500',
                fontStyle:'normal',
                textAlign:'center'
            }}>
                Create Profile
                </Text>
            </TouchableOpacity>

         
         </>)}
        
          
      </View>



    </ScrollView>
  </>);
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
