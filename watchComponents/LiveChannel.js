import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import ChannelThumb from "./ChannelThumb";

const LiveChannel = () => {
  return (
    <>
      <ScrollView>
        <ChannelThumb />
        <ChannelThumb />
        <ChannelThumb />
        <ChannelThumb />
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

export default LiveChannel;
