import { Pressable, StyleSheet, Text } from 'react-native'

const CustomButton = ({ title, onPress, style }) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#cb3f51',
    paddingVertical: 12,
    paddingHorizontal: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 50,
  },

  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
})
