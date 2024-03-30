import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import Header from "../watchComponents/Header";
import UserThumb from "../watchComponents/UserThumb";
import UserBasics from "../watchComponents/UserBasics";

const Following = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <View>
          <Image
            source={{ uri: "https://loremflickr.com/320/240/brazil,rio" }}
            style={{ width: "100%", height: 210 }}
          />
        </View>
        <View>
          <Text>Stories</Text>
          <Text>Stories from streamers you follow will</Text>
          <View style={{ flexDirection: "row" }}>
            <Text>appear here! </Text>
            <Text style={{ color: "purple" }}>Learn more</Text>
          </View>
        </View>
        <View>
          <Text>Your live Channels</Text>
        </View>
        <View>
          <UserThumb />
          <UserThumb />
        </View>
        <View>
          <Text>Channels Recommended for You</Text>
        </View>
        <View>
          <UserThumb />
          <UserThumb />
          <UserThumb />
          <UserThumb />
          <UserThumb />
        </View>
        <View>
          <Text>Upcoming Streams</Text>
          <ScrollView horizontal>
            <View
              style={{
                borderRadius: 10,
                borderColor: "black",
                borderWidth: 1,
                height: 170,
                width: 330,
                marginRight: 10,
              }}
            >
              <Text>UserInfo</Text>
            </View>
            <View
              style={{
                borderRadius: 10,
                borderColor: "black",
                borderWidth: 1,
                height: 170,
                width: 330,
                marginRight: 10,
              }}
            >
              <Text>UserInfo</Text>
            </View>
            <View
              style={{
                borderRadius: 10,
                borderColor: "black",
                borderWidth: 1,
                height: 170,
                width: 330,
              }}
            >
              <Text>UserInfo</Text>
            </View>
          </ScrollView>
          <View>
            <Text>Your Offline Channels</Text>
          </View>
          <UserBasics />
          <UserBasics />
          <UserBasics />
          <UserBasics />
          <UserBasics />
          <UserBasics />
          <UserBasics />
          <UserBasics />
          <UserBasics />
          <UserBasics />
          <UserBasics />
          <UserBasics />
        </View>
      </ScrollView>
    </>
  );
};

export default Following;
