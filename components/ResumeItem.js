import { StyleSheet, Text } from 'react-native'

const ResumeItem = ({ value, label, style }) => {
  return (
    <Text style={styles.item}>
      {label}: <Text style={[styles.account, style]}>{value}</Text>
    </Text>
  )
}

export default ResumeItem

const styles = StyleSheet.create({
  item: {
    fontSize: 16,
    fontFamily: 'Ubuntu_400Regular',
    marginVertical: 5,
  },

  account: {
    fontWeight: 'bold',
    color: '#cb3f51',
  },
})
