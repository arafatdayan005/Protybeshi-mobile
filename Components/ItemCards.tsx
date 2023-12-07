import { Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ItemCards = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {itemData: item})}
      className="shadow-md mx-2 my-2 bg-white rounded-lg"
    >
      <Image source={{ uri: item.img }} style={{height: 120 }}
  resizeMode="cover"></Image>
      <Text className="mt-4 pl-2 text-lg">{item.name}</Text>
      <Text className="mt-2 pl-2 text-lg mb-2 text-gray-500">
        ${item.safetyMoney} <Text className="text-sm">(safety Money)</Text>
      </Text>
    </TouchableOpacity>
  );
};

export default ItemCards;
