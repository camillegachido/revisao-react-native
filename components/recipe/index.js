import { StyleSheet, Text, View, ImageBackground } from "react-native";

import { Link } from "@react-navigation/native";

export function Recipe({ recipe }) {
  return (
    <Link to={{ screen: "recipe", params: { id: recipe.id } }}>
      <View style={styles.container}>
        <ImageBackground
          source={recipe.img_url}
          resizeMode="cover"
          imageStyle={{ borderRadius: 10 }}
          style={styles.image}
        >
          <View style={styles.innerContainer} />
        </ImageBackground>

        <Text style={styles.title}>{recipe.title}</Text>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "110%",
    borderRadius: "10px",
    marginBottom: "20px",
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
    position: "absolute",
    bottom: "22px",
    left: "10px",

    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "21px",

    color: "#FFF",
  },
});
