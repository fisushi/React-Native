import { TouchableOpacity, StyleSheet, Image } from "react-native"

interface dataPost {
    imagePost: string,
    redirectLink: string,
}

export const Poster = ( {imagePost, redirectLink}: dataPost ) => {
    return (
        <TouchableOpacity style={style.conteiner} onPress={() => console.log('Клик по баннеру!')}>
            <Image 
                source={{uri: 'https://skazki.online/wp-content/uploads/krasnaya-shapochka-7-800x417.jpg'}}
                style={style.image}
            />
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    conteiner: {
        marginTop: 118, // Времено, было 15
        width: "88%",
        height: 120,
        marginLeft: "6%",
        marginRight: "6%",
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 5,
    }
})