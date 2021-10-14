import React from 'react';
import {
  View
} from 'react-native';

import Button from "./components/Button"
import Display from "./components/Display"
import WriteMethod from "./components/methods/write.js"
import AppCss from "./components/css/app.css"
const styles = AppCss;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      result: ""
    }
    this.write = this.write.bind(this);
  }

  write = WriteMethod

  getText = () => {
    return this.state.text
  }

  getResult = () => {
    return this.state.result
  }

  render() {
    var buttonsText = [
      "1", "2", "3",
      "4", "5", "6",
      "7", "8", "9",
      ".", "0", "="
    ]
    var fbuttonsText = [
      "CE", "C", "/", "*", "-", "+"
    ]
    var buttons = []
    var functionButtons = []
    buttonsText.map((x, y) => { buttons.push(<Button key={y} value={x} press={() => { this.write(x) }} />) })
    fbuttonsText.map((x, y) => { functionButtons.push(<Button key={y} value={x} press={() => { this.write(x) }} fkey="true" />) })
    
    return (
      <View style={styles.container}>

        <Display result={this.getResult} text={this.getText} />

        <View style={styles.keyboard}>

          <View style={styles.keys}>
            {buttons}
          </View>

          <View style={styles.functionKeys}>
            {functionButtons}
          </View>

        </View>

      </View>
    );
  }
}