import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Card from "./Card";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Your eco-friendly loyalties</Text>
      <Card></Card>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 40,
    marginVertical: 60,
  },

  heading: {
    fontSize: 22,
    marginBottom: 10,
  },
});
