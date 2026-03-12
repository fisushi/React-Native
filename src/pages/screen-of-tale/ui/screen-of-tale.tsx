import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
// Shared
import { COLORS } from "@/shared/constant"

interface taleListProps {
  route: {
    params: {
        imageUrl: string, 
        name: string, 
        author: string,    
    }
  }
}

export const ScreenOfTale = ({ route }: taleListProps) => {
    const {imageUrl, name, author} = route.params
    const navigation: any = useNavigation()

    return (
        <View style={{flex: 1}}>
            <View style={style.topPanel}>
                <TouchableOpacity 
                    style={{width: "50%"}}
                    onPress={() => {navigation.goBack()}}
                >
                    <Text style={{fontSize: 34}}>&larr;</Text>
                </TouchableOpacity>
                <View style={{flexDirection: "row", gap: 20}}>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={{fontSize: 34}}>...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={{fontSize: 34}}>*</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{alignItems: 'center', marginTop: 20}}>
                <Image
                    source={{uri: imageUrl}}
                    style={style.image}
                />
                <Text style={{fontSize: 16, fontWeight: 500, marginTop: 17}}>{name}</Text>
                <Text style={{fontSize: 12, color: "#666666", marginTop: 11}}>{author}</Text>
            </View>
            <View style={style.box}>
                <Text style={style.long}>
                    30 минут
                </Text>
                <View style={{flex: 1, paddingHorizontal: "6%"}}>
                    <Text style={style.about}>
                        О сказке
                    </Text>
                    <Text 
                        style={{fontSize: 16}}
                        numberOfLines={7}>
                        В одной деревушке жила маленькая добрая девочка, которую очень любили её мама и бабушка. Ко дню рождения бабушка подарила ей красную шапочку, которая так понравилась девочке, что та повсюду в ней ходила и никогда не снимала. С тех пор все стали звать её Красной Шапочкой. 
                    </Text>
                    <TouchableOpacity style={{flex: 1}}>
                        <Text style={{color: "#8B8B8B", fontSize: 14}}>
                            Далее
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={style.button}>
                    <Text style={{fontSize: 16, fontWeight: 700, color: "#414141"}}>Начать</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}

const style = StyleSheet.create({
    image: {
        width: 277,
        height: 335,
        borderRadius: 5,
    },
    button: {
        width: "70%",
        alignSelf: "center",
        backgroundColor: "#949494",
        alignItems: "center",
        paddingBottom: 20,
        paddingTop: 14,
        borderRadius: 8,
        marginBottom: 50,
    },
    box: {
        flex: 1,
        backgroundColor: COLORS.HEADER_BACKGROUND,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        marginTop: 45,
    },
    long: {
        backgroundColor: "#B9B9B9",
        fontSize: 16,
        fontWeight: 700,
        width: 125,
        height: 35,
        color: "#FFFFFF",
        borderRadius: 30,
        textAlign: "center",
        alignSelf: "center",
        lineHeight: 35,
        top: -17,
    },
    about: {
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 3,
    },
    topPanel: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 40,
        marginTop: 50,
    }
})