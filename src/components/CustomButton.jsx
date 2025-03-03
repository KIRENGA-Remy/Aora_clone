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
        alignItems: "center",
        justifyContent: "center",
        opacity: isLoading ? 0.7 : 1
      }}
      disabled={isLoading}
    >
      <View style={{paddingVertical: 12, color: "black"}}>
      {isLoading ? (
      <ActivityIndicator size="small" color= "black" /> 
    ) : (
      <Text
      style={{
        textAlign: "center",
        fontSize: 16,
        fontWeight: "700",
      }}>
        {title}
        </Text>
      )}
      </View>
    </TouchableOpacity>
  );
}
