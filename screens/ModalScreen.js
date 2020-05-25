import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function ModalScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Modal Screen</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
  },
});
