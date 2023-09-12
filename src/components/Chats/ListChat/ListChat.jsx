import { View, ScrollView, Text } from "react-native";
import { map, size } from "lodash";
import {Item} from "./Item"
import { styles } from "./ListChat.styles";

export const ListChat = ({ chats }) => {
  return (
    <ScrollView alwaysBounceVertical={false}>
      <View style={styles.content}>
        {size(chats) === 0 ? (
          <Text style={styles.noChats}>
            Nenhum chat, clique em (+) e comece uma nova conversa
          </Text>
        ) : null}

        {map(chats, (chat) => (
          <Item key={chat._id} chat={chat} />
        ))}
      </View>
    </ScrollView>
  );
};
