export const getRandomArrayValue = <T>(arr: T[]) =>
  arr[Math.floor(Math.random() * arr.length)]
