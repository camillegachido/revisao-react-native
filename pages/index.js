import { useState, useEffect } from "react";

import {
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Text,
} from "react-native";

import { Recipe } from "../components/recipe";

import { api } from "../services/api";

export function Home({ navigation }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    navigation.addListener("focus", () => {
      api.get("/recipes").then((recipes) => setRecipes(recipes.data));
    });
  }, []);

  return (
    <>
      <ScrollView contentContainerStyle={styles.body}>
        <View>
          {recipes
            .filter((recipe) => recipe.title != "")
            .map((recipe, i) => (
              <Recipe recipe={recipe} key={i} />
            ))}
        </View>
      </ScrollView>
      <TouchableOpacity
        title="+"
        onPress={() => navigation.navigate("add-recipe")}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonTitle}>+</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: "2.5%",
    paddingBottom: "40px",
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: "#129575",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",

    position: "absolute",
    bottom: 35,
    right: 35,

    borderRadius: "50%",
  },
  buttonTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
  },
});
