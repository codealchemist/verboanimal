const maleLastLetters = ['o', 'l', 'n', 'e', 'r', 's']

export default function getWordGender(word) {
  if (!word) return false
  const lastLetter = word.slice(-1)

  let gender = 'female'
  if (maleLastLetters.includes(lastLetter)) {
    gender = 'male'
  }
  return gender
}
