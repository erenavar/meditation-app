import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Formik } from "formik";
import AntDesign from "@expo/vector-icons/AntDesign";
import Button from "./Button";
import { ICreateUser, ISignUpForm } from "./types";
import { auth, db } from "../../firebaseConfig";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/types";
import { doc, setDoc } from "firebase/firestore";

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
    .required("Şifre tekrarı zorunludur"),
});

const initialValues: ISignUpForm = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const createUser = async (values: ICreateUser) => {
    if (values.password === values.confirmPassword) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );

        // Create user profile in Firestore
        try {
          await setDoc(doc(db, "users", userCredential.user.uid), {
            fullName: values.fullName,
            email: values.email,
            authProvider: "email",
            creationDate: new Date().toISOString(),
            uid: userCredential.user.uid,
          });
          console.log("✅ User profile created in Firestore");
        } catch (firestoreError) {
          console.error("⚠️ Firestore error:", firestoreError);
          // Continue even if Firestore fails
        }

        navigation.navigate("TabBar");
      } catch (error: unknown) {
        if (error instanceof Error && "code" in error) {
          const firebaseError = error as { code: string; message: string };
          if (firebaseError.code === "auth/email-already-in-use") {
            Alert.alert("Hata", "Bu e-posta adresi zaten kullanımda.");
          } else if (firebaseError.code === "auth/invalid-email") {
            Alert.alert("Hata", "Geçersiz e-posta adresi.");
          } else if (firebaseError.code === "auth/weak-password") {
            Alert.alert("Hata", "Şifre çok zayıf.");
          } else {
            Alert.alert("Hata", firebaseError.message);
          }
        }
      }
    }
  };

  return (
    <View>
      <Formik
        validationSchema={signUpSchema}
        initialValues={initialValues}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, { resetForm }) => {
          createUser(values);
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
                autoCapitalize="words"
                autoCorrect={false}
              />
            </View>
            {errors.fullName && (
              <Text style={styles.errorText}>{errors.fullName}</Text>
            )}

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
            {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

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
            {errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

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
            {errors.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}

            <View style={styles.buttonArea}>
              <Button title="SIGN UP" onPress={handleSubmit} />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    alignItems: "center",
    marginTop: 25,
    paddingBottom: Platform.OS === "ios" ? 10 : 0,
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
    fontSize: 12,
    marginTop: 5,
  },
});
