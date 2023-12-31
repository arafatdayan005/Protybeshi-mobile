import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import ItemCards from "../Components/ItemCards";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://192.168.0.106:3000/items");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
        <Text className="text-cyan-500 text-2xl mt-12 text-center">
          Protybeshi
        </Text>
        <TextInput
          className="border border-gray-300 h-12 w-80 rounded-full pl-4 mb-4 bg-white mt-2"
          placeholder="Search Item"
        />
        <View className="mt-4 ml-10">
          <View className="flex justify-left flex-row flex-wrap">
            {data.map((item: object) => (
              <ItemCards key={item._id} item={item} />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
