import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";

const AddItem = () => {
  return (
    <View className="w-full flex bg-[#F6FFFB] h-full pt-12">
      <Text className="text-2xl text-center font-bold">Item Description</Text>
      <View className="px-6 mt-4">
        <Text className="text-xl pl-2 mb-2">Name</Text>
        <TextInput
          className="border border-gray-300 h-12 rounded-lg w-full pl-4 mb-4 bg-white"
          placeholder="e.g: Toolbox"
        />
        <Text className="text-xl pl-2 mb-2">Description</Text>
        <TextInput
          className="border border-gray-300 h-12 rounded-lg w-full pl-4 mb-4 bg-white"
          placeholder="Item Description"
          multiline
          numberOfLines={5}
        />
        <Text className="text-xl pl-2 mb-2">Safety Money</Text>
        <TextInput
          className="border border-gray-300 h-12 rounded-lg w-full pl-4 mb-4 bg-white"
          placeholder="e.g: $80"
        />
        <Text className="text-xl pl-2 mb-2">Image</Text>
        <TextInput
          className="border border-gray-300 h-12 rounded-lg w-full pl-4 mb-4 bg-white"
          placeholder="Open Gallary"
        />
        <Text className="text-xl pl-2 mb-2">Contact</Text>
        <TextInput
          className="border border-gray-300 h-12 rounded-lg w-full pl-4 mb-4 bg-white"
          placeholder="e.g: 0111111111"
        />
        <TouchableOpacity className="bg-cyan-400 w-24 px-4 py-3 rounded-full mt-4 mx-auto">
          <Text className="font-bold text-center text-xl text-white">Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddItem;
