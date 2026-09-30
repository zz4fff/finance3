import { StyleSheet, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes";

// TODO: Set database connections here

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        {/* <Routes /> */}
        { session && session.user ? <Home session={session} /> : <Auth /> }
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
