import { Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const lendItems = ({ item }) => {
  return (
    <TouchableOpacity className="shadow-md mx-2 my-2 bg-white rounded-lg flex flex-row items-center">
      <Image
        source={{ uri: item.img }}
        style={{ height: 70, width:80 }}
        resizeMode="cover"
      ></Image>
      <Text className="pl-2 text-lg">{item.name}</Text>
      <Text className="pl-2 text-lg text-gray-500">
        ${item.safetyMoney} <Text className="text-sm">(safety Money)</Text>
      </Text>
    </TouchableOpacity>
  );
};

export default lendItems;
