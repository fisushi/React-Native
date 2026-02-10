import { Tale } from "@/entities/library/tale";
import { ScrollView, View, Text } from "react-native";
import { Footer } from "@/widgets/footer";
import { getData } from "../api";
import React, { useEffect, useState } from 'react';

interface taleList {
  length?: number
  id: number, 
  imageUrl: string, 
  name: string, 
  description: string,
}
  
export const Home = () => {
  const [list, setList] = useState<taleList[]>([]);

  useEffect(() => {
      getData().then((respons) => {
        setList(respons)
      })
  }, []);

  return (
    <View style={{ flex: 1,}}>
      <ScrollView style={{ marginTop: 15, marginBottom: 15, }}>
        {
          list.map((item) => (
            <Tale id={item.id} imageUrl={item.imageUrl} name={item.name} description={item.description}/>
          ))
        }
      </ScrollView>
      <Footer />
    </View>
  )
}