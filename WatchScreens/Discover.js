import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../watchComponents/Header";
import DiscoverThumb from "../watchComponents/DiscoverThumb";
import ChannelThumb from "../watchComponents/ChannelThumb";

const Discover = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <ScrollView
          style={{}}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <DiscoverThumb />
          <DiscoverThumb />
          <DiscoverThumb />
          <DiscoverThumb />
          <DiscoverThumb />
        </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              width: 200,
              height: 30,
              backgroundColor: "purple",
              borderRadius: 10,
              margin: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
                marginLeft: 10,
              }}
            >
              Games
            </Text>
          </View>
          <View
            style={{
              width: 200,
              height: 30,
              backgroundColor: "purple",
              borderRadius: 10,
              margin: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
                marginLeft: 10,
              }}
            >
              Esports
            </Text>
          </View>
          <View
            style={{
              width: 200,
              height: 30,
              backgroundColor: "purple",
              borderRadius: 10,
              margin: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
                marginLeft: 10,
              }}
            >
              Music
            </Text>
          </View>
          <View
            style={{
              width: 200,
              height: 30,
              backgroundColor: "purple",
              borderRadius: 10,
              margin: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
                marginLeft: 10,
              }}
            >
              IRL
            </Text>
          </View>
          <View
            style={{
              width: 200,
              height: 30,
              backgroundColor: "purple",
              borderRadius: 10,
              margin: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
                marginLeft: 10,
              }}
            >
              Creative
            </Text>
          </View>
        </ScrollView>
        <View style={{ margin: 10 }}>
          <Text>Live Channels we think you'll like</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginLeft: 10 }}
        >
          <ChannelThumb />
          <ChannelThumb />
          <ChannelThumb />
          <ChannelThumb />
          <ChannelThumb />
          <ChannelThumb />
          <ChannelThumb />
        </ScrollView>
        <View style={{ margin: 10 }}>
          <Text>Legendary Women</Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <ChannelThumb />
          <ChannelThumb />
          <ChannelThumb />
          <ChannelThumb />
          <ChannelThumb />
          <ChannelThumb />
          <ChannelThumb />
        </ScrollView>

        <View style={{ margin: 10 }}>
          <Text>Featured Clips from Smaller Communities</Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <ChannelThumb />
          <ChannelThumb />
          <ChannelThumb />
          <ChannelThumb />
          <ChannelThumb />
          <ChannelThumb />
          <ChannelThumb />
        </ScrollView>

        <View style={{ margin: 10 }}>
          <Text>What's hot</Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <ChannelThumb />
          <ChannelThumb />
          <ChannelThumb />
          <ChannelThumb />
          <ChannelThumb />
          <ChannelThumb />
          <ChannelThumb />
        </ScrollView>
      </ScrollView>
    </>
  );
};

export default Discover;
