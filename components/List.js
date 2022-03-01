// REACT
import { useEffect, useState } from "react";
// REACT-NATIVE
import { FlatList, Text, ScrollView, StyleSheet, View } from "react-native";
import { Card } from "react-native-elements";

export default function List() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((res) => {
        setCountries(res);
        console.log(setCountries);
      })
      .catch((err) => console.log(err));
  }, []);

  const renderCountry = ({ item }) => {
    return (
      <View style={styles.container}>
        <Card containerStyle={{ width: "60%" }}>
          <Card.Title>{item.name.common}</Card.Title>
          <Card.Divider />
          <Card.Image style={styles.img} source={{ uri: item.flags.png }} />
          <Text style={styles.text}>{item.capital}</Text>
        </Card>
      </View>
    );
  };
  return (
    <ScrollView>
      <FlatList
        data={countries}
        renderItem={renderCountry}
        keyExtractor={(data, index) => index.toString()}
      />
    </ScrollView>
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