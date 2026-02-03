import { StyleSheet, View, Text } from "react-native";

const Gallary = () => {
    return (
        <View style={style.container}>
            <Text style={style.text}>{'<'}</Text>
            <View style={style.image}></View>
            <Text style={style.text}>{'>'}</Text>
        </View>
        
    )
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    paddingLeft: 28,
    paddingRight: 28,
  },

  image: {
    width: "70%",
    height: 285,
    backgroundColor: '#D9D9D9',
    margin: 'auto',
  },

  text: {
    fontSize: 36,
  }
})

export default Gallary