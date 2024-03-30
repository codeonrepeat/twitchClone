import { View, Text, Image, Pressable } from "react-native";
import React from "react";

const HomeStackTip = () => {
  return (
    <View>
      <Image
        style={{ margin: 20, height: 200, width: "90%" }}
        source={{ uri: "https://loremflickr.com/320/240/brazil,rio" }}
      />
      <View style={{ marginHorizontal: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Be Yourself and Have Fun
        </Text>
        <Text style={{ marginTop: 10 }}>
          People come to Twitch to see You. It might be intimidating at first,
          but try to be yourself, have fun and enjoy the process.
        </Text>
        <Text style={{ marginTop: 10 }}>
          Over time your will grow your audience and your streaming skills, too
        </Text>
        <Pressable
          onPress={() =>
            console.log("Opens bottom transparent menu with options. Yes. No. ")
          }
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "purple",
              marginVertical: 15,
            }}
          >
            Was this useful?
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeStackTip;
