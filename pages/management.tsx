import Controls from "@/features/managementPage/ui/Controls";
import Gallary from "@/features/managementPage/ui/Gallery";
import Footer from "@/widgets/Footer";
import { Text, View } from "react-native";

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
