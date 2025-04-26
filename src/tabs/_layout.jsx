import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Bookmark from "./Bookmark"
import Create from "./Create"
import Profile from "./Profile";
import { icons } from "../constants";

const Tab = createBottomTabNavigator();

const TabIcon = ({ icon, color, name, focused }) => {
  const TAB_COLORS = {
    active: "#FFA001",
    inactive: "#CDCDE0" 
  }
  
  return (
    <View 
      style={{
        flexDirection: 'column', 
        alignItems: "center", 
        justifyContent: "center", 
        gap: 4, 
        paddingTop: 12,
        width: 80 // Added fixed width to prevent shifting
      }}
      accessibilityRole="button"
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{ 
          width: 30, 
          height: 30, 
          tintColor: focused ? TAB_COLORS.active : TAB_COLORS.inactive, 
          transform: [{scale: focused ? 1.2 : 1}] 
        }}
      />
      <Text
        style={{
          color: focused ? TAB_COLORS.active : TAB_COLORS.inactive,
          fontSize: 10, // Slightly smaller for better fit
          fontWeight: focused ? '600' : '400', // More subtle weight difference
          textAlign: "center",
          fontFamily: "Poppins-Regular", // Consistent font family
          width: '100%', // Take full width of parent
          includeFontPadding: false // Remove extra font padding
        }}
        allowFontScaling={false}
        numberOfLines={1}
        ellipsizeMode="tail" // Add ellipsis if needed
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