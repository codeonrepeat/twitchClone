import { View, Text, TextInput, ScrollView } from "react-native";
import React from "react";

const Search = () => {
  return (
    <View>
      <View
        style={{
          borderColor: "black",
          borderWidth: 1,
          height: 40,
          width: "95%",
          borderRadius: 7,
          marginLeft: 10,
        }}
      >
        <TextInput placeholder="Search" style={{ padding: 10 }} />
      </View>
      <View style={{ padding: 15 }}>
        <Text>RECENT SEARCHES</Text>
      </View>
      <ScrollView style={{ padding: 15 }}>
        <Text> klovoxo</Text>
      </ScrollView>
    </View>
  );
};

export default Search;
