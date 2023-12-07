import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

const ItemDetails = ({route}) => {
  const { itemData } = route.params;
  return (
    <View className="w-full flex bg-[#F6FFFB] h-full">
      <Image className="w-full h-1/3" source={{ uri: itemData.img}}></Image>
      <View className="mt-10 px-8">
        <Text className="text-3xl font-bold">{itemData.name}</Text>
        <View className="mt-5 flex flex-row items-center">
          <EvilIcons name="user" size={60} color="black" />
          <Text className="text-lg">Arafat Dayan</Text>
        </View>
        <Text className="mt-2">
          <Text className="font-bold">Description:</Text> {itemData.description}
        </Text>
        <View className="flex flex-col items-center">
          <Text className="text-2xl font-bold mt-2">Phone</Text>
          <Text className="text-2xl font-bold mt-2 text-[#444AC4]">
          {itemData.contact}
          </Text>
        </View>
        <View className=" mt-2 flex items-center bg-white">
          <Text className="font-bold text-lg">Choose Date</Text>
          <View className="flex flex-row mt-2">
            <TextInput
              className="border border-gray-500 h-10 w-28 text-center mb-4 mr-8 bg-white"
              placeholder="From"
            />
            <TextInput
              className="border border-gray-500 h-10 text-center w-28 mb-4 ml-8 bg-white"
              placeholder="To"
            />
          </View>
          <TouchableOpacity className="border border-blue-700 w-72 h-10 mb-4">
            <Text className="text-center mx-auto text-[#444AC4] text-lg">
              Rent for ${itemData.safetyMoney}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemDetails;
