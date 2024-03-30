import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ChannelOptions from "../components/ChannelOptions";

const Channel = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{ backgroundColor: "#8F47FE", height: 90 }}>
        <Pressable
          onPress={() => navigation.navigate("HomeStackEdit")}
          style={{
            backgroundColor: "black",
            width: 75,
            padding: 6,
            borderRadius: 20,
            marginLeft: 300,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 11,
              fontWeight: "bold",
            }}
          >
            Edit Profile
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          top: 70,
          left: 10,
        }}
      >
        <View>
          <Image
            style={{ height: 70, width: 70, borderRadius: 100 }}
            source={{ uri: "https://loremflickr.com/320/240/brazil,rio" }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 35, marginTop: 10, marginLeft: 10 }}>
            username
          </Text>
          <Text style={{ marginLeft: 10 }}>Last Broadcast</Text>
        </View>
      </View>
      <View style={{ marginTop: 50, padding: 16 }}>
        <Text>0 followers</Text>

        <Pressable
          onPress={() => navigation.navigate("HomeStackStreamManager")}
          style={{
            height: 35,
            width: "100%",
            backgroundColor: "gray",
            alignItems: "center",
            borderRadius: 6,
            marginTop: 10,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", marginTop: 8 }}>
            View Dashboard
          </Text>
        </Pressable>
        <ChannelOptions />
      </View>
    </View>
  );
};

export default Channel;
