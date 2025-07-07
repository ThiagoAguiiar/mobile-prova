import { ScrollView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import useHistoric from '../context/useHistoric'
import HistoricCard from '../components/HistoricCard'
import EmptyState from '../components/EmptyState'
import CustomButton from '../components/Fields/CustomButton'

const Historic = () => {
  const { historic } = useHistoric()
  const navigation = useNavigation()

  const handlePress = () => {
    navigation.navigate('Despesas')
  }

  if (historic.length === 0)
    return (
      <EmptyState title='Nenhum dado cadastrado'>
        <CustomButton title='Adicionar gasto/ganho' onPress={handlePress} />
      </EmptyState>
    )

  return (
    <View style={{ marginVertical: 20 }}>
      <ScrollView>
        {historic.map((item, index) => (
          <HistoricCard item={item} key={index} />
        ))}
      </ScrollView>
    </View>
  )
}

export default Historic
