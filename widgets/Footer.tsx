import { COLORS } from "@/shared/lib/constant/colors";
import React from 'react';
import { Button, StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

const Footer = () => {
    const navigation: any = useNavigation();
    
    // const route: any = useRoute();


    const loadManagement = () => {
        // if (route.name === "HomeScreen") 
        // console.log(navigation.navigate)
        navigation.navigate("ManagementScreen")
    }

    const loadHome = () => {
        // if (route.name != "HomeScreen") 
        // navigation.navigate("HomeScreen")
        navigation.goBack()
    }

    return (
        <View style={style.container}>
            <View style={style.box}>
                <Button
                 color={COLORS.BUTTON_BACKGROUND}
                 title="Библиотека"
                 onPress={loadHome}
                 />
            </View>
            <View style={style.box}>
                <Button
                 color={COLORS.BUTTON_BACKGROUND}
                 title="Управление"
                 onPress={loadManagement}
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
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
    }
})

export default Footer