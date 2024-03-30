import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../tabs/Home";
import Content from "../tabs/Content";
import Stream from "../tabs/Stream";
import Analytics from "../tabs/Analytics";
import Channel from "../tabs/Channel";
import StreamOptions from "../components/StreamOptions";
import Category from "../components/Category";
import CameraScreen from "../components/CameraScreen";
import ProfileEditor from "../components/ProfileEditor";
import Turbo from "../screens/Turbo";
import Messages from "../screens/Messages";
import Inbox from "../screens/Inbox";
import HomeStackEdit from "../components/HomeStackEdit";
import HomeStackBio from "../components/HomeStackBio";
import HomeStackSchedule from "../components/HomeStackSchedule";
import HomeStackEditStreamInfo from "../components/HomeStackEditStreamInfo";
import HomeStackStreamManager from "../components/HomeStackStreamManager";
import Definitions from "../components/Analytics/Definitions";
import HomeStackSocials from "../components/HomeStackSocials";
import Settings from "../components/Settings";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Stacking() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Stream"
        component={Stream}
      />

      <Stack.Screen
        name="StreamOptions"
        component={StreamOptions}
        options={{ presentation: "formSheet" }}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={{ presentation: "fullScreenModal" }}
      />
      <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{ headerShown: false, presentation: "fullScreenModal" }}
      />
      <Stack.Screen
        name="HomeStackEditStreamInfo"
        component={HomeStackEditStreamInfo}
        options={{ presentation: "formSheet" }}
      />
    </Stack.Navigator>
  );
}

function EditStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileEditor"
        component={ProfileEditor}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeStackSchedule"
        component={HomeStackSchedule}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditStack"
        component={EditStack}
        options={{ presentation: "formSheet" }}
      />
      <Stack.Screen
        name="Channel"
        component={Channel}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="Turbo" component={Turbo} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Inbox" component={Inbox} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen
        name="HomeStackEdit"
        component={HomeStackEdit}
        options={{ presentation: "formSheet" }}
      />
      <Stack.Screen
        name="HomeStackBio"
        component={HomeStackBio}
        options={{ presentation: "formSheet" }}
      />
      <Stack.Screen
        name="HomeStackSchedule"
        component={HomeStackSchedule}
        options={{ presentation: "formSheet" }}
      />
      <Stack.Screen
        name="HomeStackEditStreamInfo"
        component={HomeStackEditStreamInfo}
        options={{ presentation: "formSheet" }}
      />
      <Stack.Screen
        name="HomeStackStreamManager"
        component={HomeStackStreamManager}
      />
      <Stack.Screen
        name="HomeStackSocials"
        component={HomeStackSocials}
        options={{ presentation: "formSheet" }}
      />
    </Stack.Navigator>
  );
}

function ContentStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Content"
        component={Content}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Turbo" component={Turbo} />
      <Stack.Screen
        name="ProfileEditor"
        component={ProfileEditor}
        options={{ presentation: "formSheet" }}
      />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Inbox" component={Inbox} />
    </Stack.Navigator>
  );
}

function AnalyticsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Analytics"
        component={Analytics}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProfileEditor"
        component={ProfileEditor}
        options={{ presentation: "formSheet" }}
      />
      <Stack.Screen
        name="Definitions"
        component={Definitions}
        options={{ presentation: "formSheet" }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeStackSchedule"
        component={HomeStackSchedule}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function ChannelStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Channel"
        component={Channel}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeStackEdit"
        component={HomeStackEdit}
        options={{ presentation: "formSheet" }}
      />
      <Stack.Screen
        name="HomeStackStreamManager"
        component={HomeStackStreamManager}
        options={{ presentation: "formSheet" }}
      />
    </Stack.Navigator>
  );
}

const Navigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="ContentStack" component={ContentStack} />
      <Tab.Screen
        name="Stacking"
        component={Stacking}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="AnalyticsStack" component={AnalyticsStack} />
      <Tab.Screen name="ChannelStack" component={ChannelStack} />
    </Tab.Navigator>
  );
};

export default Navigator;
