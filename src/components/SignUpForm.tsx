import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { Component } from "react";
import { Formik } from "formik";
import AntDesign from "@expo/vector-icons/AntDesign";

export class SignUpForm extends Component {
  render() {
    return (
      <View>
        <Formik
          initialValues={{ name: "", email: "", password: "", confirmPass: "" }}
          onSubmit={(values) => console.log(values)}>
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

              <Button onPress={console.log("email", values)} title="Submit" />
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
    paddingBottom: 10,
  },
  input: {
    alignItems: "center",
    fontSize: 17,
    marginLeft: 10,
  },
});
