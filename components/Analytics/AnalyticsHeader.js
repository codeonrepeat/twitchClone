import { View, Text, Pressable } from "react-native";
import React from "react";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AnalyticsHeader = () => {
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
            width: 70,
            marginLeft: 260,
          }}
        >
          <MaterialCommunityIcons
            style={{ opacity: 0.3 }}
            name="calendar-month"
            size={26}
            onPress={() => console.log("maybe an events calendar")}
          />

          <MaterialCommunityIcons
            name="information-outline"
            size={26}
            onPress={() => navigation.navigate("Definitions")}
          />
        </View>
      </View>
    </>
  );
};

export default AnalyticsHeader;
