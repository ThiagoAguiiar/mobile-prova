import { Text } from 'react-native'

const Title = ({ title, style }) => {
  return (
    <Text
      style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, ...style }}
    >
      {title}
    </Text>
  )
}

export default Title
