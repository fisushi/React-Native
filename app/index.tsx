import Header from "@/widgets/Header";
import Navigate from "@/widgets/Navigate";
import { View } from "react-native";

export default function Index() {

  return (
      <View style={{flex: 1}}>
        <Header />
        <Navigate />
      </View>
  )
}