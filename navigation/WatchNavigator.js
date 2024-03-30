import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Following from "../WatchScreens/Following";
import Discover from "../WatchScreens/Discover";
import Browse from "../WatchScreens/Browse";
import Search from "../WatchScreens/Search";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// function WatchStacking() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         options={{
//           headerShown: false,
//         }}
//         name="Stream"
//         component={Stream}
//       />
//       <Stack.Screen
//         name="StreamOptions"
//         component={StreamOptions}
//         options={{ presentation: "formSheet" }}
//       />
//       <Stack.Screen
//         name="Category"
//         component={Category}
//         options={{ presentation: "fullScreenModal" }}
//       />
//       <Stack.Screen
//         name="CameraScreen"
//         component={CameraScreen}
//         options={{ headerShown: false, presentation: "fullScreenModal" }}
//       />
//     </Stack.Navigator>
//   );
// }

const WatchNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Following" component={Following} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Browse" component={Browse} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

export default WatchNavigator;
