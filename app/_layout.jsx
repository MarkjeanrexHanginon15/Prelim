import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router';
import { useFonts } from 'expo-font'
import { useEffect } from 'react';
import { SplashScreen } from 'expo-router';


SplashScreen.preventAutoHideAsync();

const MainLayout = () => {

  const [fontsLoaded, error] = useFonts({
    "ComicNeue-Bold": require("../assets/fonts/ComicNeue-Bold.ttf"),
    "ComicNeue-Light": require("../assets/fonts/ComicNeue-Light.ttf"),
    "ComicNeue-Regular": require("../assets/fonts/ComicNeue-Regular.ttf"),

  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }


  return (

    // <Slot></Slot>
    <Stack>
      <Stack.Screen name="index" options={{
        headerShown: false
      }} />
    </Stack>


  )
}

export default MainLayout