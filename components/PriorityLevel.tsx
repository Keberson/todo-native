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
        [...Array(repeat)].map((item, id) => <Icon key={id} name="star" type="evilicon"/>)
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