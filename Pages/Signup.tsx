import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Signup = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    navigation.navigate("Home");
  };
  return (
    <>
      <View className="w-full flex justify-center items-center bg-[#F6FFFB] bg-opacity-20 h-full">
        <Text className="text-cyan-500 text-3xl font-bold mb-12">
          Register
        </Text>
        <View>
          <Text className="text-xl pl-2 mb-2">Name</Text>
          <TextInput
            className="border border-gray-300 h-12 w-72 rounded-full pl-4 mb-4 bg-white"
            placeholder="John Doe"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <Text className="text-xl pl-2 mb-2">Email</Text>
          <TextInput
            className="border border-gray-300 h-12 w-72 rounded-full pl-4 mb-4 bg-white"
            placeholder="john.doe@gmail.com"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text className="text-xl pl-2 mb-2">Password</Text>
          <TextInput
            className="border border-gray-300 h-12 w-72 rounded-full pl-4 mb-4 bg-white"
            placeholder="********"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Text className="text-xl pl-2 mb-2">Confirm Password</Text>
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
          onPress={handleSignup}
        >
          <Text className="font-bold text-center text-xl text-white">
            Sign Up
          </Text>
        </TouchableOpacity>
        <Text className="text-xs text-right mt-8">
          Already have an account?
        </Text>
        <Text
          className="text-lg text-cyan-500"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Text>
      </View>
    </>
  );
};

export default Signup;
