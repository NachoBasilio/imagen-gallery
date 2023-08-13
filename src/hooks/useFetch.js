import { useState } from "react"


export default function  useFetch() {
    const [imagenes, setImagenes] = useState([])
    const numeroAleatorio = Math.floor(Math.random() * 50)
    const getImagenes = async (cantidad) => {
        const url = `https://picsum.photos/v2/list?page=${numeroAleatorio}&limit=${cantidad}`
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        setImagenes([...imagenes, ...data])
    }

    return{
        imagenes,
        getImagenes
    }
}
