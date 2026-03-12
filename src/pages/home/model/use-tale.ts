import { useEffect, useState } from 'react'
import { getData } from "../api"

interface taleList {
  imageUrl: string, 
  name: string, 
  author: string,
  forName: string,
  linkAll: string,
}

export const useTale = () => {
    const [list, setList] = useState<taleList[]>([])

    useEffect(() => {
        getData()
        .then((respons) => {
            setList(respons)
        })
    }, []);

    const dataSheet = list[0]?.forName || "Сказки"
    const dataTale = list.slice(1)

    return { dataSheet, dataTale }
}