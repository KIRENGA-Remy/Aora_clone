import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router"; 
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  const router = useRouter(); 

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#121212" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ width: "100%", justifyContent: "center", alignItems: "center", flex: 1 }}>
          {/* Image section */}
          <Image source={images.logo} resizeMode="contain" style={{ width: 130, height: 84 }} />
          <Image source={images.cards} resizeMode="contain" style={{ maxWidth: 380, width: "100%", height: 300 }} />

          {/* Title */}
          <View style={{ position: "relative", marginTop: 20 }}>
            <Text style={{ color: "#FFFFFF", fontSize: 30, textAlign: "center", fontWeight: "bold" }}>
              Discover Endless Possibilities with{" "}
              <Text style={{ color: "#FFA001" }}>Aora</Text>
            </Text>
          </View>

          {/* Subtitle */}
          <Text style={{ color: "#bbb", fontSize: 20, fontWeight: "600", textAlign: "center", paddingTop: 24 }}>
            Where creativity meets innovation, embark on a journey of limitless exploration with Aora
          </Text>

          {/* Navigate to Login */}
          <CustomButton 
            title="Continue with Email"
            handlePress={() => router.push("/auth/Login")} 
          />
          
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
