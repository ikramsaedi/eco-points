import { Pressable, StyleSheet, Text, View } from "react-native";
import Card from "../Components/Card";
import { styles } from "../styles";
import dummy_data from "../loyaltyDummyData";

export default function LoyaltiesPage({ navigation }) {
  return (
    <View style={{ marginHorizontal: 30 }}>
      <Text style={{ marginTop: 30 }}></Text>
      {dummy_data.map((shop) => {
        return (
          <Pressable
            key={shop.name}
            onPress={() =>
              navigation.navigate("QRCodePage", { name: shop.name })
            }
          >
            <Card
              key={shop.name}
              name={shop.name}
              distance={shop.distance}
              imagePath={shop.imagePath}
              accumulatedLoyaltyPoints={shop.accumulatedLoyaltyPoints}
              maximumLoyaltyPoints={shop.maximumLoyaltyPoints}
            />
          </Pressable>
        );
      })}
    </View>
  );
}
