import { Image, StyleSheet, View } from 'react-native'
import { useState } from 'react'

import CustomButton from './CustomButton'
import * as ImagePicker from 'expo-image-picker'

const CustomImageUpload = ({ onPress }) => {
  const [image, setImage] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  )

  const handlePress = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
      onPress(result.assets[0].uri)
    }
  }

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>

      <CustomButton title='Selecionar Imagem' onPress={handlePress} />
    </View>
  )
}

export default CustomImageUpload

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },

  imageContainer: {
    marginHorizontal: 'auto',
    marginVertical: 20,
  },
})
