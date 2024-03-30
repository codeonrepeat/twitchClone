import { View, Text } from "react-native";
import React from "react";

const HomeStackStats = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: 20,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        width: "95%",
        height: 70,
        marginLeft: 10,
      }}
    >
      <View>
        <Text style={{ marginLeft: 12 }}>--</Text>
        <Text style={{ fontSize: 11, marginTop: 0 }}>Uptime</Text>
      </View>
      <View>
        <Text style={{ marginLeft: 14 }}>--</Text>
        <Text style={{ fontSize: 11, marginTop: 0 }}>Viewers</Text>
      </View>
      <View>
        <Text style={{ marginLeft: 20 }}>0</Text>
        <Text style={{ fontSize: 11, marginTop: 0 }}>Followers</Text>
      </View>
    </View>
  );
};

export default HomeStackStats;
