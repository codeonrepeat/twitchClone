import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProfileEditor = () => {
  const navigation = useNavigation();
  const handleChannel = () => {
    navigation.goBack();
    navigation.navigate("Channel");
  };

  const handleSchedule = () => {
    navigation.goBack();
    navigation.navigate("HomeStackSchedule");
  };

  const handleSettings = () => {
    navigation.goBack();
    navigation.navigate("Settings");
  };

  const handleGoback = () => {
    navigation.goBack();
  };
  return (
    <View>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 160,
        }}
      >
        <Text>Account</Text>
        <Pressable onPress={handleGoback}>
          <Text>DONE</Text>
        </Pressable>
      </View>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "black",
          borderWidth: 1,
          padding: 15,
          borderRadius: 10,
          marginLeft: 10,
          width: "94%",
          marginBottom: 20,
        }}
        onPress={handleChannel}
      >
        <MaterialCommunityIcons
          name="account-circle"
          color={"black"}
          size={50}
        />
        <Text style={{ fontWeight: "bold", marginLeft: 5 }}>swaggonrepeat</Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "black",
          borderWidth: 1,
          padding: 15,
          borderRadius: 10,
          marginLeft: 10,
          width: "94%",
          marginBottom: 20,
        }}
        onPress={handleChannel}
      >
        <MaterialCommunityIcons
          name="account-minus-outline"
          color={"black"}
          size={30}
        />
        <Text style={{ marginLeft: 10 }}>My Channel</Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "black",
          borderWidth: 1,
          padding: 15,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          marginLeft: 10,
          width: "94%",
        }}
        onPress={handleSettings}
      >
        <MaterialCommunityIcons name="cog-outline" color={"black"} size={30} />
        <Text style={{ marginLeft: 10 }}>Setting</Text>
        <MaterialCommunityIcons
          name="chevron-right"
          color={"black"}
          size={30}
          style={{ marginLeft: 220 }}
        />
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "black",
          borderWidth: 1,
          padding: 15,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          marginLeft: 10,
          width: "94%",
        }}
        onPress={handleSchedule}
      >
        <MaterialCommunityIcons
          name="calendar-month-outline"
          color={"black"}
          size={30}
        />
        <Text style={{ marginLeft: 10 }}>My Schedule</Text>
      </Pressable>
    </View>
  );
};

export default ProfileEditor;
