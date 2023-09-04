import {ChevronLeftIcon, IconButton} from "native-base"
import { useNavigation } from "@react-navigation/native"

import React from 'react'

export const IconBack = () => {
  const navigation = useNavigation();

  return (
    <IconButton
        icon={<ChevronLeftIcon />}
        padding={0}
        onPress={navigation.goBack}
    />
  )
}
