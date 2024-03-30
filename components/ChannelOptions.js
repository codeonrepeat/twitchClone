import { View, Text, ScrollView, FlatList, Pressable } from "react-native";
import React, { useState } from "react";
import ChannelHome from "../components/Channel/ChannelHome";
import ChannelAbout from "../components/Channel/ChannelAbout";
import ChannelSchedule from "../components/Channel/ChannelSchedule";
import ChannelVideo from "../components/Channel/ChannelVideo";
import ChannelClips from "../components/Channel/ChannelClips";
import ChannelChat from "../components/Channel/ChannelChat";

const options = ["Home", "About", "Schedule", "Videos", "Clips", "Chat"];

const ChannelOptions = () => {
  const [optionSelected, setOptionSelected] = useState("Home");

  const handleOptions = (item) => {
    setOptionSelected(item);
    console.log(item);
  };

  const renderOptions = () => {
    switch (optionSelected) {
      case "Home":
        return <ChannelHome />;
      case "About":
        return <ChannelAbout />;
      case "Schedule":
        return <ChannelSchedule />;
      case "Videos":
        return <ChannelVideo />;
      case "Clips":
        return <ChannelClips />;
      case "Chat":
        return <ChannelChat />;
    }
  };
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={options}
        renderItem={({ item }) => (
          <Pressable
            style={{ marginTop: 20 }}
            onPress={() => handleOptions(item)}
          >
            <Text
              style={{
                marginRight: 35,
                fontWeight: "600",
                fontSize: 16,
                color: optionSelected === item ? "#8F47FE" : "black",
                borderBottomColor:
                  optionSelected === item ? "#8F47FE" : "transparent",
                borderBottomWidth: optionSelected === item ? 3 : 0,
              }}
            >
              {item}
            </Text>
          </Pressable>
        )}
      />
      <View>{renderOptions()}</View>
    </View>
  );
};

export default ChannelOptions;
