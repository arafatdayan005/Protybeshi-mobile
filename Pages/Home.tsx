import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React from "react";
import ItemCards from "../Components/ItemCards";

const Home = () => {
  return (
    <ScrollView>
      <View className="w-full flex items-center bg-[#F6FFFB] h-full">
        <Text className="text-cyan-500 text-2xl mt-12 text-center">
          Protybeshi
        </Text>
        <TextInput
          className="border border-gray-300 h-12 w-80 rounded-full pl-4 mb-4 bg-white mt-2"
          placeholder="Search Item"
        />
        <View className="mt-4 px-2 flex justify-center flex-row flex-wrap">
          <ItemCards></ItemCards>
          <ItemCards></ItemCards>
          <ItemCards></ItemCards>
          <ItemCards></ItemCards>
          <ItemCards></ItemCards>
          <ItemCards></ItemCards>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
