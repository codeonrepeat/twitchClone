import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import ContentHeader from "../components/Content/ContentHeader";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
const Content = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ContentHeader />
      <View>
        <Text>Hello world!</Text>
        <Menu>
          <MenuTrigger text="Select action" />
          <MenuOptions
            optionsContainerStyle={{
              backgroundColor: "rgba(0,0,0,0.4)",
              borderRadius: 20,
            }}
          >
            <MenuOption onSelect={() => alert(`Save`)} text="Save" />
            <MenuOption onSelect={() => alert(`Delete`)}>
              <Text style={{ color: "red" }}>Delete</Text>
            </MenuOption>
            <MenuOption
              onSelect={() => alert(`Not called`)}
              disabled={true}
              text="Disabled"
            />
          </MenuOptions>
        </Menu>
      </View>
    </View>
  );
};

export default Content;
