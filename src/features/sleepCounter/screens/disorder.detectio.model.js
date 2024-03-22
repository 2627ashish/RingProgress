import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Value from "../../../components/RingValues/values";
import RingProgress from "../../../components/RingValues/ringprogress";
export const DisorderDetection = () => (
  <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <RingProgress radius={150} strokeWidth={50} progress={0.6} />
      <View style={styles.values}>
        <Value label="Steps" value="1219" />
        <Value label="Distance" value="0.7 Km" />
        <Value label="Flights Climbed" value="5" />
      </View>
      <StatusBar style="auto" />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 10,
  },
  values: {
    flexDirection: "row",
    gap: 25,
    flexWrap: "wrap",
    marginTop: 100,
  },
});
