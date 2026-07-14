import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileCard({ info }) {
  const styling = StyleSheet.create({
    container: {
      paddingHorizontal: 15,
      paddingTop: 14,
      backgroundColor: "white",
      //   height: "100%",
    },
    row: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 15,
    },
    img: {
      width: 110,
      height: 110,
      borderRadius: 70,
    },
    activityRow: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      justifyContent: "space-between",
      width: "80%",
      marginTop: 10,
    },
    nameDisplay: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    numbers: {
      fontWeight: 600,
    },
    link: {
      color: "blue",
      marginTop: 2,
    },
    editBtn: {
      width: "50%",
      textAlign: "center",
      padding: 10,
      shadowColor: "#000",
      backgroundColor: "white",
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 3,
      shadowRadius: 10,
      elevation: 3,
      borderRadius: 50,
      marginTop: 5,
    },
    button: {
      marginTop: 20,
      width: "100%",
      alignSelf: "center",
      padding: 8,
      paddingVertical: 14,
      backgroundColor: "blue",
      borderRadius: 23,
    },
  });
  return (
    <View style={styling.container}>
      <View style={styling.row}>
        <Image source={info.image} style={styling.img} />
        <View>
          <View style={styling.nameDisplay}>
            <Text style={{ fontSize: 16, fontWeight: 600 }}>{info.name}</Text>
            <Text style={{ color: "gray" }}>{info.pronouns}</Text>
          </View>
          <View style={styling.activityRow}>
            <View>
              <Text style={styling.numbers}>{info.posts}</Text>
              <Text>posts</Text>
            </View>
            <View>
              <Text style={styling.numbers}>{info.followers}</Text>
              <Text>followers</Text>
            </View>
            <View>
              <Text style={styling.numbers}>{info.following}</Text>
              <Text>following</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={{ marginTop: 5 }}>{info.bio}</Text>
      <Link href={info.link} style={styling.link}>
        {info.link}
      </Link>
      <View style={{ display: "flex", flexDirection: "row", gap: 10, marginTop: 10 }}>
        <Link href="/edit-profile" style={styling.editBtn}>
          Edit profile
        </Link>
        <Link href="/friends" style={styling.editBtn}>
          Friends
        </Link>
      </View>
      <TouchableOpacity style={styling.button}>
        <Text style={{ textAlign: "center", color: "white" }}>
          Create a post
        </Text>
      </TouchableOpacity>
    </View>
  );
}
