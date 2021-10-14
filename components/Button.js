import React, { Component } from 'react';
import {Text, TouchableOpacity} from 'react-native';
import ButtonCss from "./css/button.css";

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            fkey: this.props.fkey
        }
    }

    getStyles = (x) => {
        if (this.state.fkey) {
            if (x=="text") {
                return styles.ftext
            } else {
                return styles.fcontainer
            }
        } else {
            if (x=="text") {
                return styles.text
            } else {
                return styles.container
            }
        }
    }

    render() {
        return(
            <TouchableOpacity style={this.getStyles()} onPress={this.props.press}>
                <Text style={this.getStyles("text")}>
                    {this.state.value}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = ButtonCss

export default Button;