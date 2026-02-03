import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import Navigate from "@/navigate";
import { View } from "react-native";


import { NavigationContainer } from '@react-navigation/native';

export default function Index() {

  return (
      <View style={{flex: 1}}>
        <Header />
        <Navigate />
      </View>
  )
}
    // <View style={{flex: 1}}>
    //   <Header />
    //     <ScrollView style={{flex: 1}}>
    //       <Tale />
    //       <Tale />
    //       <Tale />
    //       <Tale />
    //       <Tale />
    //       <Tale />
    //       <Tale />
    //       <Tale />
    //       <Tale />
    //       <Tale />
    //       <Tale />
    //       <Tale />
    //       <Tale />
    //       <Tale />
    //     </ScrollView>
    //   <Footer />
    // </View>