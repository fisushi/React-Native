// react imports
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
// import pages
import { Home } from "@/pages/home/ui/home";
import { Management } from "@/pages/manegement/management";
import { ScreenOfTale } from "@/pages/screen-of-tale/ui";
// import widgetes


type RootStackParamList = {
  HomeScreen: undefined,
  ManagementScreen: undefined,
  TaleScreen: { imageUrl: string; name: string; author: string },
};



const Index = () => {
  const Stack = createStackNavigator<RootStackParamList>()
  
  return (
      <View style={{ flex: 1 }}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="HomeScreen"
            component={Home}
          />
          <Stack.Screen
            name="ManagementScreen"
            component={Management}
          />
          <Stack.Screen
            name="TaleScreen"
            component={ScreenOfTale}
          />
        </Stack.Navigator>
      </View>
  )
}

export default Index