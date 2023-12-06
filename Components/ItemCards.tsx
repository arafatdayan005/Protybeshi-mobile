import { Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import toolbox from "./../assets/toolbox.png";
import { useNavigation } from "@react-navigation/native";

const ItemCards = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details")}
      className="shadow-md mx-2 my-2 bg-white rounded-lg"
    >
      <Image source={toolbox}></Image>
      <Text className="mt-4 pl-2 text-lg">Generic Toolbox</Text>
      <Text className="mt-2 pl-2 text-lg mb-2 text-gray-500">
        $80 <Text className="text-sm">(safety Money)</Text>
      </Text>
    </TouchableOpacity>
  );
};

export default ItemCards;
