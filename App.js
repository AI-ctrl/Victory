import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];



const data1 = [
  { quarter: 1.5, earnings: 15000 },
  { quarter: 2.5, earnings: 15500 },
  { quarter: 3.5, earnings: 15250 },
  { quarter: 4.5, earnings: 15000 }
];

const data2 = [
  { quarter: 1.5, earnings: 1500 },
  { quarter: 2.5, earnings: 1550 },
  { quarter: 3.5, earnings: 1525 },
  { quarter: 4.5, earnings: 1500 }
];


const data3 = [
  { quarter: 1.5, earnings: 10000 },
  { quarter: 2.5, earnings: 10500 },
  { quarter: 3.5, earnings: 10250 },
  { quarter: 4.5, earnings: 10000 }
];



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          {/* <VictoryBar data={data} x="quarter" y="earnings" /> */}
          <VictoryBar 
          barRatio={1}
          alignment="start"
          style = {{data:{fill:"#00aaff"}}}
          data={data1} x="quarter" y="earnings" 
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}
          />
          <VictoryBar 
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}
          barRatio={1.2}
          alignment="start"
          style = {{data:{fill:"#ff4fff"}}}
          data={data3} x="quarter" y="earnings" 
          />
          <VictoryBar 
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}

          barRatio={1.5}
          alignment="start"
          style = {{data:{fill:"#ff003f"}}}
          data={data2} x="quarter" y="earnings" 
          />


        </VictoryChart>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});