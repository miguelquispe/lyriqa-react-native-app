import React from "react";
import {
  View,
  Text,
  Button,
  StatusBar,
  StyleSheet,
  SafeAreaView
} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

export const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View>
        <Text>Search Screen</Text>
        <Button
          title="Go to lyric"
          onPress={() => navigation.navigate("Lyric")}
        ></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#353553",
    flex: 1
  }
});
