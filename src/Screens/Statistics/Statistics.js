import { View, Text, SafeAreaView,Dimensions, ScrollView } from 'react-native'
import React from 'react'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import { color } from '../../constants/Color';
import { moderateScale } from 'react-native-size-matters';
const Statistics = () => {
  return (
   <SafeAreaView style={{flex:1}}>
   <ScrollView horizontal={true}>
<LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June","July","August","September","Octomber","November"],
      datasets: [
        {
          data: [
            Math.random() * 10,
            Math.random() * 10,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
          ]
        }
      ],
    
    }}
    onDataPointClick={()=>{alert("click")}}
    renderDotContent={(x,y,index)=>{
y="DATA"
    }}
    width={moderateScale(900)} // from react-native
    withInnerLines={false}
    withShadow={false}
    withOuterLines={false}
    height={300}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: color.White,
      backgroundGradientFrom: color.White,
      backgroundGradientTo: color.White,
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => "green",
      labelColor: (opacity = 1) => color.Black,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "green"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
  </ScrollView>
   </SafeAreaView>
  )
}

export default Statistics