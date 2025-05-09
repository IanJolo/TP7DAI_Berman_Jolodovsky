import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';


export default function App() {
  const ImageBack= require("./assets/autitoBarato.jpg")
  return (
    <View style={styles.container}>
      <ImageBackground source={ImageBack} resizeMode='cover' style={{flex: 1}}><Text>¿Lo querés? Lo tenés.</Text></ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage:{
    width: 100
  }
});
