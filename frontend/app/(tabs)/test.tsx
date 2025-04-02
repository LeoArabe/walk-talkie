import { Text, View, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Text style={styles.title}>só teste</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {},
  title: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    margin: 55,
  },
});
