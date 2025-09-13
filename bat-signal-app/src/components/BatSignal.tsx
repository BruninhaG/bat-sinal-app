import React from "react";
import { View, StyleSheet, Image, Animated } from "react-native";

type Props = {
  visible: boolean;
};

export default function BatSignal({ visible }: Props) {
  const opacity = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (visible) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.signalWrap, { opacity }]}>
        <Image
          source={require("../assets/batsignal.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  signalWrap: {
    width: 320,
    height: 320,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 320,
    height: 320,
  },
});
