export default function arrayGetRandom(array) {
  const { length } = array
  const index = Math.floor(Math.random()*length)
  return array[index]
}
