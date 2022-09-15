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
import { NavigationContainer } from '@react-navigation/native';
<<<<<<< Updated upstream
import { createStackNavigator } from '@react-navigation/stack';
=======
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
>>>>>>> Stashed changes
import { Camerascreen } from './src/screens/Camerascreen';


const App = () => {
  const [isPermitted, SetIsPermitted] = useState(false);
  const devices = useCameraDevices()
  const device = devices.back
  const {height} = Dimensions.get('window');
<<<<<<< Updated upstream
  const Stack = createStackNavigator();
=======
  const Stack = createNativeStackNavigator ();
  
>>>>>>> Stashed changes
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
    return false;
  }

  return (
        <View style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator>
             <Stack.Screen
               name="Camera"
                component={Camerascreen}
             />
           </Stack.Navigator>
         </NavigationContainer>
<<<<<<< Updated upstream
          <TouchableHighlight onPress={this.props.navigation.navigate('Camera')}>
            <View style={styles.button1}>
              <Text>Abrir Cámara</Text>
            </View>
          </TouchableHighlight>
=======
          
>>>>>>> Stashed changes
          
          <TouchableHighlight onPress={close}>
            <View style={styles.button2}>
              <Text>Salir</Text>
            </View>
          </TouchableHighlight>
        </View>  
  );
};

export default App;
