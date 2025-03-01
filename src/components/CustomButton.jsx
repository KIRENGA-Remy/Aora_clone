import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";

export default function CustomButton({ title, handlePress, isLoading }) {
  return (
    <TouchableOpacity
      onPress={!isLoading ? handlePress : null}
      activeOpacity={0.7}
      style={{
        backgroundColor: isLoading ? "#FFA50080" : "orange",
        borderWidth: 1,
        borderRadius: 8,
        width: "92%", 
        alignSelf: "center", 
        marginVertical: 48,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        opacity: isLoading ? 0.7 : 1
      }}
      disabled={isLoading}
    >
      {isLoading ? (
      <ActivityIndicator size="small" color="black" /> // Show loader
    ) : (
      <Text
      style={{
        color: "black",
        textAlign: "center",
        fontSize: 16,
        paddingVertical: 16,
        fontWeight: "700",
      }}
    >
      {title}
    </Text>
    )}
    </TouchableOpacity>
  );
}
