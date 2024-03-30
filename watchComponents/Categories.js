import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import UserCategory from "./UserCategory";

const Categories = () => {
  return (
    <>
      <ScrollView>
        <UserCategory />
        <UserCategory />
        <UserCategory />
        <UserCategory />
        <UserCategory />
        <UserCategory />
        <UserCategory />
        <UserCategory />
        <UserCategory />
        <UserCategory />
        <UserCategory />
        <UserCategory />
      </ScrollView>
      <Pressable
        style={{
          backgroundColor: "black",
          position: "absolute",
          bottom: 80,
          padding: 20,
          left: 130,
        }}
      >
        <Text style={{ color: "white" }}>Sort and Filter</Text>
      </Pressable>
    </>
  );
};

export default Categories;
