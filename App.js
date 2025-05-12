import React, { useState, useRef} from "react";
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, Pressable, TouchableOpacity, StatusBar, Alert, PanResponder, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from 'expo-font';

export default function App() {
  const [mensaje, setMensaje] = useState("");
  const [presionado, setPresionado] = useState(false)

  const cambiarColor = () => {
    setPresionado(!presionado); // Alternar el valor de presionado
  };
  const contactar = () => {
    if(mensaje==""){
      Alert.alert("Mensaje enviado", "No se recibió ningún mensaje");
    }else {Alert.alert("Mensaje enviado", mensaje);}
  };

   const [fuentes] = useFonts({
    "Poppins": require("./assets/fonts/Poppins-Black.ttf"),
    "PoppinsMedium": require("./assets/fonts/Poppins-Medium.ttf")
  });
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false } 
      ),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false, 
        }).start();
      },
    })
  ).current;
  
  return (
    <ImageBackground source={require("./assets/background.jpg")} style={styles.imagenFondo}>
      <StatusBar barStyle="light-content"/>
      <SafeAreaView style={styles.safeContainer}>
      <View style={styles.ViewGeneral}>
        <Animated.View style={[styles.container, {transform: [{translateX: pan.x}, {translateY: pan.y}] }]} {...panResponder.panHandlers} >
          <Image source={require("./assets/aaa.png")} style={styles.profileImage} />
          <Text style={styles.nombre}>Ian Berman</Text>
          <Text style={styles.titulo}>Sales Manager</Text>
          <TextInput style={styles.input} placeholder="Ingresá tu mensaje :)" value={mensaje} onChangeText={setMensaje}/>
          <TouchableOpacity style={styles.boton} onPress={contactar}><Text style={styles.textoBoton}>Contactar</Text></TouchableOpacity>
          <Pressable onPress={cambiarColor}><Text style={[styles.textoVerPerfil, presionado && styles.textoPresionado]}>Ver Perfil</Text></Pressable>
      </Animated.View>
      </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imagenFondo: {
    flex: 1,
  },
  safeContainer: {
    flex: 1
  },
  ViewGeneral:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',    
  },
  container: {
    width: 250,
    height: 380,
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15
  },
  nombre: {
    fontFamily: "Poppins",
    fontSize: 20,
    color: "black"
  },
  titulo: {
    fontFamily: "PoppinsMedium",
    fontSize: 13,
    color: "black",
    marginBottom: 30
  },
  input: {
    fontFamily: "PoppinsMedium",
    width:"80%",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 15
  },
  boton: {
    backgroundColor: "#004987",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10
  },
  textoBoton: {
    fontFamily: "PoppinsMedium",
    fontSize:15,
    color: "white", 
    fontWeight: "bold"
  },
  verPerfil: {
    padding: 10,
    borderRadius: 8
  },
  textoVerPerfil: {
    borderRadius: 5,
    backgroundColor: "black",
    fontFamily: "PoppinsMedium",
    fontWeight: "bold",
    fontSize: 18,
    color: "white", 
  },
  textoPresionado: {
    color: "white",
    backgroundColor: "grey"
  }
});
