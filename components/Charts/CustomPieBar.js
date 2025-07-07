import { PieChart } from 'react-native-chart-kit'
import { Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width

const CustomPieBar = ({ data, width, height }) => {
  const pieData = data.datasets[0].data.map((value, index) => ({
    name: data.labels[index],
    population: value,
    color: index === 0 ? '#cb3f51' : '#4caf50',
    legendFontColor: '#333',
    legendFontSize: 15,
  }))

  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(203, 63, 81, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  }

  return (
    <PieChart
      data={pieData}
      width={width || screenWidth - 40}
      height={height || 220}
      chartConfig={chartConfig}
      accessor='population'
      backgroundColor='transparent'
      paddingLeft='15'
      center={[10, 10]}
      absolute={false}
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  )
}

export default CustomPieBar
