import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import person from "../../assets/images/person-1.jpg";

export default function FriendCard({ userInfo }) {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      marginTop: 15,
    },
    image: {
      width: 90,
      height: 90,
      borderRadius: 45,
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      gap: 5,
      marginTop: 5,
    },
    button: {
      width: "42%",
      borderRadius: 50,
      backgroundColor: "blue",
      padding: 10,
    },
    removeBtn: {
      elevation: 3,
      backgroundColor: "white",
      shadowColor: "#000",
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
    },
  });
  return (
    <View style={styles.container}>
      <Image source={{ uri: userInfo.image }} style={styles.image} />
      <View>
        <Text style={{ fontSize: 18, fontWeight: 600 }}>{userInfo.firstName} {userInfo.lastName}</Text>
        <Text style={{ color: "gray" }}>@{userInfo.username}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={{ alignSelf: "center", color: "white" }}>follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.removeBtn]}>
            <Text style={{ alignSelf: "center", color: "black" }}>remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}