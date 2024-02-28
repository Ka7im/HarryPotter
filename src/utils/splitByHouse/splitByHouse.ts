import { House, ICharacter } from "@/types/character";

export const splitByHouse = (characters: ICharacter[]) => {
  const splittedCharacters: Record<House, ICharacter[]> = { "": [], Gryffindor: [], Hufflepuff: [], Ravenclaw: [], Slytherin: [] }

  characters.forEach((char) => {
    splittedCharacters[char.house].push(char)
  })

  return splittedCharacters
}