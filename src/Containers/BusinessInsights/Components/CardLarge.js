import { View, Text } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-chart-kit'
const CardLarge = props => {
  const chartConfig = {
    //backgroundGradientFrom: props.bg,
    backgroundGradientFromOpacity: 0,
    //  backgroundGradientTo: props.color,
    backgroundGradientToOpacity: 0,
    color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 2,
    useShadowColorFromDataset: false, // optional
    decimalPlaces: 1,
    propsForDots: {
      r: '2',
      //strokeWidth: "6",
    },
  }

  const data = {
    // labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [60, 34, 40, 40, 49, 55, 80],
        color: props.graphColor,
        strokeWidth: 2, 
      },
    ],
    
  }

  return (
    <View
      style={{
        flex: 2,
        borderRadius: 15,
        marginVertical: '5%',
        backgroundColor: props.bg,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: '5%',
      }}
    >
      <View
        style={{
          justifyContent: 'space-around',
          marginVertical: '8%',
          marginLeft: '6%',
                  }}
      >
        <Text style={{ color: props.color }}>Today</Text>
        <Text style={{ color: props.color, fontSize: 40 ,fontWeight:'bold'}}>{props.value}</Text>
        <Text style={{ color: props.color }}>{props.orders}</Text>
      </View>
      <View
        style={{
                   alignItems: 'center',
        //  backgroundColor: 'silver',
          marginVertical: '5%',
        }}
      >
        <LineChart
          data={data}
          width={200}
          height={100}
          chartConfig={chartConfig}
          withShadow={true}
          bezier
          fromZero
          withHorizontalLabels={false}
          withInnerLines={false}
          withOuterLines={false}
          xAxisInterval={3}
          yAxisInterval={3}
        />
      </View>
    </View>
  )
}

export default CardLarge
