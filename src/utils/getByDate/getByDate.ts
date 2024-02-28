import { ICharacter } from "@/types/character";

export const getByDate = (characters: ICharacter[], from: Date, to: Date) => {
  return characters.filter((character) => {
    if (!character.dateOfBirth) return false

    const [day, month, year] = character.dateOfBirth.split('-').map(Number)

    const charBirthDate = new Date()
    charBirthDate.setFullYear(year, month, day)

    return charBirthDate.getTime() >= from.getTime() && charBirthDate.getTime() <= to.getTime()
  })
}