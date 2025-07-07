import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import Resume from '../screens/Resume'
import NewExpense from '../screens/NewExpense'
import Profile from '../screens/Profile'
import Historic from '../screens/Historic'

const Tab = createBottomTabNavigator()

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Resumo'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === 'Resumo') {
              iconName = focused ? 'home' : 'home-outline'
            } else if (route.name === 'Despesas') {
              iconName = focused ? 'add-circle' : 'add-circle-outline'
            } else if (route.name === 'Histórico') {
              iconName = focused ? 'list' : 'list-outline'
            } else if (route.name === 'Perfil') {
              iconName = focused ? 'person' : 'person-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: '#cb3f51',
          tabBarInactiveTintColor: 'gray',
          headerShown: true,
        })}
      >
        <Tab.Screen name='Resumo' component={Resume} />
        <Tab.Screen name='Despesas' component={NewExpense} />
        <Tab.Screen name='Histórico' component={Historic} />
        <Tab.Screen name='Perfil' component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Router
