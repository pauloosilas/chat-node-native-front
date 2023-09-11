import {View, Text} from 'react-native'
import { Input } from 'native-base'
import { createFilter } from "react-search-input"
import {styles} from "./Search.styles"

const KEYS_TO_FILTER = ["email", "firstname", "lastname"]

export const Search = ({data, setData}) => {
  
  const onSearch = (text) =>{
   const resultSearch = data.filter(createFilter(text, KEYS_TO_FILTER))
   setData(resultSearch)
  }  
    
  return (
    <View style={styles.content}>
        <Input
             placeholder='Buscar'
             variant="unstyled"
             style={styles.input}
             onChangeText={(text) => onSearch(text)}
        />
    </View>
  )
}
