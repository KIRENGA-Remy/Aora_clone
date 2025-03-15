import React, { useState } from "react";
import { View, ScrollView, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import FormField from "../components/FormField";
import CustomButton from '../components/CustomButton'
import { Link } from 'expo-router'

export default function Register(){
  const [form, setForm ] = useState({
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Logged in!");
    }, 2000);
  };
  return (
    <SafeAreaView className="bg-primary h-full">
        <ScrollView 
        style={{height: '85vh'}}
        keyboardShouldPersistTaps="handled"
        >
            <View style={{ width: '100%', justifyContent: 'center', height: '100%', marginTop: 32}}>
              <Image 
              source={images.logo}
              resizeMode="contain"
              style={{width: '115px', height: '35px', marginVertical: '32px', marginHorizontal: '8px'}}
              />
              <Text className="text-3xl font-semibold text-white px-4">Log in to Aora</Text>
              <FormField 
              title="Email"
              value={form.email}
              placeholder="Enter your email"
              handleChangeText={(e) => setForm({...form, email: e})}
              otherStyles={{ marginTop: '32px'}}
              keyboardType="email-address"
              />
              <FormField 
              title="Password"
              placeholder="Enter your password"
              value={form.password}
              handleChangeText={(e) => setForm({...form, password: e})}
              />
              <CustomButton 
              title="Sign in"
              handlePress={submit}
              isLoading={isSubmitting}
              />
              <View className="items-center justify-center flex-row gap-2">
                <Text className="text-2xl text-gray-100 font-pregular">Don't have account?</Text>
                <Link 
                href="/Register"
                className="text-2xl font-psemibold text-secondary"
                >
                  Register
                </Link>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
  )
}