import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Bookmark from "./Bookmark"
import Create from "./Create"
import Profile from "./Profile";
import { icons } from "../constants"; // Import your icons

const Tab = createBottomTabNavigator();

// Reusable TabIcon Component
const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={{flexDirection:'column', alignItems: "center", justifyContent: "center", gap: 8 }}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 24, height: 24, tintColor: color }}
      />
      <Text
        style={{
          color: color,
          fontSize: 12,
          fontWeight: 'bold', // Reduce text size
          fontFamily: focused ? "Poppins-SemiBold" : "Poppins-Regular",
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 64,
          paddingTop: 12
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.home} color={color} name="Home" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          title: "Bookmark",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.bookmark} color={color} name="Bookmark" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={Create}
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.plus} color={color} name="Create" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.profile} color={color} name="Profile" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}