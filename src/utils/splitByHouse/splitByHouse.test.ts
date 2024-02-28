import { House, ICharacter } from "@/types/character"
import { splitByHouse } from "./splitByHouse"

describe('splitByHouse', () => {
  test('check enter Gryffindor', () => {
    const characters: ICharacter[] = [{ dateOfBirth: '30-07-1980', house: 'Gryffindor' }]

    const expectResult: Record<House, ICharacter[]> = {
      "": [], Gryffindor: [{ dateOfBirth: '30-07-1980', house: 'Gryffindor' }],
      Hufflepuff: [], Ravenclaw: [], Slytherin: []
    }

    expect(splitByHouse(characters)).toEqual(expectResult)
  })
  test('check enter Slytherin', () => {
    const characters: ICharacter[] = [{ dateOfBirth: '30-07-1980', house: 'Slytherin' }]

    const expectResult: Record<House, ICharacter[]> = {
      "": [], Gryffindor: [],
      Hufflepuff: [], Ravenclaw: [], Slytherin: [{ dateOfBirth: '30-07-1980', house: 'Slytherin' }]
    }

    expect(splitByHouse(characters)).toEqual(expectResult)
  })
  test('check enter Hufflepuff', () => {
    const characters: ICharacter[] = [{ dateOfBirth: '30-07-1980', house: 'Hufflepuff' }]

    const expectResult: Record<House, ICharacter[]> = {
      "": [], Gryffindor: [],
      Hufflepuff: [{ dateOfBirth: '30-07-1980', house: 'Hufflepuff' }], Ravenclaw: [], Slytherin: []
    }

    expect(splitByHouse(characters)).toEqual(expectResult)
  })
  test('check enter Ravenclaw', () => {
    const characters: ICharacter[] = [{ dateOfBirth: '30-07-1980', house: 'Ravenclaw' }]

    const expectResult: Record<House, ICharacter[]> = {
      "": [], Gryffindor: [],
      Hufflepuff: [], Ravenclaw: [{ dateOfBirth: '30-07-1980', house: 'Ravenclaw' }], Slytherin: []
    }

    expect(splitByHouse(characters)).toEqual(expectResult)
  })
  test('check enter houses', () => {
    const characters: ICharacter[] = [{ dateOfBirth: '30-07-1980', house: 'Ravenclaw' },
    { dateOfBirth: '30-07-1980', house: 'Hufflepuff' },
    { dateOfBirth: '30-07-1980', house: 'Gryffindor' },
    { dateOfBirth: '30-07-1980', house: 'Slytherin' }]

    const expectResult: Record<House, ICharacter[]> = {
      "": [], Gryffindor: [{ dateOfBirth: '30-07-1980', house: 'Gryffindor' },],
      Hufflepuff: [{ dateOfBirth: '30-07-1980', house: 'Hufflepuff' }],
      Ravenclaw: [{ dateOfBirth: '30-07-1980', house: 'Ravenclaw' }],
      Slytherin: [{ dateOfBirth: '30-07-1980', house: 'Slytherin' }]
    }

    expect(splitByHouse(characters)).toEqual(expectResult)
  })
})