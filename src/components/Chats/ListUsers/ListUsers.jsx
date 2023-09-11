import { ScrollView, TouchableOpacity,View, Text } from "react-native";
import { Avatar } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { map } from "lodash";
import { ENV } from "../../../utils";
import { styles } from "./ListUsers.styles";
 

export function ListUser(props) {

  const { users } = props;
  console.log(users)
  const createChat = (user) => {
    console.log("criar chat com o email", user.email);
  };

  return (
    <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      {map(users, (user) => (
        <TouchableOpacity
          key={user._id}
          style={styles.item}
          onPress={() => createChat(user)}
        >
          <Avatar bg={"cyan.500"} marginRight={3}
           source={{uri: user.avatar && `${ENV.BASE_PATH}/${user.avatar}`}}>
            {user.email.substring(0, 2).toUpperCase()}
          </Avatar>
          {console.log(user.firstname)}
          <View>
            <Text style={styles.name}>
              {user.firstname || user.lastname ? `${user.firstname || ""} ${user.lastname || ""}` : "..."}
            </Text>
            <Text style={styles.email}>
              { user.email }
            </Text>
          </View>

        </TouchableOpacity>
      ))}
      <Text>ListUser</Text>
    </ScrollView>
  );
};
