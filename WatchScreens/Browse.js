import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import Header from "../watchComponents/Header";
import LiveChannel from "../watchComponents/LiveChannel";
import Categories from "../watchComponents/Categories";

const Browse = () => {
  const [option, setOption] = useState("Category");

  console.log(option);
  return (
    <>
      <Header />
      <View style={{ flexDirection: "row", gap: 10, padding: 20 }}>
        <Pressable onPress={() => setOption("Category")}>
          <Text
            style={{
              color: option === "Category" ? "purple" : "black",
            }}
          >
            Categories
          </Text>
        </Pressable>
        <Pressable onPress={() => setOption("Live")}>
          <Text
            style={{
              color: option === "Live" ? "purple" : "black",
            }}
          >
            Live Channels
          </Text>
        </Pressable>
      </View>
      <View>{option === "Category" ? <Categories /> : <LiveChannel />}</View>
    </>
  );
};

export default Browse;
