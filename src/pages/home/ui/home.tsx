import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
// Entities
import { Poster } from "@/entities/poster/ui"
import { Tale } from "@/entities/tale/ui"
// Widgets
import { Footer } from "@/widgets/footer"
// Get data from API
import { useTale } from "../model"
import { COLORS } from "@/shared/constant"
  
export const Home = () => {
  const { dataSheet, dataTale } = useTale()
  const navigation = useNavigation<any>()

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.HOME_BACKGROUND }}>
      <ScrollView>
        <Poster imagePost='1' redirectLink='12' />
        <View style={{ marginTop: 20, marginHorizontal: "6%" }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={ style.text }>{`${dataSheet}`}</Text>
            <Text style={ style.text }>Все</Text>
          </View>
          <ScrollView 
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={{columnGap: 20,}}
            style={ style.scrollContainer }
          >
            { 
              dataTale.map((item) => (
                <TouchableOpacity onPress={() => {
                  navigation.navigate("TaleScreen", { imageUrl: item.imageUrl, 
                                                      name: item.name, 
                                                      author: item.author
                                                    })
                }}>
                  <Tale imageUrl={item.imageUrl} name={item.name} author={item.author}/>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        </View>
      </ScrollView>
      <Footer />
    </View>
  )
}

const style = StyleSheet.create({
  scrollContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 600,
  }
})