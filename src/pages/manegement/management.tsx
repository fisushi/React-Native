import { Controls } from "@/features/managementPage/ui/controls/";
import { Gallary } from "@/features/managementPage/ui/gallery/";
import { Footer } from "@/widgets/footer";
import { Text, View } from "react-native";


// import { loadManagement } from '@/widgets/footer/Footer'

import { useNavigation } from "@react-navigation/native";



export const Management = () => {
  const navigation: any = useNavigation();
  // if (!loadManagement) navigation.navigate("ManagementScreen")
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
