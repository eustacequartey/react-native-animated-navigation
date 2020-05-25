import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, Animated } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const AddButton = ({ onAdd }) => {
  const [scaleValue] = useState(new Animated.Value(0));
  const onButtonClick = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
      duration: 700,
    }).start(() => {
      scaleValue.setValue(0);
    });
    onAdd();
  };

  const scaleValueInterpolation = scaleValue.interpolate({
    inputRange: [0, 0.25, 1],
    outputRange: [1, 20, 30],
  });

  return (
    <>
      <Animated.View
        style={[
          styles.container,
          { transform: [{ scale: scaleValueInterpolation }] },
        ]}
      />
      <TouchableOpacity style={styles.container} onPress={onButtonClick}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </>
  );
};

AddButton.defaultProps = {
  onAdd: function () {},
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "tomato",
    width: 55,
    height: 55,
    borderRadius: 28,
    position: "absolute",
    right: 20,
    alignItems: "center",
    justifyContent: "center",
    bottom: 20,
    zIndex: 1,
    elevation: 1,
  },
});
