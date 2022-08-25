import { Home } from "./pages";
import { AddRecipe } from "./pages/add-recipe";
import { Recipe } from "./pages/recipe";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
          headerTintColor: "#121212",
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: "Receitas",
          }}
        />
        <Stack.Screen
          name="add-recipe"
          component={AddRecipe}
          options={{
            title: "Adicionar receita",
          }}
        />
        <Stack.Screen
          name="recipe"
          component={Recipe}
          options={{
            title: "Veja essa receita",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
