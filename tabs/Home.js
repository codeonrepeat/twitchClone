import { View, Text, ScrollView, Button, Pressable, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HomeStackHeader from "../components/HomeStackHeader";
import HomeStackStats from "../components/HomeStackStats";
import HomeStackGrowth from "../components/HomeStackGrowth";
import HomeStackAboutMe from "../components/HomeStackAboutMe";
import HomeStackFeatures from "../components/HomeStackFeatures";
import HomeStackTip from "../components/HomeStackTip";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <HomeStackHeader />
      <ScrollView>
        <View>
          <Text style={{ fontSize: 30, padding: 10 }}>Home</Text>
        </View>
        <HomeStackStats />
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Grow Your Community
          </Text>
        </View>
        <HomeStackGrowth />
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Your action items
          </Text>
        </View>
        <HomeStackAboutMe />
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Features for You
          </Text>
        </View>

        <HomeStackFeatures />
        <View>
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Tip of the Day
            </Text>
          </View>
          <HomeStackTip />
          <View>
            <View
              style={{
                backgroundColor: "black",
                height: 200,
                width: "90%",
                alignSelf: "center",
                padding: 10,
              }}
            >
              <Text style={{ backgroundColor: "white", width: 50 }}>
                offline
              </Text>
            </View>
            <Pressable
              onPress={() => navigation.navigate("HomeStackStreamManager")}
              style={{
                height: 30,
                backgroundColor: "#8F47FE",
                width: "90%",
                marginHorizontal: 20,
                borderRadius: 5,
                marginTop: 2,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  marginTop: 5,
                  fontWeight: "bold",
                }}
              >
                Stream Manager
              </Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate("HomeStackEditStreamInfo")}
              style={{
                height: 30,
                backgroundColor: "gray",
                width: "90%",
                marginHorizontal: 20,
                borderRadius: 5,
                marginTop: 2,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  marginTop: 5,
                  fontWeight: "bold",
                }}
              >
                Edit Stream Info
              </Text>
            </Pressable>
          </View>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 11,
                width: 350,
                padding: 5,
                marginLeft: 20,
              }}
            >
              Use Stream Manager to monitor your Chat, Stream Health and more
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              backgroundColor: "black",
              height: 160,
              opacity: 0.8,
            }}
          >
            <Text
              style={{
                color: "gray",
                alignSelf: "center",
                marginTop: 70,
              }}
            >
              No recent activity
            </Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate("HomeStackStreamManager")}
            style={{ marginTop: 20, marginBottom: 50 }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#8F47FE",
                fontWeight: "600",
              }}
            >
              See all activity
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
