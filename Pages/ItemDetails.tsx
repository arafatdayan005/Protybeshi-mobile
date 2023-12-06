import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import toolbox from "./../assets/toolbox.png";
import { EvilIcons } from "@expo/vector-icons";

const ItemDetails = () => {
  return (
    <View className="w-full flex bg-[#F6FFFB] h-full">
      <Image className="w-full h-1/3" source={toolbox}></Image>
      <View className="mt-10 px-8">
        <Text className="text-3xl font-bold">Generic Toolbox</Text>
        <View className="mt-5 flex flex-row items-center">
          <EvilIcons name="user" size={60} color="black" />
          <Text className="text-lg">Arafat Dayan</Text>
        </View>
        <Text className="mt-2">
          {" "}
          <Text className="font-bold">Description:</Text> Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Ipsum, blanditiis unde? Doloremque
          commodi ea ab quisquam cum amet error voluptate consequuntur
          necessitatibus quibusdam, adipisci, eos dolorum sed fugiat vel quasi
          exercitationem.
        </Text>
        <View className="flex flex-col items-center">
          <Text className="text-2xl font-bold mt-2">Phone</Text>
          <Text className="text-2xl font-bold mt-2 text-[#444AC4]">
            0111111111
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
          <TouchableOpacity className="border border-blue-700 w-72 h-10">
            <Text className="text-center m-auto text-[#444AC4] text-lg">
              Rent for $80
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemDetails;
