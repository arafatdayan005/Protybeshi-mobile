import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigation.navigate("Home");
  };

  return (
    <View className="w-full flex justify-center items-center bg-[#F6FFFB] h-full">
      <Text className="text-cyan-500 text-3xl font-bold mb-12">Login</Text>
      <View>
        <Text className="text-xl pl-2 mb-2">Email</Text>
        <TextInput
          className="border border-gray-300 h-12 w-72 rounded-full pl-4 mb-4 bg-white"
          placeholder="john.doe@gmail.com"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <Text className="text-xl pl-2 mb-2">Password</Text>
        <TextInput
          className="border border-gray-300 h-12 w-72 rounded-full pl-4 bg-white"
          placeholder="********"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity
        className="bg-cyan-500 w-72 py-3 rounded-full mt-4"
        onPress={handleLogin}
      >
        <Text className="font-bold text-center text-xl text-white">
          Let's Borrow
        </Text>
      </TouchableOpacity>
      <Text className="text-xs text-right mt-8">Don't have an account?</Text>
      <Text
        className="text-lg text-cyan-500"
        onPress={() => navigation.navigate("Sign Up")}
      >
        Sign Up
      </Text>
    </View>
  );
};

export default Login;
