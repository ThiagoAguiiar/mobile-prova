import { StyleSheet, Text, View } from "react-native"
import { useEffect, useState } from "react"

import ExpenseForm from "../components/Forms/ExpenseForm"
import useHistoric from "../context/useHistoric"
import { useNavigation } from "@react-navigation/native"

const NewExpense = () => {
  const { addHistoricItem } = useHistoric()

  const [form, setForm] = useState({
    info: '',
    value: 0,
    category: '',
    isExpense: false
  })

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setError(null)
    })
    
    return unsubscribe
  }, [navigation])

  const [error, setError] = useState(null)

  const onSubmit = () => {
    if (!form.info || !form.value || !form.category) {
      setError('Todos os campos são obrigatórios.')

      return
    }

    setError(null)

    const newExpense = {
      info: form.info,
      value: form.value,
      category: form.category,
      date: new Date().toLocaleDateString(),
      isExpense: form.isExpense
    }

    addHistoricItem(newExpense)

    setForm({
      info: '',
      value: 0,
      category: '',
      isExpense: false
    })
  }

  const onChange = (value, fieldName) => {
    setError(null)

    setForm(prev => ({
      ...prev,
      [fieldName]: value
    }))
  }

  return <View style={styles.container}>
    <ExpenseForm onSubmit={onSubmit} initialValues={form} onChange={onChange} />
    {error && <Text style={styles.error}>{error}</Text>}
  </View>
}

export default NewExpense

const styles = StyleSheet.create({
  error: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center'
  },

  container: {
    padding: 20
  }
})