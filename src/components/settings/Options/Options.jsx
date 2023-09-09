import React from 'react'
import * as ImagePicker from "expo-image-picker"
import { View, Text, TouchableOpacity } from 'react-native'
import {useNavigation} from "@react-navigation/native"
import { imageExpoFormat } from '../../../utils/imageFormat'
import { User } from '../../../api'
import { styles } from './Options.styles'
import { screens } from '../../../utils'

const userController = new User()

export const Options = (props) => {

   const {accessToken, logout, updateUser} = props; 
   const navigation = useNavigation()

   const openGallery = async()=>{
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality:1
    }) 
    if(!result.canceled){
      const file = imageExpoFormat(result.assets[0].uri)
     // console.log(file)
    //  console.log(result.assets[0].uri)
      updateUserData({avatar: file})
    }
   }

   const updateUserData = async(userData) => {
    try {
      const response = await userController.updateUser(accessToken, userData)
      updateUser("avatar", response.avatar)
      console.log(response)

    } catch (error) {
      
    }
   }

   const goChangeFirstName = () => {
    navigation.navigate(screens.tab.settings.changeFirstNameScreen)
   }

   const goChangeLastName = () => {
    navigation.navigate(screens.tab.settings.changeLastNameScreen)
   }


  return (
    <View style={styles.content}>
      <TouchableOpacity style={styles.item} onPress={openGallery}>
        <Text style={styles.text}>Trocar foto de perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={goChangeFirstName}>
        <Text style={styles.text}>Alterar Nome</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={goChangeLastName}>
        <Text style={styles.text}>Alterar Sobrenome</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.item, styles.itemClose]} onPress={logout}>
        <Text style={styles.textClose}>Sair</Text>
      </TouchableOpacity>
      
    </View>
  )
}
