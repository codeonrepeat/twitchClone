import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeStackGrowth = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginHorizontal: 10 }}
    >
      <Pressable
        onPress={() => navigation.navigate("AnalyticsStack")}
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
        <Image
          style={{
            height: 70,
            width: 70,
            marginHorizontal: 20,
            borderRadius: 100,
          }}
          source={{ uri: "https://loremflickr.com/320/240/brazil,rio" }}
        />
        <View style={{ width: 140 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            We've missed you!
          </Text>
          <Text>You haven't streamed in a while</Text>
        </View>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate("AnalyticsStack")}
        style={{
          height: 90,
          width: 160,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "black",
          marginRight: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#4E0941",
              borderRadius: 100,
              height: 24,
              width: 24,
              padding: 2.5,
            }}
          >
            <MaterialCommunityIcons name="heart" size={20} color={"#FE37DB"} />
          </View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>0</Text>
        </View>
        <View style={{ paddingLeft: 10, paddingTop: 13 }}>
          <Text style={{ fontSize: 11 }}>Get 50 Followers</Text>
          <View
            style={{
              height: 10,
              width: 140,
              backgroundColor: "gray",
              borderRadius: 40,
            }}
          ></View>
        </View>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("AnalyticsStack")}
        style={{
          height: 90,
          width: 160,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "black",
          marginRight: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#4E0941",
              borderRadius: 100,
              height: 24,
              width: 24,
              padding: 2.5,
            }}
          >
            <MaterialCommunityIcons
              name="message-processing-outline"
              size={20}
              color={"yellow"}
            />
          </View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>0</Text>
        </View>
        <View style={{ paddingLeft: 10, width: 130 }}>
          <Text style={{ fontSize: 11 }}>
            Get 5 people chatting at the same time
          </Text>
          <View
            style={{
              height: 10,
              width: 140,
              backgroundColor: "gray",
              borderRadius: 40,
            }}
          ></View>
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default HomeStackGrowth;
