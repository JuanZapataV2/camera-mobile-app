import React, {useEffect, useState} from 'react';
import {
  Alert,
  PermissionsAndroid,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  BackHandler,
  Button,
  Dimensions,
} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';


function App() {
  const [isPermitted, SetIsPermitted] = useState(false);
  const devices = useCameraDevices()
  const device = devices.back
  const {height} = Dimensions.get('window');

  const RequestCamaraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        // {
        //   title: 'Permiso Camara',
        //   message: 'Aplicaciión necesita acceso a ala camara'
        // },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const OpenCamara = async () => {
    if (await RequestCamaraPermission()) {
      SetIsPermitted(true);
    } else console.log('ERROR');
  };

  const close = async () => {
    BackHandler.exitApp();
  };

  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      paddingHorizontal: 10,
      backgroundColor: '#3E8989'
    },
    button1: {
      alignItems: "center",
      padding: 10,
      width: '40%',
      justifyContent: 'center',
      backgroundColor: '#D4CDF4',
      borderRadius: 15,
      marginTop: height * .4,
      marginLeft: 120
      

    },
    button2: {
      alignItems: "center",
      padding: 10,
      marginTop: 20,
      width: '40%',
      justifyContent: 'center',
      backgroundColor: '#F45B69',
      borderRadius: 15,
      marginBottom: height * .45,
      marginLeft: 120

    },
  });

  if (device == null) {
    return "No se encuentra ninguna cámara disponible";
  }
  return (
    <Camera
        style={StyleSheet.absoluteFillObject}
        device={device}
        isActive={true}
    /> 

    //   <View>
    // {isPermitted ? (
    //     <Camera
    //       style={StyleSheet.absoluteFillObject}
    //       device={device}
    //       isActive={true}
    //     /> 
    //   ) : (
    //     <Camera
    //       style={StyleSheet.absoluteFillObject}
    //       device={device}
    //       isActive={true}
    //     />
    //   )}

    //   </View>
      
  
  );
};

export default App;
