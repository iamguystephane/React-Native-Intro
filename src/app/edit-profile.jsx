import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function EditProfile() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      padding: 20,
    },
    heading: {
      fontSize: 33,
      fontWeight: "bold",
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 10,
      paddingHorizontal: 10,
      marginBottom: 20,
      marginTop: 2,
      elevation: 1.5,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      backgroundColor: "#fff",
      height: 47,
    },
    button: {
      marginTop: 10,
      width: "100%",
      alignSelf: "center",
      padding: 8,
      paddingVertical: 14,
      backgroundColor: "blue",
      borderRadius: 23,
    },
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [bio, setBio] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    setSubmitted(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Update Profile</Text>
      <View>
        <Text>Name</Text>
        <TextInput
          placeholder="Enter your name"
          style={styles.input}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View>
        <Text>Email</Text>
        <TextInput
          placeholder="Enter your email"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View>
        <Text>Website</Text>
        <TextInput
          placeholder="Enter your website"
          style={styles.input}
          onChangeText={(text) => setWebsite(text)}
        />
      </View>
      <View>
        <Text>Bio</Text>
        <TextInput
          placeholder="Enter your bio"
          style={styles.input}
          onChangeText={(text) => setBio(text)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text
          style={{ color: "white", alignSelf: "center", fontWeight: "bold" }}
        >
          {" "}
          Update Profile{" "}
        </Text>
      </TouchableOpacity>

      {submitted && name && email && website && bio ? (
        <View>
          <Text>Your name is: {name}</Text>
          <Text>Your email is: {email}</Text>
          <Text>Your website is: {website}</Text>
          <Text>Your bio is: {bio}</Text>
        </View>
      ) : (
        <Text> User information will be displayed here. </Text>
      )}
    </View>
  );
}
