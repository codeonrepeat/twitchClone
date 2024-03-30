import { View, Text, Pressable } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
  const navigation = useNavigation();
  return (
    <View style={{ width: "96%" }}>
      <View style={{ flexDirection: "row", padding: 10, alignItems: "center" }}>
        <MaterialCommunityIcons
          onPress={() => navigation.goBack()}
          name="chevron-left"
          size={30}
        />
        <Text style={{ marginLeft: 124, fontSize: 16, fontWeight: "bold" }}>
          Settings
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 8,
          marginLeft: 10,
          borderColor: "black",
          borderWidth: 1,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        <View>
          <Text>Account</Text>
          <Text style={{ color: "gray" }}>Profile, Amazon Prime</Text>
        </View>
        <MaterialCommunityIcons name="chevron-right" size={30} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 8,
          marginLeft: 10,
          borderColor: "black",
          borderWidth: 1,
        }}
      >
        <View>
          <Text>Preferences</Text>
          <Text style={{ color: "gray" }}>Dark Theme, Playback</Text>
        </View>
        <MaterialCommunityIcons name="chevron-right" size={30} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 8,
          marginLeft: 10,
          borderColor: "black",
          borderWidth: 1,
        }}
      >
        <Text>Notifications</Text>
        <Text></Text>
        <MaterialCommunityIcons name="chevron-right" size={30} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 8,
          marginLeft: 10,
          borderColor: "black",
          borderWidth: 1,
        }}
      >
        <View>
          <Text>Security & Privacy</Text>
          <Text style={{ color: "gray" }}>
            Contact, Password, Blocked Users
          </Text>
        </View>
        <MaterialCommunityIcons name="chevron-right" size={30} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 8,
          marginLeft: 10,
          borderColor: "black",
          borderWidth: 1,
        }}
      >
        <Text>Recommendations</Text>
        <Text></Text>
        <MaterialCommunityIcons name="chevron-right" size={30} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 8,
          marginLeft: 10,
          borderColor: "black",
          borderWidth: 1,
        }}
      >
        <Text>System</Text>
        <Text></Text>
        <MaterialCommunityIcons name="chevron-right" size={30} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 8,
          marginLeft: 10,
          borderColor: "black",
          borderWidth: 1,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <Text>Help & Legal</Text>
        <Text></Text>
        <MaterialCommunityIcons name="chevron-right" size={30} />
      </View>

      <Pressable
        onPress={() => console.log("logged off")}
        style={{
          borderRadius: 10,
          backgroundColor: "gray",
          marginLeft: 10,
          padding: 15,
          marginTop: 60,
        }}
      >
        <Text
          style={{ fontWeight: "bold", color: "white", textAlign: "center" }}
        >
          Log Out
        </Text>
      </Pressable>
    </View>
  );
};

export default Settings;
