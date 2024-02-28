import { ICharacter } from "@/types/character"

const API_URL = 'https://hp-api.onrender.com/api/characters'

export const fetchHPCharacters = async () => {
  const res = await fetch(API_URL)

  return await res.json() as ICharacter[]
}