import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import FriendCard from "../components/friend-card";

export default function Friends() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });

  const [fetchedData, setFetchedData] = useState([]);

  async function fetchUsers() {
    const res = await fetch(
      "https://dummyjson.com/users?limit=10&skip=10&select=firstName,username,lastName,image",
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    console.log("Response from API: ", res);
    const data = await res.json();
    console.log("fetched information: ", data);
    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }
    setFetchedData(data.users);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#fff" }}
    >
      <View style={styles.container}>
        {fetchedData.map((data, index) => (
          <FriendCard key={index} userInfo={data} />
        ))}
      </View>
    </ScrollView>
  );
}
