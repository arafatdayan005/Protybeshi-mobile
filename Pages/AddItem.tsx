import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddItem = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [safetyMoney, setSafetyMoney] = useState("");
  const [image, setImage] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const userEmail = await AsyncStorage.getItem("userEmail");
        if (userEmail !== null) {
          setEmail(userEmail);
        }
      } catch (error) {
        console.error("Error fetching user email:", error);
      }
    };

    fetchUserEmail();
  }, []);

  const handlePost = () => {
    const itemData = {
      name: name,
      description: description,
      safetyMoney: parseFloat(safetyMoney),
      img: image,
      contact: parseInt(contact),
      email: email,
    };

    axios.post("http://192.168.0.106:3000/items", itemData).then(() => {
      setName("");
      setDescription("");
      setSafetyMoney("");
      setImage("");
      setContact("");
    });
  };

  return (
    <ScrollView>
      <View className="w-full flex bg-[#F6FFFB] h-full pt-12">
        <Text className="text-2xl text-center font-bold">Item Description</Text>
        <View className="px-6 mt-4">
          <Text className="text-xl pl-2 mb-2">Name</Text>
          <TextInput
            className="border border-gray-300 h-12 rounded-lg w-full pl-4 mb-4 bg-white"
            placeholder="e.g: Toolbox"
            onChangeText={(text) => setName(text)}
          />
          <Text className="text-xl pl-2 mb-2">Description</Text>
          <TextInput
            className="border border-gray-300 h-12 rounded-lg w-full pl-4 mb-4 bg-white"
            placeholder="Item Description"
            multiline
            numberOfLines={5}
            onChangeText={(text) => setDescription(text)}
          />
          <Text className="text-xl pl-2 mb-2">Safety Money</Text>
          <TextInput
            className="border border-gray-300 h-12 rounded-lg w-full pl-4 mb-4 bg-white"
            placeholder="e.g: $80"
            onChangeText={(text) => setSafetyMoney(text)}
          />
          <Text className="text-xl pl-2 mb-2">Image</Text>
          <TextInput
            className="border border-gray-300 h-12 rounded-lg w-full pl-4 mb-4 bg-white"
            placeholder="Open Gallary"
            onChangeText={(text) => setImage(text)}
          />
          <Text className="text-xl pl-2 mb-2">Contact</Text>
          <TextInput
            className="border border-gray-300 h-12 rounded-lg w-full pl-4 mb-4 bg-white"
            placeholder="e.g: 0111111111"
            onChangeText={(text) => setContact(text)}
          />
          <TouchableOpacity className="bg-cyan-400 w-24 px-4 py-3 rounded-full my-6 mx-auto">
            <Text
              className="font-bold text-center text-xl text-white"
              onPress={handlePost}
            >
              Post
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddItem;
