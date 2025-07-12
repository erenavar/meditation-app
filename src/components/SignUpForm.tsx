import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { Component } from "react";
import { Formik } from "formik";
import AntDesign from "@expo/vector-icons/AntDesign";
import Button from "./Button";
import { ICreateUser, ISignUpForm } from "./types";
import { auth } from "../../firebaseConfig";
import * as Yup from "yup";

const signUpSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Ad en az 2 harf içermek zorundadır")
    .required("Zorunlu alan"),
  email: Yup.string().email("Invalid email").required("Zorunlu alan"),
  password: Yup.string()
    .min(7, "Şifre en az 7 karakter olmak zorundadır.")
    .required("Zorunlu alan"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Şifreler eşleşmiyor")
    .required("Şifre tekrarı zorunludur")
    .required("Zorunlu alan"),
});

const initialValues: ISignUpForm = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export class SignUpForm extends Component<{}, {}> {
  createUser = async (values: ICreateUser) => {
    if (values.password === values.confirmPassword) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
      } catch (error: unknown) {
        if (error instanceof Error && "code" in error) {
          const firebaseError = error as { code: string; message: string };
          if (firebaseError.code === "auth/email-already-in-use") {
            Alert.alert("Bu e-posta adresi zaten kullanımda.");
          } else if (firebaseError.code === "auth/invalid-email") {
            Alert.alert("Geçersiz e-posta adresi.");
          }
        }
      }
    }
  };
  render() {
    return (
      <View>
        <Formik
          validationSchema={signUpSchema}
          initialValues={initialValues}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={(values, { resetForm }) => {
            this.createUser(values);
            resetForm();
          }}>
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
              <View style={styles.inputContainer}>
                <AntDesign name="user" size={24} color="black" />
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("fullName")}
                  onBlur={handleBlur("fullName")}
                  value={values.fullName}
                  placeholder="Ad Soyad"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
              <Text style={{ color: "red" }}>{errors.fullName}</Text>
              <View style={styles.inputContainer}>
                <AntDesign name="mail" size={24} color="black" />
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  placeholder="E-Posta"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
              <Text style={{ color: "red" }}>{errors.email}</Text>
              <View style={styles.inputContainer}>
                <AntDesign name="key" size={24} color="black" />
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  placeholder="Şifre"
                  secureTextEntry={true}
                />
              </View>
              <Text style={{ color: "red" }}>{errors.password}</Text>
              <View style={styles.inputContainer}>
                <AntDesign name="key" size={24} color="black" />
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  placeholder="Parolanızı tekrar giriniz"
                  secureTextEntry={true}
                />
              </View>
              <Text style={{ color: "red" }}>{errors.confirmPassword}</Text>
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
    flex: 1,
    alignItems: "center",
    fontSize: 17,
    marginLeft: 10,
  },
  buttonArea: {
    marginLeft: 5,
    marginTop: 40,
    alignSelf: "center",
  },
  errorText: {
    color: "red",
  },
});
