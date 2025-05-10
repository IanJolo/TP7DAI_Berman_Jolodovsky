import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, Pressable, TouchableOpacity, StatusBar, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from 'expo-font';

export default function App() {
  const [mensaje, setMensaje] = useState("");

  const contactar = () => {
    Alert.alert("Mensaje enviado", mensaje);
  };

  const verPerfil = () => {
    Alert.alert("Perfil", "Nombre: Juan Pérez\nTítulo: Desarrollador Frontend");
  };

   const [fuentes] = useFonts({
    'Poppins': require("./assets/fonts/Poppins-Black.ttf")
  });
  return (
    <ImageBackground source={require("./assets/background.jpg")} style={styles.imagenFondo}>
      <StatusBar barStyle="light-content"/>
      <SafeAreaView style={styles.safeContainer}>
      <View style={styles.ViewGeneral}>
        <View style={styles.container}>
          <Image source={require("./assets/aaa.png")} style={styles.profileImage} />
          <Text style={styles.nombre}>Uriel Jolodovsky</Text>
          <Text style={styles.titulo}>Desarrollador FullStack</Text>
          <TextInput style={styles.input} placeholder="Escribí tu mensaje..." value={mensaje} onChangeText={setMensaje}/>
          <TouchableOpacity style={styles.boton} onPress={contactar}>
            <Text style={styles.textoBoton}>Contactar</Text>
          </TouchableOpacity>

          <Pressable style={({ pressed }) => [styles.verPerfil, { backgroundColor: pressed ? "#cde" : "#eef" }]} onPress={verPerfil}>
            <Text style={styles.textoVerPerfil}>Ver Perfil</Text>
          </Pressable>
        </View>
      </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imagenFondo: {
    flex: 1,
    resizeMode: "cover"
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
    fontSize: 15,
    color: "black",
    marginBottom: 30
  },
  input: {
    width:"80%",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 15
  },
  boton: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10
  },
  textoBoton: {
    fontSize:15,
    color: "black",
    fontWeight: "bold"
  },
  verPerfil: {
    padding: 10,
    borderRadius: 8
  },
  textoVerPerfil: {
    fontWeight: "bold",
    color: "black"
  }
});
