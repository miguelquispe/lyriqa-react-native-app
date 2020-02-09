import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import Colors from "../constants/Colors";

export const SearchForm = () => {
  const handleSearch = () => {
    alert("Click button search");
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Search lyric..."
          placeholderTextColor={Colors.bodyCopy}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleSearch();
          }}
        >
          <Image source={require("../assets/images/search-icon.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  form: {
    paddingHorizontal: 10,
    flexDirection: "row",
    height: 60,
    backgroundColor: Colors.darkLight,
    borderRadius: 4,
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    flex: 1,
    fontSize: 18,
    backgroundColor: Colors.darkLight,
    height: 60,
    paddingHorizontal: 10,
    color: Colors.featureCopy
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40
  }
});
