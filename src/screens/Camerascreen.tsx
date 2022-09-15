import React from 'react'

import { StyleSheet, View, Button, Alert, Text, SafeAreaView } from 'react-native'

import App from '../../App'

export const Camerascreen = () => {
  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
    />
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff'
    }
})



