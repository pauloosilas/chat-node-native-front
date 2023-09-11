import { View, ScrollView, Text } from "react-native";
import { map, size } from "lodash";
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
          <Text>Chat...</Text>
        ))}
      </View>
    </ScrollView>
  );
};
