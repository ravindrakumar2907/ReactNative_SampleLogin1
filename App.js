//import { StatusBar } from "expo-status-bar";
//import React from "react";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

//class vs Function

export default function App() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isLogin, setIsLogin] = useState(false);

  function handleUsername(inputValue) {
    setUsername(inputValue);
  }

  function onLogin() {
    console.log(username, password);
    if (username != undefined && password != undefined) {
      console.log("login into system");
      setIsLogin(true);
    } else {
      alert("Username and password is wrong...");
    }
  }

  if (isLogin) {
    return (
      <View style={styles.container}>
        <Text style={styles.textData}>You have logged in into system...</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.textData}>Please login </Text>
        <TextInput
          onChangeText={handleUsername.bind(this)}
          style={styles.textInputStyle}
          placeholder="Enter username"
          value={username}
        ></TextInput>
        <TextInput
          onChangeText={(password) => setPassword(password)}
          style={styles.textInputStyle}
          placeholder="Enter password"
          value={password}
        ></TextInput>
        <Button onPress={onLogin} title="login"></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textData: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: "black",
    margin: 5,
    padding: 5,
    width: 200,
  },
});
