import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import person2 from "../../assets/images/person-2.jpg";
import ProfileCard from "../components/profile-card";

export default function Home() {
  const profileInformation1 = {
    image: person2,
    name: "Simone Peter",
    pronouns: "he/him",
    posts: "312",
    followers: "1.5M",
    following: "120",
    link: "https://youtube.com/@iamguystephane",
    bio: `Halo 😇,
I'm gonna make the world a better place! I just need its source code.
    `,
  };

  const router = useRouter();

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 15,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },
    textCounter: {
      fontSize: 20,
      marginBottom: 10,
      fontWeight: 600,
    },
    button: {
      width: "fit-content",
      alignSelf: "center",
      padding: 15,
      paddingVertical: 14,
      backgroundColor: "#000",
      borderRadius: 23,
    },
  });

  function routeToExplore() {
    router.push("/explore");
  }

  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <>
      <ScrollView>
        <ProfileCard info={profileInformation1} />
        <View style={styles.container}>
          <Text style={styles.textCounter}>Current count: {count}</Text>
          <TouchableOpacity style={styles.button} onPress={handleIncrement}>
            <Text style={{ color: "#fff" }}>Increment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleDecrement}
            style={[styles.button, { marginTop: 10, backgroundColor: "gray" }]}
          >
            <Text style={{ color: "#fff" }}>Decrement</Text>
          </TouchableOpacity>
          <Link href="/(tabs)/home">
            <Text>hgkghjk </Text>
          </Link>
        </View>
      </ScrollView>
    </>
  );
}
