import { View, Text, Pressable, TextInput, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Category = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          width: "67%",
        }}
        onPress={() => navigation.goBack()}
      >
        <Text>Cancel</Text>
        <Text>Choose Category</Text>
      </Pressable>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          What do you want to stream?
        </Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text style={{ fontWeight: "bold" }}>Category</Text>
      </View>
      <View
        style={{
          backgroundColor: "gray",
          padding: 10,
          width: "94%",
          marginLeft: 10,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          placeholderTextColor={"white"}
          placeholder="Search games and categories"
        />
        <Ionicons name="search-outline" color={"white"} size={20} />
      </View>

      <View
        style={{
          height: 40,
          width: "94%",
          backgroundColor: "gray",
          borderRadius: 10,
          marginLeft: 10,
          marginTop: 490,
        }}
      >
        <Text style={{ textAlign: "center", marginTop: 10, color: "white" }}>
          Next
        </Text>
      </View>
    </View>
  );
};

export default Category;
