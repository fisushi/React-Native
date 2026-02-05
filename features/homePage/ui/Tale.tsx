import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const width: number = Dimensions.get('window').width;
const vw = (percentage: number) => width * (percentage / 100);
const baseUrl: string = 'http://localhost:3000/kitty'

axios.get(baseUrl).then((res) => {
  console.log(res.data)
})

const Tale = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(baseUrl)
        .then(respons => {
            setData(respons.data)
        })
        .catch(error => console.error(error))
    }, [])
    console.log(data)

    return (
        <View style={style.container}>
            <Image
                source={{ uri: 'https://www.radionetplus.ru/uploads/posts/2013-12/thumbs/1387478932_krasivye-fotki-1.jpg' }}
                style={style.image}
            />
            <View style={style.box}>
                <Text
                    style={{backgroundColor: '#2f2f2f', flex: 1, width: '100%', textAlign: 'center', color: '#ffffff'}}>
                    Название
                </Text>
                <Text
                    style={{backgroundColor: '#7c7c7c', flex: 3, width: '100%'}}>
                    Описание
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

export default Tale