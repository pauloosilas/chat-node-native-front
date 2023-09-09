import { View } from "react-native";
import { Input, Button } from "native-base"
import {useFormik} from "formik"
import {useNavigation} from "@react-navigation/native"
import { initialValues, validationSchema } from "./ChangeFirstNameScreen.form";
import { User } from "../../../api";
import {useAuth} from "../../../hooks"

import { styles } from "./ChangeFirstNameScreen.styles"

const userController = new User();

export const ChangeFirstNameScreen = () => {

  const navigation = useNavigation();
  const { accessToken, updateUser } = useAuth()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
    
      try {
        const dataUser = {firstname: formValue.firstname}
        await userController.updateUser(accessToken, dataUser)
        updateUser("firstname", formValue.firstname)
        navigation.goBack();
      } catch (error) {
        console.log(error)
      }

    }
  })

  return (
    <View style={styles.content}>
      <Input
       placeholder="Nome" 
       variant="unstyled"
       autoFocus
       value={formik.values.firstname}
       onChangeText={(text)=> formik.setFieldValue("firstname" ,text)}
       style={[styles.input, formik.errors.firstname && styles.inputError]} 
       />
      <Button
         style={styles.btn}
         onPress={formik.handleSubmit}
         isLoading={formik.isLoading}
         > 
          Alterar 
         </Button>
    </View>
  );
};
