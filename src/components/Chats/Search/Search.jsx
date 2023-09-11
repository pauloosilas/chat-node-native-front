import {View, Text} from 'react-native'
import { Input } from 'native-base'

import {styles} from "./Search.styles"

export const Search = () => {
  return (
    <View style={styles.content}>
        <Input
             placeholder='Buscar'
             variant="unstyled"
             style={styles.input}
        />
    </View>
  )
}
