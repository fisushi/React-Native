import { Dimensions, Image, StyleSheet, Text, View, Button } from "react-native";

interface taleList {
    id: number,
    imageUrl: string,
    name: string,
    description: string,
}

const width: number = Dimensions.get('window').width;
const vw = (percentage: number) => width * (percentage / 100);

export const Tale = ( {id, imageUrl, name, description}: taleList ) => {
    return (
        <View style={style.container}>
            <Image
                source={{ uri: imageUrl }}
                style={style.image}
            />
            <View style={style.box}>
                <Text
                    style={{backgroundColor: '#2f2f2f', flex: 1, width: '100%', textAlign: 'center', color: '#ffffff'}}>
                    №{id} {name}
                </Text>
                <Text
                    style={{backgroundColor: '#7c7c7c', flex: 3, width: '100%'}}>
                    {description}
                </Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        margin: 'auto',
        flexDirection: 'row',
        width: '88%',
        height: vw(44),
        gap: 15,

        marginTop: 10,
        marginBottom: 10,
    },
    box: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        gap: 15,
    },
    image: {
        width: "35%",
        height: "100%",
    }
})