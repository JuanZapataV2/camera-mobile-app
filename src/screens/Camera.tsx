import React from 'react'

import { StyleSheet, View, Alert } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { useCamera } from 'react-native-camera-hooks'
import App from '../../App'

export const Camera = () => {

  const[{cameraRef}, {takePicture}] = useCamera();


  return (
        <View style={styles.container}>
          <RNCamera
            style={{ flex: 1, alignItems: 'center' }}
            ref={cameraRef}
            type={RNCamera.Constants.Type.back}
          />
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black'
    }
})



