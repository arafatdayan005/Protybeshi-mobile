import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import image from "./../assets/Image.png";

const Welcome = ({ navigation }) => {
  return (
    <>
      <View className="w-full flex justify-center items-center bg-white h-full">
        <Text className="text-cyan-500 text-4xl text-center font-bold">
          Protybeshi
        </Text>
        <Image source={image} />
        <Text className="text-2xl font-semibold">Why Buy When</Text>
        <Text className="text-2xl">
          You Can <Text className="text-cyan-500 font-bold">Borrow?</Text>
        </Text>
        <TouchableOpacity
          className="bg-cyan-500 px-8 py-3 rounded-full mt-12"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="font-bold text-white">Dive In</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Welcome;
