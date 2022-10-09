import React from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import {Icon} from "@rneui/themed"

type LevelProps = {
  repeat: number
}

const PriorityLevel: React.FC<LevelProps> = ({ repeat }) => {
  return (
    <View style={styles.container}>
      {
        Array.from({ length: 3 }, (_, i) => <Icon key={i} name="star" type="evilicon"/>)
      }
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default PriorityLevel;