import { ICharacter } from "@/types/character"
import { getByDate } from "./getByDate"

describe('getByDate', () => {
  test('between dates', () => {
    const characters: ICharacter[] = [{ house: 'Gryffindor', dateOfBirth: '10-02-1975' }]

    expect(getByDate(characters, new Date('1974-01-30'), new Date('1976-01-30'))).toEqual(characters)
  })
  test('less dates', () => {
    const characters: ICharacter[] = [{ house: 'Gryffindor', dateOfBirth: '10-02-1973' }]

    expect(getByDate(characters, new Date('1974-01-30'), new Date('1976-01-30'))).toEqual([])
  })
  test('grater dates', () => {
    const characters: ICharacter[] = [{ house: 'Gryffindor', dateOfBirth: '10-02-1977' }]

    expect(getByDate(characters, new Date('1974-01-30'), new Date('1976-01-30'))).toEqual([])
  })
})