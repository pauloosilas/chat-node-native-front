import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {useNavigation} from "@react-navigation/native"

import { styles } from './Options.styles'

export const Options = (props) => {
   const {accessToken, logout, updateUser} = props; 
  return (
    <View style={styles.content}>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>Trocar foto de perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>Alterar Nome</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>Alterar Sobrenome</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.item, styles.itemClose]} onPress={logout}>
        <Text style={styles.textClose}>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}
