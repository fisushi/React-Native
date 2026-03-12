import { Image, StyleSheet, Text, View } from "react-native"

interface taleList {
    imageUrl: string,
    name: string,
    author: string,
}

export const Tale = ( {imageUrl, name, author}: taleList ) => {
    return (
        <View style={style.container}>
            <Image
                source={{ uri: imageUrl }}
                style={style.image}
            />
            <Text
                style={{flex: 1, width: '100%'}}>
                {name}
            </Text>
            <Text
                style={{width: '100%', color: "#666666"}}>
                {author}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        rowGap: 3,
        width: 140,
    },
    image: {
        borderRadius: 5,
        width: "100%",
        height: 140,
    }
})