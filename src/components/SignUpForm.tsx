import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { Component } from "react";
import { Formik } from "formik";
import AntDesign from "@expo/vector-icons/AntDesign";
import Button from "./Button";
import { ICreateUser, ISignup } from "./types";
import { auth } from "../../fireBaseConfig";

export class SignUpForm extends Component {
  createUser = async (values: ICreateUser) => {
    if (values.password === values.confirmPassword) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          "eren@eren.com",
          "1234567"
        );
        console.log("User created:", userCredential.user);
      } catch (error) {
        console.error("Error creating user:", error.code, error.message);
      }
    } else {
      alert("Please, Confirm Your Password");
    }
  };

  render() {
    return (
      <View>
        <Formik
          initialValues={{ name: "", email: "", password: "", confirmPass: "" }}
          onSubmit={(values, { resetForm }) => {
            this.createUser(values);
            resetForm();
          }}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <>
              <View style={styles.inputContainer}>
                <AntDesign name="user" size={24} color="black" />
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                  placeholder="İsim"
                />
              </View>
              <View style={styles.inputContainer}>
                <AntDesign name="mail" size={24} color="black" />
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  placeholder="E-Posta"
                />
              </View>
              <View style={styles.inputContainer}>
                <AntDesign name="key" size={24} color="black" />
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  placeholder="Şifre"
                />
              </View>
              <View style={styles.inputContainer}>
                <AntDesign name="key" size={24} color="black" />
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("confirmPass")}
                  onBlur={handleBlur("confirmPass")}
                  value={values.confirmPass}
                  placeholder="Parolanızı tekrar giriniz"
                />
              </View>
              <View style={styles.buttonArea}>
                <Button title="SIGN UP" onPress={handleSubmit} />
              </View>
            </>
          )}
        </Formik>
      </View>
    );
  }
}

export default SignUpForm;

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    alignItems: "center",
    marginTop: 25,
    paddingBottom: Platform.OS === "ios" ? 10 : null,
  },
  input: {
    alignItems: "center",
    fontSize: 17,
    marginLeft: 10,
  },
  buttonArea: {
    marginLeft: 5,
    marginTop: 40,
    alignSelf: "center",
  },
});
