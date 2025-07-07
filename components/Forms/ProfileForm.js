import { StyleSheet, View } from 'react-native'

import CustomInput from '../Fields/CustomInput'
import CustomImageUpload from '../Fields/CustomImageUpload'
import CustomButton from '../Fields/CustomButton'

const ProfileForm = ({ onSubmit, initialValues, onChange }) => {
  return (
    <View>
      <CustomInput
        placeholder='Nome'
        value={initialValues.name}
        onChangeText={text => onChange(text, 'name')}
      />

      <CustomInput
        placeholder='Email'
        value={initialValues.email}
        onChangeText={text => onChange(text, 'email')}
      />

      <CustomInput
        placeholder='Saldo da conta (R$)'
        value={initialValues.accountBalance}
        onChangeText={text => onChange(text, 'accountBalance')}
        keyboardType='numeric'
      />

      <CustomImageUpload
        image={initialValues.image}
        onPress={image => onChange(image, 'image')}
      />

      <CustomButton
        title='Salvar alterações'
        onPress={onSubmit}
        style={styles.button}
      />
    </View>
  )
}

export default ProfileForm

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    backgroundColor: '#96CCA8',
  },
})
