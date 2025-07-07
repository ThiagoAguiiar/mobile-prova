import { StyleSheet, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { formatToMoney } from "../helpers"

import useProfile from '../context/useProfile'
import useHistoric from '../context/useHistoric'
import CustomButton from "../components/Fields/CustomButton"
import ResumeItem from "../components/ResumeItem"
import Title from "../components/Title"

const Resume = () => {
  const { profile } = useProfile()
  const { historic } = useHistoric()

  const navigation = useNavigation()

  const handlePress = () => {
    navigation.navigate('Perfil')
  }

  const calculateExpenses = () => {
    if (!historic || historic.length === 0) return 0

    return historic.reduce((total, item) => {
      if (item.isExpense) {
        return total + parseFloat(item.value)
      }

      return total
    }, 0)
  }

  const calculateReceipt = () => {
    if (!historic || historic.length === 0) return 0

    return historic.reduce((total, item) => {
      if (!item.isExpense) {
        return total + parseFloat(item.value)
      }

      return total
    }, 0)
  }

  if (!profile.accountBalance)
    return <View style={styles.empty}>
      <Text style={styles.text}>
        Cadastre seu saldo na conta primeiro
      </Text>

      <CustomButton
        title='Adicionar Saldo'
        onPress={handlePress}
        style={styles.button}
      />
    </View>

  return <View style={styles.content}>
    <Title title="Resumo Financeiro" />

    <View style={styles.data}>
      <ResumeItem
        label="Saldo em conta"
        value={formatToMoney(profile.accountBalance)}
      />

      <ResumeItem
        label="Total de transações"
        value={historic.length}
      />

      <ResumeItem
        label="Total de despesas"
        value={formatToMoney(calculateExpenses())}
      />

      <ResumeItem
        label="Total de ganhos"
        value={formatToMoney(calculateReceipt())}
      />

      <ResumeItem
        label="Receita"
        value={formatToMoney(profile.accountBalance - calculateExpenses() + calculateReceipt())}
      />
    </View>

    <View style={styles.charts}>
      <Title title="Gráficos" />

    </View>
  </View>
}

export default Resume

const styles = StyleSheet.create({
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Ubuntu_400Regular',
  },

  button: {
    marginTop: 20,
  },

  text: {
    fontSize: 18,
    fontFamily: 'Ubuntu_400Regular',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  content: {
    flex: 1,
    padding: 20,
    fontFamily: 'Ubuntu_400Regular',
  },

  data: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10
  },

  charts: {
    marginTop: 20,
  }
})
