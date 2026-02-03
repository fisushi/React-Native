import { text } from "@/styles/Text.styles";
import { StyleSheet, View, Button, Text } from "react-native";

const Controls = () => {
    return (
        <View style={style.container}>
            <Button title="                  " 
                    color={"#D9D9D9"}
                    onPress={()=> {}} />
            <Button title="                  " 
                    color={"#D9D9D9"}
                    onPress={()=> {}} />
            <Button title="                  " 
                    color={"#D9D9D9"}
                    onPress={()=> {}} />
        </View>
    )
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 220,
    gap: 50,
  }
})

export default Controls