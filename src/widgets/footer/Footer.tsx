import { COLORS } from "@/shared/constant"
import { Button, StyleSheet, View } from "react-native"

import { useNavigation, useRoute } from "@react-navigation/native"

export const Footer = () => {
    const navigation: any = useNavigation()
    const route: any = useRoute()

    const loadHome = () => {
        route.name !== "HomeScreen" ? navigation.goBack() : null
    }
    
    const loadManagement = () => {
        navigation.navigate("ManagementScreen")
    }

    // const loadTale = () => {
    //     navigation.navigate("TaleScreen")
    // }

    return (
        <View style={style.container}>
            <View style={style.box}>
                <Button
                 color={COLORS.BUTTON_BACKGROUND}
                 title="E"
                 onPress={loadHome}
                 />
            </View>
            <View style={style.box}>
                <Button
                 color={COLORS.BUTTON_BACKGROUND}
                 title="B"
                 onPress={loadManagement}
                 />
            </View>
            <View style={style.box}>
                <Button
                 color={COLORS.BUTTON_BACKGROUND}
                 title="*"
                 onPress={() => {}}
                 />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: COLORS.FOOTER_BACKGROUND,
        minHeight: 80,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    box: {
        width: "30%",
        justifyContent: "center",
        alignItems: "center",
    }
})