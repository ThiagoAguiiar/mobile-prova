import Router from './routes'

import { Text } from 'react-native'
import { HistoricProvider } from './context/useHistoric'
import { useFonts, Ubuntu_400Regular } from '@expo-google-fonts/ubuntu'
import { ProfileProvider } from './context/useProfile'

const App = () => {
  const [fontsLoaded] = useFonts({ Ubuntu_400Regular })

  if (!fontsLoaded) return <Text>Carregando...</Text>

  return <ProfileProvider>
    <HistoricProvider>
    <Router />
  </HistoricProvider>
  </ProfileProvider>
}

export default App
