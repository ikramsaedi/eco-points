import { Image, StyleSheet, Text, View } from "react-native";
import { styles as mainStyles } from "../styles";

export default function ConfirmationPage() {
  return (
    <View style={styles.container}>
      <Text style={mainStyles.heading}>Success!</Text>
      <Image style={styles.image} source={require("../assets/giftBox.png")} />
      <Text style={styles.description}>
        blah blah the scanner did a good job of scanning the customer's QR code
        give them a pat on the back (the scanner or the customer - take your
        pick)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 70,
  },
  image: {
    width: 230,
    height: 230,
  },
  description: {
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    textAlign: "center",
  },
});
