import { StyleSheet, Text, View } from "react-native";
import Card from "../Components/Card";

export default function LoyaltiesPage() {
  return (
    <>
      <Text style={styles.heading}>Your eco-friendly loyalties</Text>
      <Card></Card>
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    marginBottom: 10,
  },
});
