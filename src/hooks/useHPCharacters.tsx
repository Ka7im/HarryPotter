import { fetchHPCharacters } from "@/api/hp"
import { ICharacter } from "@/types/character"
import { useEffect, useState } from "react"

export const useHPCharacters = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([])

  useEffect(() => {
    fetchHPCharacters().then((chars) => {
      setCharacters(chars)
    })
  }, [])

  return characters
}