// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------      LIST.JS     ------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// REACT
import { useEffect, useState } from "react";
// REACT-NATIVE
import { FlatList, StyleSheet, ActivityIndicator } from "react-native";
// COMPONENTS
import Country from "./Country";

export default function List() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((res) => {
        setCountries(res);
        setLoading(false);
        console.log(setCountries);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {countries.length === 0 && loading && <ActivityIndicator size="large" />}
      <FlatList
        data={countries}
        renderItem={(data) => <Country country={data.item} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </>
  );
}
