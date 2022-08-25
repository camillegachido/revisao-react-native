import { useState } from "react";

import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import { api } from "../services/api";

export function AddRecipe({ navigation }) {
  const [recipe, setRecipe] = useState({
    title: "",
    description: "",
    img_url: "",
  });

  const onConfirm = () => {
    if (recipe.title != "")
      api.post("/recipes", recipe).then(() => navigation.goBack());
  };

  return (
    <View style={styles.body}>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={recipe.title}
        onChangeText={(text) => setRecipe({ ...recipe, title: text })}
      />
      <Text style={styles.label}>Link da imagem</Text>
      <TextInput
        style={styles.input}
        value={recipe.img_url}
        onChangeText={(text) => setRecipe({ ...recipe, img_url: text })}
      />
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.textarea}
        multiline={true}
        numberOfLines={4}
        onChangeText={(text) => setRecipe({ ...recipe, description: text })}
      />
      <TouchableOpacity
        title="+"
        onPress={() => onConfirm()}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonTitle}>Confirmar</Text>
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
  textarea: {
    borderColor: "#121212",
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
  },
  input: {
    borderBottomColor: "#121212",
    borderWidth: 0,
    borderBottomWidth: 1,
    padding: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#121212",
    marginTop: 18,
    marginBottom: 4,
  },
  buttonContainer: {
    backgroundColor: "#129575",
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
