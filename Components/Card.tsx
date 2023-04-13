import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  name: string;
  distance: number;
  imagePath: any;
  accumulatedLoyaltyPoints: number;
  maximumLoyaltyPoints: number;
}

export default function Card(props: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.title}>
        <Text style={styles.shopName}>{props.name}</Text>
        <Text>${props.distance}km away</Text>
      </View>
      <View>
        <Image style={styles.image} source={props.imagePath}></Image>
        <LinearGradient
          colors={["transparent", "white"]}
          style={styles.whiteGradient}
          start={{ x: 0.1, y: 1 }}
          end={{ x: 0.8, y: 1 }}
        ></LinearGradient>
        <Text style={styles.loyaltyPoints}>
          {props.accumulatedLoyaltyPoints}/{props.maximumLoyaltyPoints}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    borderColor: "#D1D1D1",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    width: "100%",
    height: 150,
    overflow: "hidden",
  },

  shopName: {
    fontSize: 20,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  title: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  whiteGradient: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },

  loyaltyPoints: {
    position: "absolute",
    right: 10,
    fontSize: 20,
    bottom: "50%",
  },
});
