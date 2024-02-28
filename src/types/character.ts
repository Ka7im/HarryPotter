export type House = 'Ravenclaw' | 'Gryffindor' | 'Hufflepuff' | 'Slytherin' | ''

export interface ICharacter {
  house: House
  dateOfBirth: string | null
}