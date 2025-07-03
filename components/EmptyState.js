import { StyleSheet, Text, View } from "react-native"

const EmptyState = ({ title, children }) => {
  return <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>

    <View style={styles.children}>
       {children}
    </View>
  </View>
}

export default EmptyState

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Ubuntu_400Regular'
  },

  children: {
    marginTop: 20
  }
})
