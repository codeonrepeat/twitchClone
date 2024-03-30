import React, { useRef, useState, useEffect } from "react";
import { View, Text, Button, Pressable } from "react-native";
import { Camera } from "expo-camera";
import {
  MaterialCommunityIcons,
  Feather,
  Ionicons,
  Octicons,
  Foundation,
} from "@expo/vector-icons";

const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);

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

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo); // Do something with the captured photo
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={Camera.Constants.Type.back}
        ref={cameraRef}
      >
        <View
          style={{
            backgroundColor: "transparent",
            flexDirection: "row",
            marginTop: 100,
          }}
        ></View>
        <View
          style={{
            marginTop: 0,
            flexDirection: "row",
            gap: 20,
            // borderWidth: 1,
            // borderColor: "white",
            borderRadius: 10,
            height: 70,
            width: "88%",
            marginLeft: 25,
            marginBottom: 20,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginLeft: 48,
              alignItems: "center",
              gap: 30,
              marginTop: 10,
            }}
          >
            <View>
              <View
                style={{
                  borderRadius: 5,
                  backgroundColor: "white",
                  padding: 3,
                  marginLeft: -5,
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontSize: 12,
                  }}
                >
                  OFFLINE
                </Text>
              </View>
              <Text style={{ color: "lightgray", fontSize: 12 }}>Stream</Text>
            </View>
            <View>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                  marginLeft: 12,
                }}
              >
                --
              </Text>
              <Text style={{ color: "lightgray", fontSize: 12 }}>Uptime</Text>
            </View>
            <View>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  marginLeft: 12,
                  fontWeight: "bold",
                }}
              >
                --
              </Text>
              <Text style={{ color: "lightgray", fontSize: 12 }}>Viewers</Text>
            </View>
            <View>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  marginLeft: 20,
                  fontWeight: "bold",
                }}
              >
                0
              </Text>
              <Text style={{ color: "lightgray", fontSize: 12 }}>
                Followers
              </Text>
            </View>
          </View>
        </View>

        <Pressable
          onPress={() => navigation.navigate("HomeStackEditStreamInfo")}
          style={{
            marginTop: 0,
            flexDirection: "row",
            gap: 20,
            // borderWidth: 1,
            // borderColor: "white",
            borderRadius: 10,
            height: 70,
            width: "88%",
            marginLeft: 25,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "gray",
              marginVertical: 5,
              borderRadius: 10,
              width: 45,
              marginLeft: 5,
              opacity: 0.6,
            }}
          >
            <Text style={{ color: "white" }}>icon</Text>
          </View>
          <View style={{ marginLeft: 250, marginTop: 20 }}>
            <MaterialCommunityIcons
              name="pencil-outline"
              size={25}
              color={"white"}
            />
          </View>
        </Pressable>

        <View
          style={{
            flexDirection: "row",
            marginTop: 450,
            alignItems: "center",
            marginLeft: 90,
          }}
        >
          <View
            style={{
              borderRadius: 100,
              borderWidth: 2,
              borderColor: "purple",
              marginHorizontal: 20,
            }}
          >
            <Foundation
              name="sound"
              color={"white"}
              size={26}
              onPress={() => console.log("record/stream")}
            />
          </View>
          <View
            style={{
              marginTop: 0,
              flexDirection: "row",
              gap: 20,
              // borderWidth: 1,
              // borderColor: "white",
              borderRadius: 50,
              height: 40,
              width: "45%",
              alignItems: "center",
              marginLeft: 0,
              backgroundColor: "rgba(0,0,0,0.4)",
            }}
          >
            <MaterialCommunityIcons
              name="microphone"
              size={26}
              color={"white"}
              style={{ marginLeft: 18 }}
              onPress={() => console.log("Mute microphone")}
            />

            <Feather
              name="refresh-cw"
              size={22}
              color={"white"}
              onPress={toggleCameraType}
              // onPress={() => console.log("flip screen")}
            />

            <Ionicons
              name="ellipsis-vertical"
              size={22}
              color={"white"}
              onPress={() =>
                console.log("menu: stream manager, edit, hide chat")
              }
            />
          </View>
        </View>
        {/* <Pressable onPress={takePicture}>
            <Text style={{ color: "white" }}>Stream</Text>
          </Pressable> */}
        <Pressable
          style={{
            marginLeft: 182,
            marginTop: 30,
          }}
          onPress={() => navigation.goBack()}
        >
          <Octicons name="x-circle-fill" size={35} color={"white"} />
        </Pressable>
      </Camera>
    </View>
  );
};

export default CameraScreen;
