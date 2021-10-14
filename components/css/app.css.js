import {
  StyleSheet,
} from 'react-native';

var AppCss = StyleSheet.create(

  {
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#FFFFFF',
    },
    keyboard: {
      flex: 2,
      flexDirection: "row",
    },
    keys: {
      width: "75%",
      flex: 3,
      flexDirection: "row",
      flexWrap: "wrap",
      backgroundColor: "gray"
    },
    functionKeys: {
      flex: 1,
      flexDirection: "column",
      width: "25%",
      backgroundColor: "#919191"
    }
  }

)

export default AppCss