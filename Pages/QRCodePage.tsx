import { Image, StyleSheet, Text, View } from "react-native";

export default function QRCodePage() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/QRCode.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 170,
  },
  image: {
    width: 230,
    height: 230,
  },
});
