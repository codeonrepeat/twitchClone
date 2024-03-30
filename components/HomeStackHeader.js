import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeStackHeader = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialCommunityIcons
          name="account-circle"
          size={35}
          onPress={() => navigation.navigate("EditStack")}
          style={{ paddingLeft: 10 }}
        />
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
            justifyContent: "space-evenly",
            width: 300,
            marginLeft: 50,
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 20,
              padding: 2,
              width: 80,
            }}
          >
            <MaterialCommunityIcons
              name="eye-outline"
              size={23}
              onPress={() => navigation.navigate("Following")}
            />
            <Text style={{ marginLeft: 5 }}>Watch</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default HomeStackHeader;
