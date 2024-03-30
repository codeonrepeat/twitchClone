import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeStackFeatures = () => {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Pressable
        onPress={() => navigation.navigate("HomeStackSchedule")}
        style={{
          height: 90,
          width: 270,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "black",
          flexDirection: "row",
          alignItems: "center",
          marginRight: 10,
        }}
      >
        <View style={{ width: 140, marginLeft: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Post Your Stream Schedule
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 11 }}>Update Stream Schedule</Text>
            <MaterialCommunityIcons name="chevron-right" size={16} />
          </View>
        </View>
        <Image
          style={{
            height: 70,
            width: 70,
            marginHorizontal: 20,
            borderRadius: 100,
          }}
          source={{ uri: "https://loremflickr.com/320/240/brazil,rio" }}
        />
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("HomeStackEditStreamInfo")}
        style={{
          height: 90,
          width: 270,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "black",
          flexDirection: "row",
          alignItems: "center",
          marginRight: 10,
        }}
      >
        <View style={{ width: 140, marginLeft: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Edit Your Next Stream Info
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 11 }}>Edit Stream Info</Text>
            <MaterialCommunityIcons name="chevron-right" size={16} />
          </View>
        </View>
        <Image
          style={{
            height: 70,
            width: 70,
            marginHorizontal: 20,
            borderRadius: 100,
          }}
          source={{ uri: "https://loremflickr.com/320/240/brazil,rio" }}
        />
      </Pressable>
    </ScrollView>
  );
};

export default HomeStackFeatures;
