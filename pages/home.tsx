import Tale from "@/features/homePage/ui/Tale";
import { ScrollView, View } from "react-native";

import Footer from "@/widgets/Footer";


export default function Home() {
  return (
    <View style={{ flex: 1, }}>
      <ScrollView style={{ marginTop: 15, marginBottom: 15,}}>
        <Tale />
        <Tale />
        <Tale />
        <Tale />
        <Tale />
      </ScrollView>
      <Footer />
    </View>
  );
}
