import Footer from "@/layouts/Footer";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import Gallary from "@/componets/Gallery";
import Controls from "@/componets/Controls"

export default function Management() {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1,}}>
          <Gallary></Gallary>
          <Text style={{
            textAlign: 'center',
            margin: 50,
            fontSize: 18,
            }}>
              Сказка доступна к проигрыванию
          </Text>
          <Controls></Controls>
      </View>
      <Footer />
    </View>
  );
}
