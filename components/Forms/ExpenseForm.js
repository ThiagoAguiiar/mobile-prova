import { View, StyleSheet } from 'react-native'

import CustomButton from '../Fields/CustomButton'
import CustomInput from '../Fields/CustomInput'
import CustomRadioButton from '../Fields/CustomRadioButton'

const ExpenseForm = ({ onSubmit, initialValues, onChange }) => {
  return (
    <View>
      <CustomInput
        placeholder='Descrição'
        value={initialValues.info}
        onChangeText={text => onChange(text, 'info')}
        style={styles.input}
      />

      <CustomInput
        placeholder='Valor (R$)'
        keyboardType='numeric'
        value={initialValues.value}
        onChangeText={text => onChange(text, 'value')}
        style={styles.input}
      />

      <CustomInput
        placeholder='Categoria'
        value={initialValues.category}
        onChangeText={text => onChange(text, 'category')}
        style={styles.input}
      />

      <CustomRadioButton
        label='Ganho'
        selected={!initialValues.isExpense}
        onPress={() => onChange(false, 'isExpense')}
      />

      <CustomRadioButton
        label='Despesa'
        selected={initialValues.isExpense}
        onPress={() => onChange(true, 'isExpense')}
      />

      <CustomButton
        title='Adicionar'
        onPress={onSubmit}
        style={styles.button}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    fontFamily: 'Ubuntu_400Regular',
    fontSize: 16,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 8,
  },

  button: {
    marginTop: 20,
  },
})

export default ExpenseForm
