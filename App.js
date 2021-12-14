import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View
      style={{
        padding: 50,
        flexDirection: "row",
        width: "100%",
        height: 300,
        // justifyContent: "stretch",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          // width: 100,
          // height: 100,
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          // width: 100,
          // height: 100,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          // width: 100,
          // height: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
