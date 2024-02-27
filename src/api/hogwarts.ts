const API_URL = 'https://hp-api.onrender.com/api/characters'

export const fetchHogwarts = async () => {
  const res = await fetch(API_URL)

  return JSON.parse(await res.json())
}