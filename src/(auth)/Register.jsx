import React from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Register() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Login</Text>
      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-2 w-80 mt-4"
        placeholder="Email"
      />
      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-2 w-80 mt-2"
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Login" />
    </View>
  );
}
