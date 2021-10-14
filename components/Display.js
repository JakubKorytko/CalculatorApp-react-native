import React, { Component } from 'react';
import { View, Text} from 'react-native';
import DisplayCss from "./css/display.css"
const styles = DisplayCss;

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      result: this.props.result,
    };
  }

  getStyles = () => {
    return {
      text: {
        fontSize: Math.max(48-(this.state.text().length*0.3), 20),
        alignItems: "flex-end"
      },
      result: {
        fontSize: Math.max(48-(this.state.text().length*0.4), 30),
        color: "gray"
      }
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={this.getStyles().text}>{this.state.text()}</Text>
        <Text style={this.getStyles().result}>{this.state.result()}</Text>
      </View>
    );
  }
}

export default Display