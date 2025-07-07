import { StyleSheet, Text } from "react-native"


const ResumeItem = ({ value, label }) => {
  return <Text style={styles.item}>
    {label}: {" "}
    <Text style={styles.account}>
      {value}
    </Text>
  </Text>
}

export default ResumeItem

const styles = StyleSheet.create({
  item: {
    fontSize: 16,
    fontFamily: 'Ubuntu_400Regular',
    marginVertical: 5
  },

  account: {
    fontWeight: 'bold',
    color: '#cb3f51',
  }
})
