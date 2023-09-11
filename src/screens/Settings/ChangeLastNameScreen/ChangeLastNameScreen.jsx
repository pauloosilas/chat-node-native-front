import { useFormik } from "formik";
import { View } from "react-native";
import { Button, Input } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { initialValues, validationSchema } from "./ChangeLastNameScreen.form";
import { User } from "../../../api";
import { useAuth } from "../../../hooks";

import {styles} from "./ChangeLastNameScreen.styles"

const userController = new User();

export const ChangeLastNameScreen = () => {

  const navigation = useNavigation();
  const {accessToken, updateUser} = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
         const updateData = {lastname: formValue.lastname}
         await userController.updateUser(accessToken, updateData)  
         updateUser("lastname", formValue.lastname);
         navigation.goBack();
      } catch (error) {
        console.log(error)       
        
      }
    }
  })

  return (
    <View style={styles.content}> 
      <Input 
        placeholder="Sobrenome"
        variant="unstyled"
        autoFocus
        value={formik.values.lastname}
        onChangeText={(text)=> formik.setFieldValue("lastname", text)}
        style={[styles.input, formik.errors.lastname && styles.inputError]}
        />

        <Button
         style={styles.btn}
         onPress={formik.handleSubmit}
         isLoading={formik.isSubmitting}>
          Atualizar
          </Button>
    </View>
  );
};
