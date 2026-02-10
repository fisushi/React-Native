// react imports
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
// import pages
import { Home } from "@/pages/home/home";
import { Management } from "@/pages/manegement/management";
// import widgetes
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

const Stack = createStackNavigator()

const Index = () => {
  return (
      <View style={{ flex: 1 }}>
        <Header />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="HomeScreen"
            component={Home}
          />
          <Stack.Screen
            name="ManagementScreen"
            component={Management}
          />
        </Stack.Navigator>
        {/* <Footer /> */}
      </View>
  )
}

export default Index