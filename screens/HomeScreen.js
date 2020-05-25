import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import AddButton from "../components/AddButton";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>React native transititon</Text>
      <AddButton onAdd={onAdd} />
    </View>
  );

  function onAdd() {
    navigation.navigate("Modal");
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
