import React, { useState, useEffect, useContext } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const { login, googleLogin, facebookLogin } = useContext(AuthContext);
  const [checked, setChecked] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={[styles.container, { flexDirection: "column" }]}>
      <View style={styles.otherbg}>
        <View style={styles.smallSpacing}></View>
        <Text style={styles.titleText}>Log In</Text>
        <View style={styles.smallSpacing}></View>
        <View style={styles.smallSpacing}></View>
        <TouchableOpacity style={{ alignSelf: "flex-end" }}>
          <Text
            style={styles.forgot}
            onPress={() => navigation.navigate("Forgot Password")}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <View style={styles.checkbox}>
          <Text style={styles.label}>Remember me</Text>
        </View>
        <View style={styles.smallSpacing}></View>
        <View style={styles.smallSpacing}></View>
        <Text style={{ alignSelf: "center", fontSize: 20 }}>--- OR ---</Text>
        <Text style={{ alignSelf: "center", fontSize: 14, paddingTop: 10 }}>
          Sign in with
        </Text>
        <View style={styles.largeSpacing}></View>
        <View style={styles.otherSignin}>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              borderRadius: 100,
              padding: 10,
              right: 20,
            }}
            onPress={() => googleLogin()}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              borderRadius: 100,
              padding: 10,
              left: 20,
            }}
            onPress={() => facebookLogin()}
          ></TouchableOpacity>
        </View>
        <View style={styles.largeSpacing}></View>
        <View style={styles.largeSpacing}></View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
          }}
        >
          <Text style={{ fontSize: 18 }}>Don't have an account?</Text>
          <TouchableOpacity
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.navigate("Sign Up")}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  mainbg: {
    flex: 1,
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "center",
  },
  headerImage: {
    resizeMode: "stretch",
    height: 35,
    width: 35,
  },
  otherSignin: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-around",
  },
  otherbg: {
    flex: 7,
    backgroundColor: "#8839BF",
  },
  titleText: {
    fontSize: 55,
    alignSelf: "center",
    color: "white",
  },
  checkbox: {
    flexDirection: "row",
    paddingLeft: 25,
  },
  label: {
    alignSelf: "center",
  },
  leftAlignment: {
    left: 25,
  },
  largeSpacing: {
    height: 25,
  },
  smallSpacing: {
    height: 12.5,
  },
  forgot: {
    color: "#F0EEE6",
    paddingRight: 30,
    paddingTop: 10,
  },
});

export default LoginScreen;
