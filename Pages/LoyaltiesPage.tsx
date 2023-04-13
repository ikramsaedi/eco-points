import { StyleSheet, Text, View } from "react-native";
import Card from "../Components/Card";
import dummy_data from "./loyalty_dummy_data";

export default function LoyaltiesPage() {
  return (
    <>
      <Text style={styles.heading}>Your eco-friendly loyalties</Text>
      {dummy_data.map((shop) => {
        return (
          <Card
            key={shop.name}
            name={shop.name}
            distance={shop.distance}
            imagePath={shop.imagePath}
            accumulatedLoyaltyPoints={shop.accumulatedLoyaltyPoints}
            maximumLoyaltyPoints={shop.maximumLoyaltyPoints}
          />
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    marginBottom: 20,
  },
});
