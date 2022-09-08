import React, { useEffect, useState } from 'react';
import { Alert, PermissionsAndroid, SafeAreaView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Camera, useCameraDevices  } from 'react-native-vision-camera';

const App = () => {
 
  const [isPermitted, SetIsPermitted] = useState(false)
  const devices = useCameraDevices('wide-angle-camera')
  const device = devices.back!

  const RequestCamaraPermission = async() => {
    try{
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
        // {
        //   title: 'Permiso Camara',
        //   message: 'Aplicaciión necesita acceso a ala camara'
        // },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED
    } catch (err){
      console.warn(err);
      return false;
    }
  }

  const OpenCamara = async() =>{
    if( await RequestCamaraPermission()){
      SetIsPermitted(true)
    } else console.log('ERROR');
  }
  
  return(
    
    <SafeAreaView>
      {isPermitted? (
        <View>   
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
          />
        </View>
      ):(
        <View>
          <Text> CAMARA APP</Text>
          <TouchableHighlight onPress={OpenCamara}>
            <Text>ABRIR CAMARA</Text>
          </TouchableHighlight>
        </View>
      )}
    </SafeAreaView>
  )
   
}

export default App
