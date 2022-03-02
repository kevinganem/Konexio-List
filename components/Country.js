// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------      COUNTRY.JS     ---------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT
import { useState } from "react";
// REACT-NATIVE
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { Card } from "react-native-elements";

export default function Country(props) {
  const [weather, setWeather] = useState([]);
  const [toggle, setToggle] = useState(false);

  const handlePress = () => {
    setToggle((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Card containerStyle={{ width: "60%" }}>
        <Card.Title>{props.country.name.common}</Card.Title>
        <Card.Divider />
        <TouchableOpacity onPress={handlePress}>
          <Card.Image source={{ uri: props.country.flags.png }} />
        </TouchableOpacity>
        {toggle && (
          <Text style={styles.text}>
            {props.country.capital ? props.country.capital[0] : "No capital"}
          </Text>
        )}
      </Card>
    </View>
  );
}

// CSS PART

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 15,
    marginTop: 10,
  },
});
