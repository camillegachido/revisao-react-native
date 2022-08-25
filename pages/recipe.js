import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { api } from "../services/api";

export function Recipe({ navigation }) {
  const {
    params: { id },
  } = useRoute();

  const [recipe, setRecipe] = useState({
    title: "",
    img_url: "",
    description: "",
  });

  useEffect(() => {
    api.get("/recipes/" + id).then((recipe) => {
      setRecipe(recipe.data);
    });
  }, [id]);

  const onDelete = () => {
    api.delete("/recipes/" + id).then(() => navigation.goBack());
  };

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <ImageBackground
          source={
            "https://www.receitasdecomidas.com.br/wp-content/uploads/2016/05/macarrao-molho-de-camarao.jpg"
          }
          resizeMode="cover"
          imageStyle={{ borderRadius: 10 }}
          style={styles.image}
        >
          <View style={styles.innerContainer} />
        </ImageBackground>
      </View>

      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.description}>{recipe.description}</Text>
      <TouchableOpacity
        title="+"
        onPress={() => onDelete()}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonTitle}>deletar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: "2.5%",
    paddingBottom: "40px",
    flex: 1,
  },
  container: {
    width: "100%",
    height: "40%",
    borderRadius: "10px",
  },

  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: "10px",
  },

  title: {
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "21px",

    color: "black",

    marginBottom: 20,
  },
  description: {
    fontSize: "12px",
    lineHeight: "21px",

    color: "black",

    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: "red",
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 10,

    marginTop: 12,
  },
  buttonTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
  },
});
