import profileInfo from './profil.json'

export const profil = path => {
  const elements = path.split('.')

  return elements.reduce((acc, element) => acc[element], profileInfo)
}