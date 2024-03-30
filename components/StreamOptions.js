import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Button, SafeAreaView } from "react-native";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const StreamOptions = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const toggleCameraType = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const openCamera = () => {
    navigation.goBack();
    navigation.navigate("CameraScreen"); // Navigate to the camera screen
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15 }}>Create</Text>
      </View>
      <Pressable
        style={{
          flexDirection: "row",
          backgroundColor: "gray",
          padding: 15,
          width: "94%",
          marginLeft: 10,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("Category")}
      >
        <MaterialCommunityIcons name="gamepad" size={22} color={"white"} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "white" }}>Stream Games</Text>
          <Text style={{ color: "white" }}>
            Play and stream from your mobile device
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          backgroundColor: "gray",
          padding: 15,
          width: "94%",
          marginLeft: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderTopColor: "lightgray",
          borderTopWidth: 2,
        }}
        onPress={openCamera}
      >
        <MaterialCommunityIcons name="video" size={30} color={"white"} />
        <View style={{ marginLeft: 4 }}>
          <Text style={{ color: "white" }}>Stream IRL</Text>
          <Text style={{ color: "white" }}>
            Broadcast your life wherever you are
          </Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: "gray",
          width: "94%",
          height: 40,
          marginLeft: 10,
          borderRadius: 10,
          marginTop: 440,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            textAlignVertical: "center",
            fontSize: 16,
            marginTop: 9,
          }}
        >
          Cancel
        </Text>
      </Pressable>

      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} type={type}>
          <View>
            <Pressable onPress={toggleCameraType}>
              <Text>Flip Camera</Text>
            </Pressable>
          </View>
        </Camera>
      </View>
    </SafeAreaView>
  );
};

export default StreamOptions;
