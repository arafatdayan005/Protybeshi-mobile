import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { EvilIcons } from "@expo/vector-icons";
import axios from "axios";
import LendItems from "../Components/LendItems";

const Profile = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://192.168.0.106:3000/items");
      const filteredData = response.data.filter((item) => item.email === email);
      console.log(email);
      console.log(filteredData);
      setData(filteredData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("userEmail");
    navigation.navigate("Login");
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={["#00ffff"]}
        />
      }
    >
      <View className="w-full flex items-center bg-[#F6FFFB] h-full">
        <Text className="text-2xl mt-10 text-black">Hello</Text>
        <EvilIcons name="user" size={150} color="cyan" />
        <Text className="text-2xl mt-5 text-black">{email}</Text>
        <TouchableOpacity className="bg-red-500 w-24 px-2 py-1 rounded-full my-6 mx-auto">
          <Text
            className="font-bold text-center text-xl text-white"
            onPress={handleLogout}
          >
            Logout
          </Text>
        </TouchableOpacity>
        <Text className="font-bold">
          <Text classname="text-cyan-500 text-lg">My Lendings</Text> | My
          Borrowing
        </Text>
        <View className="bg-white">
          {data.map((item: object) => (
            <LendItems key={item._id} item={item} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
