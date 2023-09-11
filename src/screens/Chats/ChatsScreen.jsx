import {useState, useEffect, useCallback} from "react";
import { Text, View } from "react-native";
import {useNavigation, useFocusEffect} from "@react-navigation/native"
import { size } from "lodash";
import {IconButton, AddIcon, CloseIcon} from "native-base"
import { ListChat } from "../../components/Chats"; 
import { screens } from "../../utils";
import { Chat } from "../../api";
import { useAuth } from "../../hooks";

const chatController = new Chat()

export const ChatsScreen = () => {

  const navigation = useNavigation();
  const {accessToken} = useAuth();
  const [chats, setChats] = useState(null)
  const [chatsResult, setChatsResult] = useState(null)

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton         
         icon={<AddIcon />} 
         margin={5} 
         padding={0} 
        onPress={()=> navigation.navigate(screens.tab.chats.createChatScreen)} />
      ),
    })
  },[]);

  //Executa sempre que o item do menu é clicado
  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          console.log("TESTE:")
          const response = await chatController.getAll(accessToken)
          console.log("TESTE:", response)
          setChats(response)
          setChatsResult(response)
        } catch (error) {
          console.log(error)
        }
       })(); //lembrar de chamar ()
    }, [])   
  )
  
  if(!chatsResult) return null

  return (
    <View>
      <ListChat chats={size(chats) === size(chatsResult) ? chats : chatsResult} />
    </View>
  );
};
