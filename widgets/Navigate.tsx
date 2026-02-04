import Home from "@/pages/home";
import Management from "@/pages/management";

// import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const Navigate = () => {
    return (
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
    )
}

export default Navigate