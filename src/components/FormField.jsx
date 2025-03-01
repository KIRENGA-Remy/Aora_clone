import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { icons } from '../constants'

export default function FormField({ 
  title, value, handleChangeText, keyboardType, placeholder, ...props 
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={{ marginTop: 12, alignSelf: 'center', width: '92%' }}>
      <Text 
        style={{ 
          fontSize: 18, 
          color: '#E5E7EB', 
          fontFamily: 'Poppins-Medium', 
          marginBottom: 4,
          paddingVertical: 6,
          textAlign: 'left'
        }}
      >
        {title}
      </Text>
      <View 
        style={{ 
          borderWidth: 2, 
          borderColor: '#EF4444', 
          width: '100%', 
          height: 48, 
          flexDirection: 'row',
          // justifyContent: 'space-between',
          paddingHorizontal: 16, 
          backgroundColor: '#000', 
          borderRadius: 8, 
          alignItems: 'center' 
        }}
      >
        <TextInput 
          style={{ 
            flex: 1, 
            // flexDirection: 'row',
            color: '#FFF', 
            fontFamily: 'Poppins-SemiBold', 
            fontSize: 16 ,
            outlineStyle: 'none'
          }}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          keyboardType={keyboardType}
          secureTextEntry={title === 'Password' && !showPassword}
          {...props}
        />
        { title === "Password" && (
          <TouchableOpacity 
          onPress={() => setShowPassword(!showPassword)}
          style={{ padding: 8 }}
          >
            <Image
            style={{width: 24, height: 24}}
            source={ !showPassword ? icons.eye : icons.eyeHide} 
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
