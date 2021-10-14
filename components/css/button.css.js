import {
    StyleSheet,
    Dimensions
} from 'react-native';

var ButtonCss = StyleSheet.create(

    {
        container: {
            backgroundColor: "gray",
            width: ((1 / 3) * 100) + "%",
            height: "25%",
            justifyContent: "center",
            alignItems: "center",
        },
        fcontainer: {
            backgroundColor: "#919191",
            width: "100%",
            height: (100 * (1 / 6)) + "%",
            justifyContent: "center",
            alignItems: "center",
        },
        text: {
            color: "white",
            fontSize: 0.15 * Dimensions.get("window").width
        },
        ftext: {
            color: "white",
            fontSize: 0.1 * Dimensions.get("window").width
        }
    }

)

export default ButtonCss