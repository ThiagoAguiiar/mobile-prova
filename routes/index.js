import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Resume from "../screens/Resume"
import NewExpense from "../screens/NewExpense"
import Profile from "../screens/Profile"
import Historic from "../screens/Historic"


const Stack = createBottomTabNavigator()

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Resumo">
        <Stack.Screen name="Resumo" component={Resume} />
        <Stack.Screen name="Despesas" component={NewExpense} />
        <Stack.Screen name="Histórico" component={Historic} />
        <Stack.Screen name="Perfil" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
