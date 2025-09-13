import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BatSignal from "../components/BatSignal";

export default function HomeScreen() {
  const [active, setActive] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🦇 Bat-Sinal</Text>

      <BatSignal visible={active} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => setActive(!active)}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>
          {active ? "Apagar Sinal" : "Acionar Sinal"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    marginBottom: 20,
    fontWeight: "bold",
  },
  button: {
    position: "absolute",
    bottom: 40,
    backgroundColor: "#222",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 30,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFD700",
    fontSize: 18,
    fontWeight: "bold",
  },
});
