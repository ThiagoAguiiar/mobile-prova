import { StyleSheet, Text, View } from 'react-native'
import { formatToMoney } from '../helpers'

const HistoricCard = ({ item }) => {
  return (
    <View
      style={[
        styles.card,
        item.isExpense ? styles.cardExpense : styles.cardIncome,
      ]}
    >
      <Text style={styles.title}>{item.info}</Text>

      <Text style={styles.itemList}>Categoria: {item.category}</Text>

      <Text style={styles.itemList}>Valor: {formatToMoney(item.value)}</Text>

      <Text style={styles.itemList}>Data: {item.date}</Text>
    </View>
  )
}

export default HistoricCard

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    marginHorizontal: 20,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  itemList: {
    fontSize: 14,
    marginBottom: 1,
  },

  cardIncome: {
    backgroundColor: '#c6e5b1',
    borderColor: '#96cca8',
    borderWidth: 2,
  },

  cardExpense: {
    backgroundColor: '#ffbfb0',
    borderColor: '#ff6961',
    borderWidth: 2,
  },
})
