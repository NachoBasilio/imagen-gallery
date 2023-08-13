import { useState } from "react";

export default function useFetch() {
  const [imagenes, setImagenes] = useState([]);

  const getImagenes = async (cantidad) => {
    const numeroAleatorio = Math.floor(Math.random() * 50 );
    const url = `https://picsum.photos/v2/list?page=${numeroAleatorio}&limit=${cantidad}`;
    const res = await fetch(url);
    const data = await res.json();

    setImagenes([...imagenes, ...data]);
  };

  return {
    imagenes,
    getImagenes,
  };
}
