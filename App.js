import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View } from "react-native";

const TouchableWithoutFeedbackExample = () => {
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>{count}</Text>
        <Text style={styles.followers}>Followers</Text>
      </View>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Touch Here!</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 60,
    backgroundColor: 'black'
  },
  button: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: '700',
    color: '#fff'
  },
  countContainer: {
    alignItems: "center",
  },
  countText: {
    color: "#fff",
    fontSize: 40,
    fontWeight: '800',
  },
  followers: {
    color: '#fff',
    marginTop:                                            5,
    marginBottom: 30,
    fontSize: 35,
    fontWeight: '600'
  }
});

export default TouchableWithoutFeedbackExample;