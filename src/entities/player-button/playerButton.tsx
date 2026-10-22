import { View, TouchableOpacity, Button, Text, StyleSheet } from "react-native"
import { useState } from 'react';
// Icons
import Inactiveplayer from "@/shared/images/in_active-player.svg"
import Activeplayer from "@/shared/images/active-player.svg"

import MusicSlider from './MusicSlider';


export const PlayerButton = () => {
    const [isFavorite, setFavorite] = useState(false)


    const [isActive, setIsActive] = useState(false);
    const [currentProgress, setCurrentProgress] = useState(0);

    // Длительность в миллисекундах (5 секунд для примера)
    const DURATION = 10000;

    const handleProgressChange = (progress: number) => {
        setCurrentProgress(progress);
    };

    const formattedTime = (progress: number) => {
        const seconds = Math.floor((progress * DURATION) / 1000);
        return `${seconds}s / ${DURATION / 1000}s`;
    };


    return (
        <View>
            <TouchableOpacity style={{marginHorizontal: 'auto'}} onPress={() => setFavorite(!isFavorite) }>
                {isFavorite ? <Activeplayer/> : <Inactiveplayer/>}
            </TouchableOpacity>
            <View style={styles.container}>
                <MusicSlider
                    duration={DURATION}
                    isActive={isFavorite}
                    onProgressChange={handleProgressChange}
                />

                <Text style={styles.timeText}>{formattedTime(currentProgress)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginTop: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  timeText: {
    fontSize: 16,
    marginTop: 20,
    color: '#666666',
  },
});