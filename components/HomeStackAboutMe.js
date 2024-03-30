import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeStackAboutMe = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
        height: 150,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 250, padding: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>About me</Text>
          <Text>Help viewers get to know you when they visit your channel</Text>
        </View>
        <View>
          <Image
            style={{ height: 100, width: 80 }}
            source={{ uri: "https://loremflickr.com/320/240/brazil,rio" }}
          />
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          padding: 10,
          marginLeft: 10,
        }}
      >
        <Pressable
          onPress={() => navigation.navigate("HomeStackEdit")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "black",
            padding: 5,
            width: 200,
            marginRight: 10,
            justifyContent: "center",
          }}
        >
          <MaterialCommunityIcons name="account" size={20} />
          <Text>Add Profile Picture</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("HomeStackBio")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "black",
            width: 110,
            padding: 5,
            marginRight: 10,
            justifyContent: "center",
          }}
        >
          <MaterialCommunityIcons name="pencil-outline" size={20} />
          <Text>Add Bio</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("HomeStackEdit")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "black",
            width: 180,
            padding: 5,
            marginRight: 10,
            justifyContent: "center",
          }}
        >
          <MaterialCommunityIcons name="image-outline" size={20} />
          <Text>Add Profile banner</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("HomeStackSocials")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "black",
            width: 170,
            padding: 5,
            marginRight: 10,
            justifyContent: "center",
          }}
        >
          <MaterialCommunityIcons name="link-variant" size={20} />
          <Text>Link Social Media</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} />
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default HomeStackAboutMe;
