import { View, Text, Pressable } from "react-native";
import React from "react";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ContentHeader = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialCommunityIcons
          name="account-circle"
          size={35}
          onPress={() => navigation.navigate("ProfileEditor")}
          style={{ paddingLeft: 10 }}
        />
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
            justifyContent: "space-evenly",
            width: 200,
            marginLeft: 130,
          }}
        >
          <Feather
            name="battery-charging"
            size={25}
            onPress={() => navigation.navigate("Turbo")}
          />

          <MaterialCommunityIcons
            name="cast"
            size={23}
            onPress={() => console.log("broadcast to another device")}
          />

          <MaterialCommunityIcons
            name="message-outline"
            size={23}
            onPress={() => navigation.navigate("Messages")}
          />

          <MaterialCommunityIcons
            name="inbox-outline"
            size={23}
            onPress={() => navigation.navigate("Inbox")}
          />
          <View style={{}}>
            <Pressable
              onPress={() =>
                console.log(
                  "transparent options. trending. most recent. oldest"
                )
              }
            >
              <Text style={{ marginLeft: 5 }}>Sort</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};

export default ContentHeader;
