import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import { isValidEmail } from '../helpers'

import ProfileForm from '../components/Forms/ProfileForm'
import useProfile from '../context/useProfile'

const Profile = () => {
  const navigation = useNavigation()
  const { setProfile } = useProfile()
  const [error, setError] = useState(null)

  const [form, setForm] = useState({
    name: '',
    email: '',
    image: '',
    accountBalance: 0,
  })

  const onChange = (value, fieldName) => {
    setForm(prev => ({
      ...prev,
      [fieldName]: value,
    }))

    setError(null)
  }

  const onSubmit = () => {
    if (!form.email || !form.name) {
      setError('Os campos são obrigatórios')
      return
    }

    if (!isValidEmail(form.email)) {
      setError('Email inválido')
      return
    }

    setProfile(form)
    navigation.navigate('Resumo')
  }

  return (
    <View style={styles.container}>
      <ProfileForm
        initialValues={form}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  error: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
})
