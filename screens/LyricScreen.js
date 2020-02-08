import React from "react";
import { View, Text, StatusBar, StyleSheet, SafeAreaView } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import

export const LyricScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View>
        <Text>Lyric Screens</Text>
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
