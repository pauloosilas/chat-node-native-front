import {useState, useEffect} from "react"
import { View, Text, TouchableOpacity } from "react-native";
import {useNavigation} from "@react-navigation/native"
import {Avatar} from "native-base"
import { size } from "lodash"
import { ENV } from "../../../../utils"
import { styles } from "./Item.styles";

const totalUnreadMessages = 10
const lastMessage =  true

export const Item = ({chat}) => {

  const openChat = () => {
    console.log("Abrir chat: ", chat._id)
  }

  return (
  <>
    <TouchableOpacity 
      onPress={openChat}
      style={styles.content}>
        <Avatar bg="cyan.500" size="lg" marginRigth={3} style={styles.avatar} source={{uri: null}}>
          #
        </Avatar>
        <View style={styles.infoContent}>
          <View style={styles.info}>
            <Text style={styles.identity}>
              nome@nome
            </Text>
          <Text style={styles.message} numberOfLines={2}>
            Lorem Ipsum is simple dummy Lorem Ipsum is simple dummy Lorem Ipsum is simple dummy
            Lorem Ipsum is simple dummy Lorem Ipsum is simple dummy Lorem Ipsum is simple dummy
            Lorem Ipsum is simple dummy Lorem Ipsum is simple dummy Lorem Ipsum is simple dummy
            Lorem Ipsum is simple dummy Lorem Ipsum is simple dummy Lorem Ipsum is simple dummy
            Lorem Ipsum is simple dummy Lorem Ipsum is simple dummy Lorem Ipsum is simple dummy
          </Text>
          </View>

          <View style={styles.notify}>
         {
          lastMessage ? (
           <Text style={styles.time}> 12:32        
            </Text>
          ): null  
         }  
         
          </View>

          {
            totalUnreadMessages ? 
            (
              <View style={styles.totalUnreadContent}>
                <Text style={styles.totalUnread}>
                  {totalUnreadMessages < 99 ? totalUnreadMessages : "99+"}
                </Text>
              </View>
            ) : null
          }

        </View>
    </TouchableOpacity>
  </>
  );
};
