import React, { useEffect, useState } from 'react';
import { Alert, PermissionsAndroid, SafeAreaView, Text, TouchableHighlight, View } from 'react-native';
import { Camera  } from 'react-native-vision-camera';

const App = () => {
 
  const [isPermitted, SetIsPermitted] = useState(false)
  //var camera:any;

  const RequestCamaraPermission = async() => {
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

  const OpenCamara = async() =>{
    if( await RequestCamaraPermission()){
      SetIsPermitted(true)
    } else console.log('ERROR');
  }
  
  const help = async() =>{
    {/////////////////NO SE COMO USAR AWAITS///////////////////
      const devices = await Camera.getAvailableCameraDevices()
      const sorted = devices.sort()
      
      return {
        back: sorted.find((d) => d.position === "back"),
        front: sorted.find((d) => d.position === "front")
      }}
  }

  const devices = help()

  return(
    
    <SafeAreaView>
      {isPermitted? (
        <View>   
          <Camera
            device={devices.back}
            isActive={true}
          />
        </View>
      ):(
        <View>
          <Text> CAMARA</Text>
          <TouchableHighlight onPress={OpenCamara}>
            <Text>ABRIR CAMARA</Text>
          </TouchableHighlight>
        </View>
      )}
    </SafeAreaView>
  )
   
}

export default App
