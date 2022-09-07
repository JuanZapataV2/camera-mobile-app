import React, { useEffect, useState } from 'react';
import { Alert, PermissionsAndroid, SafeAreaView, Text, TouchableHighlight, View } from 'react-native';
import { Camera, CameraType, CameraScreen } from 'react-native-camera-kit';

const App = () => {
 
  const [isPermitted, setIsPermitted] = useState(false)
  var camera:any;

  const requestCamaraPermission = async() => {
    try{
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMARA
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

  const openCamara = async() =>{
    if( await requestCamaraPermission()){
      setIsPermitted(true)
    } else console.log('ERROR');
  }

  return(
    <SafeAreaView>
      {isPermitted? (
        <View>
          <Camera
            ref={(ref:any) => (camera = ref)}
            cameraType={CameraType.Back} // front/back(default)
          />
        </View>
      ):(
        <View>
          <Text> CAMARA</Text>
          <TouchableHighlight onPress={openCamara}>
            <Text>ABRIR CAMARA</Text>
          </TouchableHighlight>
        </View>
      )}
    </SafeAreaView>
  )
   
}

export default App
