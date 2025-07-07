import { ScrollView, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { formatToMoney } from '../helpers'
import { useState } from 'react'

import useProfile from '../context/useProfile'
import useHistoric from '../context/useHistoric'
import CustomButton from '../components/Fields/CustomButton'
import ResumeItem from '../components/ResumeItem'
import Title from '../components/Title'
import CustomPieBar from '../components/Charts/CustomPieBar'
import EmptyState from '../components/EmptyState'

const Resume = () => {
  const { profile } = useProfile()
  const { historic } = useHistoric()

  const navigation = useNavigation()

  const handlePress = path => {
    navigation.navigate(path)
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

  const chartData = {
    labels: ['Despesas', 'Receitas'],
    datasets: [
      {
        data: [calculateExpenses(), calculateReceipt()],
      },
    ],
  }

  if (!profile.accountBalance)
    return (
      <EmptyState title='Cadastre seu saldo na conta primeiro'>
        <CustomButton
          title='Adicionar Saldo'
          onPress={() => handlePress('Perfil')}
        />
      </EmptyState>
    )

  const isNegativeReceipt =
    profile.accountBalance - calculateExpenses() + calculateReceipt() < 0

  return (
    <ScrollView style={styles.content}>
      <Title title='Resumo Financeiro' />

      <View style={styles.data}>
        <ResumeItem
          label='Saldo em conta'
          value={formatToMoney(profile.accountBalance)}
          style={{ color: '#007AFF' }}
        />

        <ResumeItem
          label='Total de transações'
          value={historic.length}
          style={{ color: 'black' }}
        />

        <ResumeItem
          label='Total de despesas'
          value={formatToMoney(calculateExpenses())}
        />

        <ResumeItem
          label='Total de ganhos'
          value={formatToMoney(calculateReceipt())}
          style={{ color: 'green' }}
        />

        <ResumeItem
          label='Receita'
          value={formatToMoney(
            profile.accountBalance - calculateExpenses() + calculateReceipt()
          )}
          style={{ color: isNegativeReceipt ? 'red' : 'green' }}
        />
      </View>

      {historic.length > 0 ? (
        <View style={styles.charts}>
          <Title title='Gráfico' />

          <View style={styles.item}>
            <CustomPieBar height={250} data={chartData} />
          </View>
        </View>
      ) : (
        <EmptyState title='Adicione suas despesas ou ganhos para visualizar o gráfico'>
          <CustomButton
            title='Adicionar gasto/ganho'
            onPress={() => handlePress('Despesas')}
          />
        </EmptyState>
      )}
    </ScrollView>
  )
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
    borderRadius: 10,
  },

  charts: {
    marginTop: 20,
  },
})
