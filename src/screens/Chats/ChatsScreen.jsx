import {useEffect} from "react";
import { Text, View } from "react-native";
import {useNavigation} from "@react-navigation/native"
import {IconButton, AddIcon} from "native-base"
import { screens } from "../../utils";

export const ChatsScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
         
         icon={<AddIcon />} margin={5} padding={0} 
        onPress={()=> navigation.navigate(screens.tab.chats.createChatScreen)} />
      ),
    })
  },[])

  return (
    <View>
      <Text>ChatsScreeasdfasdfrn</Text>
    </View>
  );
};
