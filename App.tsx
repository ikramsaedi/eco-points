import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import LoyaltiesPage from "./Pages/LoyaltiesPage";
export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Loyalties Page should be switched out for a home page */}
      <LoyaltiesPage />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 40,
    marginVertical: 60,
  },
});
