import { StyleSheet, TextInput } from "react-native"

const CustomInput = ({ value, onChangeText, placeholder, keyboardType, style }) => {
  return <TextInput
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    keyboardType={keyboardType}
    style={[styles.input, style]}
  />
}

const styles = StyleSheet.create({
  input: {
    fontFamily: 'Ubuntu_400Regular',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#cb3f51',
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderRadius: 8,
    backgroundColor: '#fff'
  }
})

export default CustomInput
