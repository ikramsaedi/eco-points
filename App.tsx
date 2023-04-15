import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, ScrollView, View } from "react-native";
import ConfirmationPage from "./Pages/ConfirmationPage";
import LoyaltiesPage from "./Pages/LoyaltiesPage";
import QRCodePage from "./Pages/QRCodePage";
import * as Linking from "expo-linking";

const Stack = createNativeStackNavigator();

export default function App() {
  const url = Linking.useURL();
  console.log("HEYYY", url);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ScrollableLoyalties"
          component={ScrollableLoyalties}
        />
        <Stack.Screen
          name="QRCodePage"
          component={QRCodePage}
          options={{ title: "Scan Me" }}
        />
        <Stack.Screen name="ConfirmationPage" component={ConfirmationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function ScrollableLoyalties({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Loyalties Page should be switched out for a home page */}
      <LoyaltiesPage navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
