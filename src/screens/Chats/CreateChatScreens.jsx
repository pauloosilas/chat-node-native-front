import {useEffect, useState} from "react";
import { Text, View } from "react-native";
import {IconButton, CloseIcon} from "native-base"
import { useNavigation } from "@react-navigation/native";
import {User}  from "../../api"
import { useAuth } from "../../hooks"; 
import { CreateChat, Search } from "../../components/Chats/";

const userController = new User();

export const CreateChatScreens = () => {
  
  const navigation = useNavigation();
  const {accessToken} = useAuth();
  const [users, setUsers] = useState(null)
  const [usersResult, setUsersResult] = useState(null)

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton         
         icon={<CloseIcon />} 
         margin={5} 
         padding={0} 
        onPress={()=> navigation.goBack()} />
      ),
    })
  },[]);

  useEffect(() => {
    (async () => {
      try {
        const response = await userController.getAll(accessToken);
        setUsers(response)
        setUsersResult(response)
      } catch (error) {
          console.log(error)
      }
    })()
  }, [])

  if(!usersResult) return null

  return (
    <View>
      <Search data={users} setData={setUsersResult} />
       <CreateChat.ListUser users={usersResult} />
    </View>
  );
};
