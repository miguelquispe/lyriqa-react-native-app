import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchForm } from "../components/Search";
import Colors from "../constants/Colors";

export const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.row}>
        <Text style={styles.title}>What song you go to sing today?</Text>
        <SearchForm />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark,
    flex: 1
  },
  row: {
    paddingHorizontal: 20
  },
  title: {
    fontSize: 32,
    color: Colors.featureCopy,
    marginBottom: 40
  }
});
